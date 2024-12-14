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

export default function StatCard() {
  return <div>StatCard</div>
}
