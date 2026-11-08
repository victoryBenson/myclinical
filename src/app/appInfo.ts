/**
 * Official Ithere Care & Ithere Technology Group Brand, Product Identity,
 * Versioning, and Ecosystem Metadata Registry.
 *
 * Single source of truth for application identity, deployment edition,
 * semantic versioning, and Ithere Ecosystem product descriptors.
 */

export interface ProductIdentityManifest {
  /** Official product name */
  productName: string;
  /** Concise product description */
  productDescription: string;
  /** Unique machine-readable product identifier */
  productId: string;
  /** Independent semantic version (SemVer 2.0.0) */
  currentVersion: string;
  /** Lifecycle status */
  status: "Development" | "Alpha" | "Beta" | "Production";
  /** Official release / baseline date (ISO 8601) */
  releaseDate: string;
  /** Commercial edition or deployment model */
  edition: string;
  /** Deployment model classification */
  deploymentModel: "Standalone Product" | "Product Bundle" | "Integrated Enterprise Solution";
  /** Build and runtime stack metadata */
  buildInfo: {
    baselineCommit: string;
    branch: string;
    frontendStack: string;
    backendStack: string;
    databaseEngine: string;
  };
  /** Summary of current version changelog */
  changelog: readonly string[];
  /** Supported ecosystem and healthcare integrations */
  supportedIntegrations: readonly string[];
  /** Official documentation paths */
  documentation: {
    systemDocumentationMarkdown: string;
    systemDocumentationPdf: string;
    ecosystemArchitectureMarkdown: string;
    ecosystemArchitecturePdf: string;
  };
}

export const ITHERE_CARE_MANIFEST: ProductIdentityManifest = {
  productName: "Ithere Care",
  productDescription:
    "Enterprise Hospital Management Information System (HMIS), Electronic Medical Record (EMR), and Clinical Operations Platform.",
  productId: "ithere-care",
  currentVersion: "0.1.0",
  status: "Development",
  releaseDate: "2026-11-06",
  edition: "Ithere Systems — Hospital Edition",
  deploymentModel: "Integrated Enterprise Solution",
  buildInfo: {
    baselineCommit: "ae06a5b",
    branch: "refactor",
    frontendStack: "React 19.2, TypeScript 5.9, Vite 7.3, Tailwind CSS 3.4, Ant Design 6.3",
    backendStack: "NestJS REST API (JWT Bearer Auth)",
    databaseEngine: "PostgreSQL",
  },
  changelog: [
    "v0.1.0: Established official Ithere Care product identity and Ithere Systems — Hospital Edition deployment positioning.",
    "v0.1.0: Configured 13-department two-tier HMIS workspace architecture across 169 route views.",
    "v0.1.0: Integrated live JWT authentication (/auth/login), Patient Directory & Multi-Category Registration (/patients), and HMO lookup (/hmos).",
  ],
  supportedIntegrations: [
    "Ithere Core Identity & RBAC Service (JWT / OAuth2)",
    "Ithere Talent Workforce & Roster Sync API (Optional)",
    "Ithere Enterprise General Ledger & Revenue Sync API (Optional)",
    "Ithere Learn Clinical CME & Training Sync API (Optional)",
    "HL7 FHIR R4 / DICOM PACS / LIS Middleware (Planned)",
  ],
  documentation: {
    systemDocumentationMarkdown: "docs/ITHERE_CARE_SYSTEM_DOCUMENTATION.md",
    systemDocumentationPdf: "docs/ITHERE_CARE_SYSTEM_DOCUMENTATION.pdf",
    ecosystemArchitectureMarkdown: "docs/ITHERE_ECOSYSTEM_ARCHITECTURE_STRATEGY.md",
    ecosystemArchitecturePdf: "docs/ITHERE_ECOSYSTEM_ARCHITECTURE_STRATEGY.pdf",
  },
} as const;

export const APP_INFO = {
  /** Primary healthcare product name */
  name: ITHERE_CARE_MANIFEST.productName,
  /** Unique machine-readable product identifier */
  productId: ITHERE_CARE_MANIFEST.productId,
  /** Product category description */
  subtitle: "Healthcare Management Information System",
  /** Integrated enterprise solution deployment identity */
  deploymentName: ITHERE_CARE_MANIFEST.edition,
  /** Short deployment badge for compact headers/sidebars */
  deploymentBadge: "Ithere Systems • Hospital Edition",
  /** Product attribution */
  attribution: "Powered by Ithere Care",
  /** Parent organization */
  parentCompany: "Ithere Technology Group",
  /** Parent company tagline */
  parentTagline: "The Future Has an Address.",
  /** Official semantic version */
  version: ITHERE_CARE_MANIFEST.currentVersion,
  /** Current lifecycle status */
  status: ITHERE_CARE_MANIFEST.status,
  /** Formatted version string for UI display */
  versionLabel: `v${ITHERE_CARE_MANIFEST.currentVersion} (${ITHERE_CARE_MANIFEST.status})`,
  /** Compact version string */
  shortVersion: `v${ITHERE_CARE_MANIFEST.currentVersion}-dev`,
  /** Default institutional email domain */
  defaultEmail: "alex.clinic@itherecare.health",
  /** Full product manifest reference */
  manifest: ITHERE_CARE_MANIFEST,
} as const;
