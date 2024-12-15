"use client"

import { useGetProductsQuery } from "@/state/api"

export default function Inventory() {
  const { data: products, isLoading } = useGetProductsQuery()
  return <div>Inventory</div>
}
