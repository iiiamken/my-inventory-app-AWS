"use client"

import { useGetProductsQuery } from "@/state/api"
import { SearchIcon } from "lucide-react"
import { useState } from "react"

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("")
  const [modalOpen, setModalOpen] = useState(false)

  const { data: products, isLoading, isError } = useGetProductsQuery(searchTerm)

  if (isLoading) return <div className="py-4">Loading...</div>

  if (isError || !products)
    return (
      <div className="text-center text-red-500 py-4">
        Failed to fetch products
      </div>
    )

  return (
    <div className="mx-auto pb-5 w-full">
      {/* Searchbar */}
      <div className="mb-6">
        <div className="flex items-center border-2 border-gray-200 rounded">
          <SearchIcon className="w-5 h-5 text-gray-500 m-2" />
          <input
            className="w-full py-2 px-4 rounded bg-white"
            placeholder="
          Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}
