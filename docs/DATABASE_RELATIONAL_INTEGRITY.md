# Ithere Care — Database Relational Integrity & Foreign Key Governance

## Document Metadata
- **Document Title:** Database Relational Integrity & Patient Foreign Key Governance Specification
- **Product:** Ithere Care (Ithere Systems — Hospital Edition)
- **Component:** Enterprise Backend Persistence Tier (`myclinic-server`)
- **Status:** Complete / Enforced
- **Date:** November 16, 2026
- **Migration:** `1794786180062-FixPatientIdForeignKeyGaps.ts`

---

## 1. Executive Summary & Root Cause

During the foundational architecture audit of Ithere Care, a critical database integrity gap was discovered:

### The Root Cause
In the initial development cycle, the `patients` entity was defined with an auto-incrementing `integer` primary key (`id serial PRIMARY KEY`). However, across all associated clinical, diagnostic, pharmacy, billing, and HMO tables, the `patientId` column was defined as `character varying` (`varchar`).

Because PostgreSQL strictly prohibits creating foreign key constraints between mismatched data types (`integer` vs `character varying`), **no relational constraints existed between `patients` and any clinical table**.

### Operational & Compliance Risks
1. **Orphaned Clinical Records:** Records could be inserted with arbitrary, mistyped, or non-existent patient IDs.
2. **Accidental Deletion & Patient Purging:** Deleting a patient record in the database would leave dependent prescriptions, lab results, clinical encounters, and unpaid invoices stranded without referential links.
3. **Regulatory Non-Compliance:** Healthcare data standards (HIPAA, NDPR, GDPR) mandate strict referential integrity for clinical audit trails and electronic health records.

---

## 2. Inventory of Affected Tables & Column Schema Transformation

All 13 tables across 6 backend domain modules were audited, converted, and linked with foreign keys to `patients(id)` with `ON DELETE RESTRICT`:

| Module | Table Name | Column Name | Previous Type | Updated Type | Nullable | Foreign Key Constraint Name | Action on Patient Delete |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Clinical** | `admissions` | `patientId` | `varchar` | `integer` | YES | `FK_admissions_patientId_patients` | `RESTRICT` |
| **Clinical** | `clinical_encounters` | `patientId` | `varchar` | `integer` | YES | `FK_clinical_encounters_patientId_patients` | `RESTRICT` |
| **Clinical** | `vital_signs` | `patientId` | `varchar` | `integer` | YES | `FK_vital_signs_patientId_patients` | `RESTRICT` |
| **Appointment** | `appointments` | `patientId` | `varchar` | `integer` | YES | `FK_appointments_patientId_patients` | `RESTRICT` |
| **Laboratory** | `lab_requests` | `patientId` | `varchar` | `integer` | YES | `FK_lab_requests_patientId_patients` | `RESTRICT` |
| **Laboratory** | `lab_results` | `patientId` | `varchar` | `integer` | YES | `FK_lab_results_patientId_patients` | `RESTRICT` |
| **Laboratory** | `lab_reports` | `patientId` | `varchar` | `integer` | YES | `FK_lab_reports_patientId_patients` | `RESTRICT` |
| **Pharmacy** | `prescriptions` | `patientId` | `varchar` | `integer` | YES | `FK_prescriptions_patientId_patients` | `RESTRICT` |
| **Pharmacy** | `pharmacy_sales` | `patientId` | `varchar` | `integer` | YES | `FK_pharmacy_sales_patientId_patients` | `RESTRICT` |
| **Billing** | `patient_invoices` | `patientId` | `varchar` | `integer` | YES | `FK_patient_invoices_patientId_patients` | `RESTRICT` |
| **Billing** | `payment_transactions` | `patientId` | `varchar` | `integer` | YES | `FK_payment_transactions_patientId_patients` | `RESTRICT` |
| **HMO** | `hmo_pre_authorizations` | `patientId` | `varchar` | `integer` | YES | `FK_hmo_pre_authorizations_patientId_patients` | `RESTRICT` |
| **HMO** | `hmo_claims` | `patientId` | `varchar` | `integer` | YES | `FK_hmo_claims_patientId_patients` | `RESTRICT` |

---

## 3. Pre-Migration Data Validation & Integrity Audit

Before modifying any column types or applying database constraints, an empirical read-only audit of the PostgreSQL database (`myclinic_db`) was performed.

### Audit Findings
- **Total Registered Patients (`patients`):** 2 active records (`id: 1` — test patient; `id: 2` — Test Female).
- **Existing Rows in 13 Clinical Tables:** 0 rows (tables were currently empty of legacy records).
- **Orphaned Patient References:** 0.
- **Non-Numeric Patient IDs:** 0.
- **Empty String Patient IDs:** 0.
- **Data Loss Assessment:** Zero data lost. No manual data correction or record deletion was required.

---

## 4. Migration Architecture & Implementation

