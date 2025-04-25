"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"
import {
  LayoutGrid,
  FileText,
  Users,
  Settings,
  Menu,
  X,
  Plus,
  MessageCircle,
} from "lucide-react"

interface NavItemProps {
  icon: React.ReactNode
  label: string
  href: string
  miniSidebar: boolean
}

const NavItem = ({ icon, label, href, miniSidebar }: NavItemProps) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <li className="w-full">
      <Link
        href={href}
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-white hover:bg-[#1f6ed4] transition-all",
          isActive && "bg-[#1f6ed4]",
          miniSidebar && "justify-center px-2"
        )}
      >
        <span className="flex h-5 w-5 items-center justify-center">{icon}</span>
        {!miniSidebar && <span className="flex-1 text-sm font-medium">{label}</span>}
      </Link>
    </li>
  )
}

export default function Sidebar() {
  const isMobile = useMobile()
  const [open, setOpen] = useState(!isMobile)
  const [miniSidebar, setMiniSidebar] = useState(false)

  const toggleSidebar = () => {
    if (isMobile) {
      setOpen(!open)
    } else {
      setMiniSidebar(!miniSidebar)
    }
  }

  return (
    <>
      {/* Toggle Button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 text-white bg-[#00549A] rounded-md lg:hidden"
        onClick={toggleSidebar}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex flex-col border-r border-gray-700 bg-[#263440] transition-all duration-300 ease-in-out",
          isMobile
            ? open
              ? "w-64 translate-x-0"
              : "-translate-x-full"
            : miniSidebar
            ? "w-16"
            : "w-64"
        )}
      >
        {/* Header */}
        <div className={cn("flex items-center justify-between h-16 px-4 border-b border-gray-600 text-white")}>
          {!miniSidebar && <span className="text-lg font-semibold">ChatBot</span>}
          {!isMobile && (
            <button onClick={toggleSidebar} className="text-white">
              {miniSidebar ? <Menu size={20} /> : <X size={20} />}
            </button>
          )}
        </div>

        {/* Nav Items */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className={cn("space-y-1", miniSidebar ? "px-1" : "px-2")}>
            <NavItem icon={<Plus size={18} />} label="New Chat" href="/" miniSidebar={miniSidebar} />
            {/* <NavItem icon={<MessageCircle size={18} />} label="Conversations" href="" miniSidebar={miniSidebar} />
            <NavItem icon={<LayoutGrid size={18} />} label="Explore GPTs" href="" miniSidebar={miniSidebar} /> */}
            <NavItem icon={<Settings size={18} />} label="Settings" href="" miniSidebar={miniSidebar} />
          </ul>
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isMobile && open && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-30"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  )
}
