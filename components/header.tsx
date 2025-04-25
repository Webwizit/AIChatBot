"use client"

import { Bell, ChevronDown, LogOut, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

interface HeaderProps {
  toggleSidebar: () => void
  miniSidebar: boolean
}

export default function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-[#263440] px-4">
      {/* Sidebar toggle */}
      <Button variant="ghost" size="icon" onClick={toggleSidebar}>
        <span className="sr-only">Toggle sidebar</span>
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </Button>

      {/* Right Side Actions */}
      <div className="flex items-center gap-4">
        <Button variant="outline" className="hidden sm:inline-flex">
          Upgrade
        </Button>

        {/* <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-orange-500"></span>
          <span className="sr-only">Notifications</span>
        </Button> */}

        {/* Profile dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/placeholder.svg" alt="Hamza" />
                <AvatarFallback>HZ</AvatarFallback>
              </Avatar>
              {/* <span className="hidden text-sm font-medium text-gray-700 md:inline-block">Hamza</span> */}
              {/* <ChevronDown className="h-4 w-4 text-gray-500" /> */}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <div className="flex items-center gap-2 p-2">
              <div className="flex flex-col space-y-1 leading-none">
                <p className="font-medium">Hamza</p>
                <p className="text-xs text-muted-foreground">hamza@example.com</p>
              </div>
            </div>
            <DropdownMenuSeparator />
            {/* <DropdownMenuItem asChild>
              <Link href="/profile" className="flex w-full cursor-pointer items-center">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/settings" className="flex w-full cursor-pointer items-center">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </Link>
            </DropdownMenuItem> */}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex cursor-pointer items-center text-red-600 focus:text-red-600">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