### A. TypeORM Migration File
- **Path:** `src/migrations/1794786180062-FixPatientIdForeignKeyGaps.ts`
- **Class:** `FixPatientIdForeignKeyGaps1794786180062`

### B. Safe Type Conversion SQL
To guarantee safe, idempotent execution regardless of future data contents, the migration employs defensive regular expression parsing rather than an unconditional cast:

```sql
ALTER TABLE "clinical_encounters" 
ALTER COLUMN "patientId" TYPE integer 
USING (
  CASE 
    WHEN "patientId"::text ~ '^[0-9]+$' THEN "patientId"::text::integer
    ELSE NULL
  END
);
```

### C. Foreign Key Constraint Creation with `ON DELETE RESTRICT`
Foreign keys were created using declarative PL/pgSQL idempotent blocks:

```sql
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.table_constraints 
    WHERE constraint_name = 'FK_clinical_encounters_patientId_patients' 
      AND table_name = 'clinical_encounters'
  ) THEN
    ALTER TABLE "clinical_encounters"
    ADD CONSTRAINT "FK_clinical_encounters_patientId_patients"
    FOREIGN KEY ("patientId") 
    REFERENCES "patients"("id") 
    ON DELETE RESTRICT;
  END IF;
END $$;
```

### D. Performance Indexing
High-performance B-tree indexes were established on each `patientId` column:

```sql
CREATE INDEX IF NOT EXISTS "IDX_clinical_encounters_patientId" ON "clinical_encounters" ("patientId");
```

---

## 5. TypeORM Entity Model Updates

Each clinical entity was updated to formally define the relation to `Patient`:

```typescript
@ManyToOne(() => Patient, { nullable: true, onDelete: 'RESTRICT' })
@JoinColumn({ name: 'patientId' })
patient?: Patient;

@Index()
@Column({ type: 'int', nullable: true })
patientId?: number;
```

Updated Entity Files:
1. `src/modules/clinical/entities/clinical.entity.ts` (`Admission`, `ClinicalEncounter`, `VitalSign`)
2. `src/modules/appointment/entities/appointment.entity.ts` (`Appointment`)
3. `src/modules/lab/entities/lab.entity.ts` (`LabRequest`, `LabResult`, `LabReport`)
4. `src/modules/pharmacy/entities/pharmacy.entity.ts` (`Prescription`, `PharmacySale`)
5. `src/modules/billing/entities/billing.entity.ts` (`PatientInvoice`, `PaymentTransaction`)
6. `src/modules/hmo/entities/hmo-pre-authorization.entity.ts` (`HmoPreAuthorization`)
7. `src/modules/hmo/entities/hmo-claim.entity.ts` (`HmoClaim`)

---

## 6. Verification and Empirical Testing Results

A comprehensive automated database test suite (`scratch/verify_fk_integrity.js`) was executed against the database:

1. **Column Data Type Verification:** All 13 tables verified to have `patientId` of type `integer` (13/13 ✅).
2. **Constraint Verification:** All 13 foreign keys verified in `information_schema.table_constraints` referencing `patients(id)` with `delete_rule = 'RESTRICT'` (13/13 ✅).
3. **Rejection of Non-Existent Patient IDs:** Attempted insertion of non-existent `patientId: 999999` across all 13 tables. PostgreSQL actively rejected every attempt with code `23503: foreign_key_violation` (13/13 ✅).
4. **Valid Reference Acceptance:** Inserted a live clinical encounter referencing valid `patientId: 1`. Successfully stored with referential link (✅).
5. **Enforcement of `ON DELETE RESTRICT`:** Executed `DELETE FROM patients WHERE id = 1` while the clinical encounter existed. PostgreSQL blocked the physical deletion with standard code `23001: restrict_violation`:
   > *"update or delete on table "patients" violates RESTRICT setting of foreign key constraint "FK_clinical_encounters_patientId_patients" on table "clinical_encounters". Key (id)=(1) is referenced from table "clinical_encounters"..."*
6. **Application Soft Deletion Preservation:** Verified that `patientService.remove()` uses `softRemove()`, populating `deleted_at` while preserving all dependent medical history intact.
7. **Suite Passes:**
   - `npm test`: 12 of 12 test suites passed (32 of 32 unit tests passing).
   - `npm run build`: NestJS build completed with 0 compilation errors.
   - `npm run typeorm migration:show`: Migration confirmed executed `[X] 1 FixPatientIdForeignKeyGaps1794786180062`.

---

## 7. Rollback Considerations

If a rollback is ever mandated in an emergency, the `down()` method of the migration is fully reversible:

```bash
npm run typeorm migration:revert
```

The `down()` method:
1. Drops all 13 foreign key constraints (`ALTER TABLE "..." DROP CONSTRAINT IF EXISTS "FK_..._patientId_patients"`).
2. Restores the `patientId` column type to `character varying` (`ALTER TABLE "..." ALTER COLUMN "patientId" TYPE character varying USING "patientId"::text`).
3. Retains all existing numeric IDs as string equivalents without data loss.
