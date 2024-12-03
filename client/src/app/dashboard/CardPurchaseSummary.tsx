import { useGetDashboadDataQuery } from "@/state/api"
import numeral from "numeral"
export default function CardPurchaseSummary() {
  const { data, isLoading } = useGetDashboadDataQuery()
  const purchaseData = data?.salesSummary || []

  const lastDataPoint = purchaseData[purchaseData.length - 1]
  return (
    <div>
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

          {/* BODY */}
          <div>
            <div className="mb-4 mt-7 px-7">
              <p className="text-xs text-gray-500">Purchased</p>
              <div className="flex items-center">
                <p className="text-2xl font-bold">
                  {lastDataPoint
                    ? numeral(lastDataPoint.totalValue).format("$0,00")
                    : "0"}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
