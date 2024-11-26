import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Dashboard() {
  const activities = [
    { id: 1, title: "Submit Math Assignment", date: "2023-06-15" },
    { id: 2, title: "Physics Lab", date: "2023-06-16" },
    { id: 3, title: "Literature Club Meeting", date: "2023-06-17" },
    { id: 4, title: "Career Counseling Session", date: "2023-06-18" },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome to Your Dashboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {activities.map((activity) => (
              <li key={activity.id} className="flex justify-between items-center border-b pb-2">
                <span>{activity.title}</span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">{activity.date}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

