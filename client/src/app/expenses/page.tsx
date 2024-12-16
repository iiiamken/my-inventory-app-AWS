"use client"

import {
  ExpenseByCategorySummary,
  useGetExpensesByCategoryQuery,
} from "@/state/api"
import { useMemo, useState } from "react"
import Header from "../(components)/Header"
import { Pie, PieChart, ResponsiveContainer } from "recharts"

type AggregatedDataItem = {
  name: string
  color?: string
  amount: number
}
type AggregatedData = {
  [category: string]: AggregatedDataItem
}

export default function Expenses() {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [startDate, setStartDate] = useState<string>("")
  const [endDate, setEndDate] = useState<string>("")

  const {
    data: expensesData,
    isLoading,
    isError,
  } = useGetExpensesByCategoryQuery()

  const expenses = useMemo(() => expensesData ?? [], [expensesData])

  function parseDate(dateString: string) {
    const date = new Date(dateString).toISOString().split("T")[0]
    return date
  }

  const aggregatedData: AggregatedDataItem[] = useMemo(() => {
    const filtered: AggregatedData = expenses
      .filter((data: ExpenseByCategorySummary) => {
        const matchesCategory =
          selectedCategory === "All" || data.category === selectedCategory

        const dataDate = parseDate(data.date)

        const matchesDate =
          !startDate ||
          !endDate ||
          (dataDate >= startDate && dataDate <= endDate)

        return matchesCategory && matchesDate
      })
      .reduce((acc: AggregatedData, data: ExpenseByCategorySummary) => {
        const amount = parseInt(data.amount)
        if (!acc[data.category]) {
          acc[data.category] = {
            name: data.category,
            amount: 0,
          }
        }
        acc[data.category].color = `#${Math.floor(
          Math.random() * 16777215
        ).toString(16)}` // Generate random color
        acc[data.category].amount += amount
        return acc
      }, {})
    return Object.values(filtered)
  }, [expenses, selectedCategory, startDate, endDate])

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
      {/* Header */}
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
          {/* Category */}
          <div>
            <label htmlFor="category" className={classnames.label}>
              Category
            </label>
            <select
              id="category"
              name="category"
              className={classnames.selectInput}
              defaultValue="All"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option>All</option>
              <option>Office</option>
              <option>Professional</option>
              <option>Salaries</option>
            </select>
          </div>
          {/* Start Date */}
          <div>
            <label htmlFor="start-date" className={classnames.label}>
              Start Date
            </label>
            <input
              type="date"
              id="start-date"
              name="start-date"
              className={classnames.selectInput}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          {/* End Date */}
          <div>
            <label htmlFor="start-date" className={classnames.label}>
              End Date
            </label>
            <input
              type="date"
              id="end-date"
              name="end-date"
              className={classnames.selectInput}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
      </div>
      {/* Pie Chart */}
      <div className="flex-grow bg-white shadow rounded-lg p-4 md:p-6">
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={aggregatedData}
              cx="50%"
              cy="50%"
              label
              outerRadius={150}
              fill="#8884d8"
              dataKey="amount"
              onMouseEnter={(_, index) => setActiveIndex(index)}
            ></Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
