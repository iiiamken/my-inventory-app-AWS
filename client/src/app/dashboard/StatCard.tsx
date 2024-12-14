import { LucideIcon } from "lucide-react"

type StatDetail = {
  title: string
  amount: string
  changePercentage: string
  iconComponent: LucideIcon
}

type StatCardProps = {
  title: string
  primaryIcon: JSX.Element
  details: StatDetail[]
  dateRange: string
}

export default function StatCard({
  title,
  primaryIcon,
  details,
  dateRange,
}: StatCardProps) {
  const formatPercentage = (value: number) => {
    const signal = value >= 0 ? "+" : ""
    return `${signal}${value.toFixed()}%`
  }
  const getChangeColor = (value: number) =>
    value >= 0 ? "text-green-500" : "text-red-500"
  return (
    <div className="md:row-span-1 xl:row-span-2 bg-white col-span-1 shadow-md rounded-2xl flex flex-col justify-between">
      StatCard
    </div>
  )
}
