import EventsList from "@/components/events-list"
import { EventFilter } from "@/components/event-filter"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-2 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Campus Events</h1>
          <p className="text-muted-foreground mt-1">Discover and participate in upcoming events</p>
        </div>
        <div className="flex gap-4">
          <EventFilter />
          <Link href="/events/create">
            <Button>Submit Event</Button>
          </Link>
        </div>
      </div>
      <EventsList />
    </div>
  )
}

