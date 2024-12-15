import { useState } from "react"

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
  return <div>Settings</div>
}
