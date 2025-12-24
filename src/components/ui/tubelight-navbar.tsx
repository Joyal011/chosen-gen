"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState("")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Set active tab based on current route
    const currentItem = items.find(item => item.url === location.pathname)
    if (currentItem) {
      setActiveTab(currentItem.name)
    }
  }, [location.pathname, items])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 pb-2 px-2 sm:bottom-auto sm:top-0 sm:left-1/2 sm:-translate-x-1/2 sm:px-0 sm:pt-4 md:pt-6",
        className,
      )}
    >
      <div className="flex items-center justify-around sm:justify-center gap-1 sm:gap-2 md:gap-3 bg-background/95 sm:bg-background/5 border border-border backdrop-blur-lg py-2 sm:py-1 px-2 sm:px-1 rounded-2xl sm:rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              to={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-xs sm:text-sm font-semibold px-2 sm:px-4 md:px-6 py-2 sm:py-2 rounded-xl sm:rounded-full transition-colors overflow-hidden whitespace-nowrap flex flex-col sm:flex-row items-center gap-1 sm:gap-0",
                "text-foreground/70 hover:text-primary",
                isActive && "bg-primary/10 sm:bg-muted text-primary",
              )}
            >
              <Icon className="h-5 w-5 sm:hidden" />
              <span className="text-[10px] sm:text-sm">{isMobile ? item.name.slice(0, 6) : item.name}</span>
              {isActive && !isMobile && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-b-full">
                    <div className="absolute w-12 h-4 bg-primary/30 rounded-full blur-md top-0 -left-2" />
                    <div className="absolute w-8 h-4 bg-primary/30 rounded-full blur-md top-0" />
                    <div className="absolute w-4 h-3 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
