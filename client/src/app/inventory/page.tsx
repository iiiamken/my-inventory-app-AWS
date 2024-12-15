"use client"

import { useGetProductsQuery } from "@/state/api"
import Header from "../(components)/Header"

export default function Inventory() {
  const { data: products, isLoading, isError } = useGetProductsQuery()

  if (isLoading) return <div className="py-4">Loading...</div>
  if (isError || !products)
    return (
      <div className="text-center text-red-500 py-4">
        Failed to fetch products
      </div>
    )
  return (
    <div className="flex flex-col">
      <Header name={"Inventory"} />
    </div>
  )
}
