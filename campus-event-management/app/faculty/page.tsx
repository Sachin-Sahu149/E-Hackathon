"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, User } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function FacultyPage() {
  // Mock data for pending events
  const pendingEvents = [
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
    },
    {
      id: "5",
      title: "Career Fair",
      date: "2025-04-05",
      time: "10:00",
      venue: "Main Hall",
      organizer: "Career Services",
      description: "Connect with potential employers and explore career opportunities.",
      category: "other",
      status: "pending",
    },
  ]

  // Mock data for approved events
  const approvedEvents = [
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
    },
    {
      id: "2",
      title: "Annual Sports Meet",
      date: "2025-04-15",
      time: "09:00",
      venue: "University Stadium",
      organizer: "Sports Committee",
      description: `Annual inter-department sports competition featuring various athletic events.
        Could you clarify what you mean by "against rejection of requested event"? Are you referring to 
        handling a rejected API request for an event, writing a response against an event rejection, or 
        something else? Let me know so I can help you better! 😊    
      `,
      category: "sports",
      status: "approved",
    },
  ]

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  const [feedback, setFeedback] = useState<Record<string, string>>({})
  const [processing, setProcessing] = useState<Record<string, boolean>>({})

  const handleApprove = async (eventId: string) => {
    setProcessing((prev) => ({ ...prev, [eventId]: true }))
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // In a real app, you would update the event status in the database
    setProcessing((prev) => ({ ...prev, [eventId]: false }))
    // Remove the event from the list (in a real app, it would move to approved)
    // This is just for demo purposes
    window.alert(`Event ${eventId} approved successfully!`)
  }

  const handleReject = async (eventId: string) => {
    if (!feedback[eventId] || feedback[eventId].trim() === "") {
      window.alert("Please provide feedback before rejecting the event.")
      return
    }

    setProcessing((prev) => ({ ...prev, [eventId]: true }))
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // In a real app, you would update the event status in the database
    setProcessing((prev) => ({ ...prev, [eventId]: false }))
    // Remove the event from the list
    // This is just for demo purposes
    window.alert(`Event ${eventId} rejected with feedback: ${feedback[eventId]}`)
  }

  return (
    <div className="container mx-auto px-2 py-8 ">
      <h1 className="text-3xl font-bold mb-8">Faculty Authorization Panel</h1>

      <Tabs defaultValue="pending">
        <TabsList className="mb-6">
          <TabsTrigger value="pending">Pending Approval ({pendingEvents.length})</TabsTrigger>
          <TabsTrigger value="approved">Approved Events ({approvedEvents.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="pending">
          {pendingEvents.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No events pending approval</p>
            </div>
          ) : (
            <div className=" mx-auto w-full justify-around flex flex-wrap ">
              {pendingEvents.map((event) => (
                <Card key={event.id} className="max-w-[36rem]">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge>{event.category}</Badge>
                        <CardTitle className="mt-2">{event.title}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <User className="h-4 w-4 mr-1" />
                          Organized by {event.organizer}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
                        Pending Approval
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
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

                    <div className="mb-4">
                      <h3 className="font-medium mb-2">Description</h3>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Feedback (required for rejection)</h3>
                      <Textarea
                        placeholder="Provide feedback to the event organizer"
                        value={feedback[event.id] || ""}
                        onChange={(e) => setFeedback((prev) => ({ ...prev, [event.id]: e.target.value }))}
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      onClick={() => handleReject(event.id)}
                      disabled={processing[event.id]}
                      className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600"
                    >
                      Reject
                    </Button>
                    <Button onClick={() => handleApprove(event.id)} disabled={processing[event.id]}>
                      Approve
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="approved">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {approvedEvents.map((event) => (
              <Card key={event.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge>{event.category}</Badge>
                      <CardTitle className="mt-2">{event.title}</CardTitle>
                    </div>
                    <Badge variant="default">Approved</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{event.organizer}</span>
                    </div>
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
                  <Link href={`/events/${event.id}`}>
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

