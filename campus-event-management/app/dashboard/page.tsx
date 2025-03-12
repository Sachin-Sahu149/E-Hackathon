import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  // Mock data for user's events
  const myEvents = [
    {
      id: "1",
      title: "Web Development Workshop",
      date: "2025-03-20",
      time: "14:00",
      venue: "Computer Science Building, Room 101",
      status: "registered",
    },
    {
      id: "3",
      title: "AI Research Seminar",
      date: "2025-03-25",
      time: "16:00",
      venue: "Science Building Auditorium",
      status: "registered",
    },
  ]

  // Mock data for events created by the user
  const createdEvents = [
    {
      id: "4",
      title: "Cultural Fest",
      date: "2025-05-10",
      time: "18:00",
      venue: "University Amphitheater",
      status: "pending",
    },
  ]

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <div className="container mx-auto px-2 py-8">
      <h1 className="text-3xl font-bold mb-8">My Dashboard</h1>

      <Tabs defaultValue="registered">
        <TabsList className="mb-6">
          <TabsTrigger value="registered">My Registrations</TabsTrigger>
          <TabsTrigger value="created">My Events</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="registered">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {myEvents.length > 0 ? (
              myEvents.map((event) => (
                <Card key={event.id}>
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <Badge>Registered</Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{event.venue}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link href={`/events/${event.id}`} className="flex-1">
                        <Button variant="outline" className="w-full">
                          View Details
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600"
                      >
                        Cancel Registration
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-2 text-center py-12">
                <p className="text-muted-foreground mb-4">You haven't registered for any events yet.</p>
                <Link href="/">
                  <Button>Browse Events</Button>
                </Link>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="created">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {createdEvents.length > 0 ? (
              createdEvents.map((event) => (
                <Card key={event.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{event.title}</CardTitle>
                      <Badge
                        variant={event.status === "approved" ? "default" : "outline"}
                        className={
                          event.status === "pending" ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100" : ""
                        }
                      >
                        {event.status === "approved" ? "Approved" : "Pending Approval"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{event.venue}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link href={`/events/${event.id}`} className="flex-1">
                        <Button variant="outline" className="w-full">
                          View Details
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600"
                      >
                        Delete Event
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-2 text-center py-12">
                <p className="text-muted-foreground mb-4">You haven't created any events yet.</p>
                <Link href="/events/create">
                  <Button>Create Event</Button>
                </Link>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Stay updated with your event activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Event Approved</h3>
                      <p className="text-sm text-muted-foreground">
                        Your "Cultural Fest" event has been approved by the faculty.
                      </p>
                    </div>
                    <Badge>New</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">2 hours ago</p>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Registration Reminder</h3>
                      <p className="text-sm text-muted-foreground">
                        The "Web Development Workshop" is tomorrow at 2:00 PM.
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">1 day ago</p>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">New Participant</h3>
                      <p className="text-sm text-muted-foreground">
                        A new user has registered for your "Cultural Fest" event.
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">3 days ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

