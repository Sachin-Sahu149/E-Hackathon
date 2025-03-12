"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Loader2 } from "lucide-react"

export function RegisterButton({ eventId }: { eventId: string }) {
  const [isRegistered, setIsRegistered] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleRegistration = async () => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Toggle registration status
    setIsRegistered(!isRegistered)
    setIsLoading(false)
  }

  return (
    <Button
      className="w-full"
      onClick={handleRegistration}
      disabled={isLoading}
      variant={isRegistered ? "outline" : "default"}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {isRegistered ? "Cancelling..." : "Registering..."}
        </>
      ) : isRegistered ? (
        <>
          <Check className="mr-2 h-4 w-4" />
          Registered - Click to Cancel
        </>
      ) : (
        "Register for Event"
      )}
    </Button>
  )
}

