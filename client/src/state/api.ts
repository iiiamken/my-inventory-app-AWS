import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export interface Product {
  productId: string
  name: string
  price: number
  rating?: number
  stockQuantity: number
}

export interface SalesSummary {
  salesSummaryId: string
  totalValue: number
  changePercentage: number
  date: string
}

export interface PurchaseSummary {
  purchaseSummaryId: string
  totalPurchased: number
  changePercentage: number
  date: string
}
export interface SalesSummary {
  id: number
  date: string
  totalSales: number
  totalValue: number
  createdAt: string
  updatedAt: string
}

export interface ExpenseSummary {
  expenseSummaryId: string
  totalExpenses: number
  date: string
}

export interface ExpenseByCategorySummary {
  expenseByCategorySummaryId: string
  category: string
  amount: string
  date: string
}

export interface getDashboardData {
  popularProducts: Product[]
  salesSummary: SalesSummary[]
  purchaseSummary: PurchaseSummary[]
  expenseSummary: ExpenseSummary[]
  expenseByCategorySummary: ExpenseByCategorySummary[]
}

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  reducerPath: "api",
  tagTypes: ["DashboardData"],
  endpoints: (build) => ({
    getDashboadData: build.query<getDashboardData, void>({
      query: () => "/dashboard",
      providesTags: ["DashboardData"],
    }),
  }),
})

export const { useGetDashboadDataQuery } = api
