"use client"

import { useState } from "react"
import { Facebook, Instagram } from "lucide-react"

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100090456807762",
    icon: <Facebook className="w-5 h-5" />,
    color: "group-hover:text-blue-500",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/chosengeneration.nepal",
    icon: <Instagram className="w-5 h-5" />,
    color: "group-hover:text-pink-500",
  },
]

export function SocialIcons() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center gap-2 sm:gap-3 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg">
        {socials.map((social, index) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-muted/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            aria-label={social.name}
          >
            {/* Glow effect on hover */}
            <div className={`absolute inset-0 rounded-full bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

            {/* Icon */}
            <span className={`relative z-10 text-foreground/70 transition-colors duration-300 ${social.color}`}>
              {social.icon}
            </span>

            {/* Ripple effect */}
            <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-primary/30 transition-all duration-300" />

            {/* Tooltip */}
            <span
              className={`absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-medium bg-foreground text-background rounded-md whitespace-nowrap transition-all duration-300 ${
                hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
              }`}
            >
              {social.name}
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45" />
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
