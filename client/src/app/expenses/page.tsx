"use client"

import { useGetExpensesByCategoryQuery } from "@/state/api"
import { useState } from "react"

export default function Expenses() {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [selectCategory, setSelectCategory] = useState<string>("All")
  const [startDate, setStartDate] = useState<string>("")
  const [endDate, setEndDate] = useState<string>("")

  const {
    data: expensesData,
    isLoading,
    isError,
  } = useGetExpensesByCategoryQuery()

  if (isLoading) return <div className="py-4">Loading...</div>

  if (isError || !expensesData)
    return <div className="py-4">Failed to fetch expenses!</div>

  return <div>Expenses</div>
}
