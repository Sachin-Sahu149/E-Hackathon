import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function EventSubmittedPage() {
  return (
    <div className="container mx-auto py-16">
      <div className="max-w-md mx-auto text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Event Submitted Successfully</h1>
        <p className="text-muted-foreground mb-6">
          Your event proposal has been submitted and is pending approval from faculty members. You will be notified once
          it's approved.
        </p>
        <div className="space-y-4">
          <Link href="/">
            <Button className="w-full">Back to Events</Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="outline" className="w-full">
              Go to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

