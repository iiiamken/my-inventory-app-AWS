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
  return <div>Settings</div>
}
