import { useGetDashboadDataQuery } from "@/state/api"

export default function CardExpenseSummary() {
  const { data, isLoading } = useGetDashboadDataQuery()

  return <div className="row-span 3 bg-gray-500">CardExpenseSummary</div>
}
