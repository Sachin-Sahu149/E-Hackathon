import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function ParticipantsList({ participants }: { participants: string[] }) {
  // In a real app, you would fetch user details based on these IDs
  // For now, we'll just display placeholder avatars

  if (participants.length === 0) {
    return <p className="text-muted-foreground">No participants yet</p>
  }

  return (
    <div className="flex flex-wrap gap-2">
      {participants.map((userId, index) => (
        <Avatar key={userId}>
          <AvatarFallback>{userId.substring(4, 6).toUpperCase()}</AvatarFallback>
        </Avatar>
      ))}
      {participants.length > 5 && (
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-muted text-sm">
          +{participants.length - 5}
        </div>
      )}
    </div>
  )
}

