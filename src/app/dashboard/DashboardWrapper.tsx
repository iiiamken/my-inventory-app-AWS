export default function DashboardWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex bg-gray-50 text-gray-900 w-full min-h-screen">
      Dashboard {children}
    </div>
  )
}
