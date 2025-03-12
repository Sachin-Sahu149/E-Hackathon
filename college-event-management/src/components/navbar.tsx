"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bell, Calendar, Menu, User, X } from "lucide-react"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Calendar className="h-6 w-6" />
            <span className="text-xl font-bold">CampusEvents</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            Events
          </Link>
          <Link href="/dashboard" className="text-sm font-medium hover:underline underline-offset-4">
            My Dashboard
          </Link>
          <Link href="/events/create" className="text-sm font-medium hover:underline underline-offset-4">
            Submit Event
          </Link>
          <Link href="/faculty" className="text-sm font-medium hover:underline underline-offset-4">
            Faculty Panel
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">3</Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-80 overflow-auto">
                <DropdownMenuItem className="cursor-pointer flex flex-col items-start py-2">
                  <div className="font-medium">Event Approved</div>
                  <div className="text-sm text-muted-foreground">Your "Cultural Fest" event has been approved</div>
                  <div className="text-xs text-muted-foreground mt-1">2 hours ago</div>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer flex flex-col items-start py-2">
                  <div className="font-medium">Registration Reminder</div>
                  <div className="text-sm text-muted-foreground">The "Web Development Workshop" is tomorrow</div>
                  <div className="text-xs text-muted-foreground mt-1">1 day ago</div>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer flex flex-col items-start py-2">
                  <div className="font-medium">New Participant</div>
                  <div className="text-sm text-muted-foreground">A new user has registered for your event</div>
                  <div className="text-xs text-muted-foreground mt-1">3 days ago</div>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/dashboard">Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="h-6 w-6" />
              <span className="text-xl font-bold">CampusEvents</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="container grid gap-6 p-6">
            <Link href="/" className="text-lg font-medium hover:underline" onClick={() => setIsMenuOpen(false)}>
              Events
            </Link>
            <Link
              href="/dashboard"
              className="text-lg font-medium hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              My Dashboard
            </Link>
            <Link
              href="/events/create"
              className="text-lg font-medium hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Submit Event
            </Link>
            <Link href="/faculty" className="text-lg font-medium hover:underline" onClick={() => setIsMenuOpen(false)}>
              Faculty Panel
            </Link>
            <div className="border-t pt-6">
              <Link
                href="/profile"
                className="text-lg font-medium hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Profile
              </Link>
            </div>
            <div>
              <Link
                href="/settings"
                className="text-lg font-medium hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Settings
              </Link>
            </div>
            <div>
              <Button variant="outline" className="w-full" onClick={() => setIsMenuOpen(false)}>
                Logout
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

