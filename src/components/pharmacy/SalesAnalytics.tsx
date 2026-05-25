import React from "react";
import { Card } from "antd";
import { ShoppingCart, Wallet, Clock } from "lucide-react";
import type { Sale } from "../../types/pharmacy";

interface Props {
  sales: Sale[];
}

const SalesAnalytics: React.FC<Props> = ({ sales }) => {

  const totalSales = sales.length;

  const revenue = sales
    .filter((s) => s.paymentStatus === "paid")
    .reduce((sum, s) => sum + s.totalAmount, 0);

  const pendingPayments = sales
    .filter((s) => s.paymentStatus === "pending")
    .reduce((sum, s) => sum + s.totalAmount, 0);

  return (

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

      <Card className="rounded-xl">

        <div className="flex items-center gap-3">

          <ShoppingCart size={24} />

          <div>
            <p className="text-gray-500 text-sm">Total Sales</p>
            <p className="text-xl font-semibold">{totalSales}</p>
          </div>

        </div>

      </Card>

      <Card className="rounded-xl">

        <div className="flex items-center gap-3">

          <Wallet size={24} />

          <div>
            <p className="text-gray-500 text-sm">Revenue</p>
            <p className="text-xl font-semibold">
              ₦{revenue.toLocaleString()}
            </p>
          </div>

        </div>

      </Card>

      <Card className="rounded-xl">

        <div className="flex items-center gap-3">

          <Clock size={24} />

          <div>
            <p className="text-gray-500 text-sm">Pending Payments</p>
            <p className="text-xl font-semibold">
              ₦{pendingPayments.toLocaleString()}
            </p>
          </div>

        </div>

      </Card>

    </div>
  );
};

export default SalesAnalytics;