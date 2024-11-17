"use client"
import { Bell, Menu, Settings, Sun } from "lucide-react"
import Link from "next/link"

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

      <div className="flex items-center justify-between gap-5">
        <div className="hidden md:flex justify-between items gap-5">
          <div>
            <button onClick={() => {}}>
              <Sun className="cursor-pointer text-gray-500" size={24} />
            </button>
          </div>
          <div className="relative">
            <Bell className="text-gray-500" size={24} />
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">
              3
            </span>
          </div>
          <hr className="w-0 h-7 border-solid border-l border-gray-400 mx-3" />
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-9 h-9">IMAGE </div>
            <span className="font-semibold">ken</span>
          </div>
          <Link href="/settings">
            <Settings className="cursor-pointer text-gray-500" />
          </Link>
        </div>
      </div>
    </div>
  )
}
