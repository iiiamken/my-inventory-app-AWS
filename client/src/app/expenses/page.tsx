"use client"

import { useGetExpensesByCategoryQuery } from "@/state/api"
import { useMemo, useState } from "react"
import Header from "../(components)/Header"

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

  const expenses = useMemo(() => expensesData ?? [], [expensesData])

  const classnames = {
    label: "block text-sm font-medium text-gray-700",
    selectInput:
      "mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm rounded-md",
  }

  if (isLoading) return <div className="py-4">Loading...</div>

  if (isError || !expensesData)
    return <div className="py-4">Failed to fetch expenses!</div>

  return (
    <div>
      <div className="mb-5">
        <Header name="Expenses" />
        <p className="text-sm text-gray500">
          A visual representation of expenses over time.
        </p>
      </div>
      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h3 className="text-lg font-semibold mb-4">
          Filter by Category and Date
        </h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="category" className={classnames.label}>
              Category
            </label>
            <select
              id="category"
              name="category"
              className={classnames.selectInput}
              defaultValue="All"
              onChange={(e) => setSelectCategory(e.target.value)}
            >
              <option>All</option>
              <option>Office</option>
              <option>Professional</option>
              <option>Salaries</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
