"use client"

import { useAppDispatch, useAppSelector } from "@/app/redux"
import { setIsSidebarCollapsed } from "@/state"
import { Menu } from "lucide-react"

export default function Sidebar() {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  )
  const dispatch = useAppDispatch()

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))
  }
  return (
    <div>
      {/* Logo */}
      <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
        <div>LOGO</div>
        <h1 className="font-extrabold text-2xl">KENSTOCK</h1>
        <button
          className="md:hidden  px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={() => {}}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>
      {/*Links*/}
      <div className="felx-grow mt-8">{/*Links here*/}</div>
      {/*Footer*/}
      <div>
        <p className="text-center text-xs text-gray-500">© 2022 Kenstock</p>
      </div>
    </div>
  )
}
