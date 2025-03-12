import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, User, Users } from "lucide-react"
import Link from "next/link"
import { ParticipantsList } from "@/components/participants-list"
import { RegisterButton } from "@/components/register-button"

// Mock data for a single event
const getEventById = (id: string) => {
  const events = [
    {
      id: "1",
      title: "Web Development Workshop",
      date: "2025-03-20",
      time: "14:00",
      venue: "Computer Science Building, Room 101",
      organizer: "CS Department",
      description:
        "Learn the basics of web development with HTML, CSS, and JavaScript. This workshop is designed for beginners who want to get started with web development. We will cover the fundamentals of HTML for structure, CSS for styling, and JavaScript for interactivity. By the end of this workshop, you will have built a simple interactive website and gained the knowledge to continue learning on your own. All participants should bring their laptops with a code editor installed. No prior programming experience is required, but basic computer skills are necessary.",
      category: "workshop",
      status: "approved",
      participants: ["user1", "user2", "user3"],
    },
    {
      id: "2",
      title: "Annual Sports Meet",
      date: "2025-04-15",
      time: "09:00",
      venue: "University Stadium",
      organizer: "Sports Committee",
      description: "Annual inter-department sports competition featuring various athletic events.",
      category: "sports",
      status: "approved",
      participants: ["user4", "user5"],
    },
  ]

  return events.find((event) => event.id === id)
}

export default function EventPage({ params }: { params: { id: string } }) {
  const event = getEventById(params.id)

  if (!event) {
    return (
      <div className="container mx-auto py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Event not found</h1>
        <Link href="/">
          <Button>Back to Events</Button>
        </Link>
      </div>
    )
  }

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-6">
        <Link href="/">
          <Button variant="outline">← Back to Events</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{event.title}</h1>
            <div className="flex items-center mt-2">
              <User className="h-4 w-4 mr-2 text-muted-foreground" />
              <span className="text-muted-foreground">Organized by {event.organizer}</span>
            </div>
          </div>

          <div className="bg-muted p-6 rounded-lg grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-3 text-primary" />
              <div>
                <div className="text-sm text-muted-foreground">Date</div>
                <div>{formatDate(event.date)}</div>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-3 text-primary" />
              <div>
                <div className="text-sm text-muted-foreground">Time</div>
                <div>{event.time}</div>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-3 text-primary" />
              <div>
                <div className="text-sm text-muted-foreground">Venue</div>
                <div>{event.venue}</div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">About this event</h2>
            <p className="text-muted-foreground whitespace-pre-line">{event.description}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Registration</h2>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <Users className="h-5 w-5 mr-2 text-muted-foreground" />
                <span>{event.participants.length} people are attending</span>
              </div>
            </div>
            <RegisterButton eventId={event.id} />
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Participants</h2>
            <ParticipantsList participants={event.participants} />
          </div>
        </div>
      </div>
    </div>
  )
}

