"use client"

import { useState, useEffect } from "react"
import { EventCard } from "@/components/event-card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

// Mock data for events
const mockEvents = [
  {
    id: "1",
    title: "Web Development Workshop",
    date: "2025-03-20",
    time: "14:00",
    venue: "Computer Science Building, Room 101",
    organizer: "CS Department",
    description: "Learn the basics of web development with HTML, CSS, and JavaScript.",
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
  {
    id: "3",
    title: "AI Research Seminar",
    date: "2025-03-25",
    time: "16:00",
    venue: "Science Building Auditorium",
    organizer: "AI Research Group",
    description: "Presentation of recent advances in artificial intelligence research.",
    category: "seminar",
    status: "approved",
    participants: [],
  },
  {
    id: "4",
    title: "Cultural Fest",
    date: "2025-05-10",
    time: "18:00",
    venue: "University Amphitheater",
    organizer: "Cultural Committee",
    description: "Annual cultural festival featuring music, dance, and theatrical performances.",
    category: "fest",
    status: "pending",
    participants: ["user1", "user6", "user7"],
  },
]

export default function EventsList() {
  const [events, setEvents] = useState(mockEvents)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredEvents, setFilteredEvents] = useState(mockEvents)

  // Filter events based on search query
  useEffect(() => {
    const filtered = events.filter(
      (event) =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.organizer.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    setFilteredEvents(filtered)
  }, [searchQuery, events])

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search events..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {filteredEvents.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-muted-foreground">No events found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  )
}

