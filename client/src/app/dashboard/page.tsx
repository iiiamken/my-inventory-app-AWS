"use client"

import { CheckCircle, Package, TrendingDown, TrendingUp } from "lucide-react"
import CardExpenseSummary from "./CardExpenseSummary"
import CardPurchaseSummary from "./CardPurchaseSummary"
import CardSalesSummary from "./CardSalesSummary"
import StatCard from "./StatCard"

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <CardSalesSummary />
      <CardPurchaseSummary />
      <CardExpenseSummary />
      <StatCard
        title="Customer & Expenses"
        primaryIcon={<Package className="text-blue-600 w-6 h-6" />}
        dateRange="22 -29 october 2024"
        details={[
          {
            title: "Customer growth",
            amount: "175.00",
            changePercentage: 131,
            iconComponent: TrendingUp,
          },
          {
            title: "Customer growth",
            amount: "10.00",
            changePercentage: -56,
            iconComponent: TrendingDown,
          },
        ]}
      />
      <StatCard
        title="Customer & Expenses"
        primaryIcon={<CheckCircle className="text-blue-600 w-6 h-6" />}
        dateRange="22 -29 october 2024"
        details={[
          {
            title: "Dues",
            amount: "250.00",
            changePercentage: 131,
            iconComponent: TrendingUp,
          },
          {
            title: "Pending Orders",
            amount: "147",
            changePercentage: -56,
            iconComponent: TrendingDown,
          },
        ]}
      />
      <StatCard
        title="Sales & Discount"
        primaryIcon={<Package className="text-blue-600 w-6 h-6" />}
        dateRange="22 -29 october 2024"
        details={[
          {
            title: "Sales",
            amount: "1000",
            changePercentage: 20,
            iconComponent: TrendingUp,
          },
          {
            title: "Discount",
            amount: "200.00",
            changePercentage: -10,
            iconComponent: TrendingDown,
          },
        ]}
      />
    </div>
  )
}
