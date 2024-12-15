"use client"

import { useState } from "react"
import Header from "../(components)/Header"

type UserSettings = {
  label: string
  value: string | boolean
  type: "text" | "toggle"
}

const mockSettings: UserSettings[] = [
  {
    label: "Username",
    value: "ken D",
    type: "text",
  },
  {
    label: "Email",
    value: "kend.dev@example.com",
    type: "text",
  },
  {
    label: "Notification",
    value: true,
    type: "toggle",
  },
  {
    label: "Dark Mode",
    value: false,
    type: "toggle",
  },
  {
    label: "Language",
    value: "English",
    type: "text",
  },
]

export default function Settings() {
  const [userSettings, setUserSettings] = useState<UserSettings[]>(mockSettings)
  const handleToggleChange = (index: number) => {
    const settingsCopy = [...userSettings]
    settingsCopy[index].value = !settingsCopy[index].value as boolean
    setUserSettings(settingsCopy)
  }
  return (
    <div className="w-full">
      <Header name={"User Settings"} />
      <div className="overflow-x-auto mt-5 shadow-md">
        <table className="min-w-full bg-white rounded-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Setting
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {userSettings.map((setting, index) => (
              <tr className="hover:bg-blue-50 " key={setting.label}>
                <td className="py-2 px-4">{setting.label}</td>
                <td className="py-2 px-4">{}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
