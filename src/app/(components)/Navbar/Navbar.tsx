"use client"
import { Bell, Menu } from "lucide-react"

export default function Navbar() {
  return (
    <div className="flex justify-between items-center w-full mb-7">
      <div className="flex justify-between items-center gap-5">
        <button
          className="p-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={() => {}}
        >
          <Menu></Menu>
        </button>
      </div>

      <div className="relative">
        <input
          type="search"
          placeholder="Start searching"
          className="pl-10 pr-4 py-2 w-50 md: w-80 border-gray-300 bg-white rounder-lg focus:ourline-none focus:border-blue-500"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Bell className="text-gray-500" size={20} />
        </div>
      </div>
    </div>
  )
}
