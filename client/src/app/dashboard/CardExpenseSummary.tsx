import { useGetDashboadDataQuery } from "@/state/api"
const colors = ["#00C49F", "#0088FE", "#FFBB28"]

export default function CardExpenseSummary() {
  const { data, isLoading } = useGetDashboadDataQuery()

  return (
    <div className="row-span-3 bg-white shadow-md  rounded-2xl flex flex-col justify-between">
      {isLoading ? (
        <div className="m-5">Loading...</div>
      ) : (
        <>
          {/* HEADER */}
          <div>
            <h2 className="text-lg font-semibold mb-2 px-7 pt-5">
              Purchase Summary
            </h2>
            <hr />
          </div>
        </>
      )}
    </div>
  )
}
