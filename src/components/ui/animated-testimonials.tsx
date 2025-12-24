"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Quote, Star } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
}

export interface AnimatedTestimonialsProps {
  title?: string
  subtitle?: string
  badgeText?: string
  testimonials?: Testimonial[]
  autoRotateInterval?: number
  trustedCompanies?: string[]
  trustedCompaniesTitle?: string
  className?: string
}

export function AnimatedTestimonials({
  title = "Loved by the community",
  subtitle = "Don't just take our word for it. See what developers and companies have to say about our starter template.",
  badgeText = "Trusted by developers",
  testimonials = [],
  autoRotateInterval = 6000,
  trustedCompanies = [],
  trustedCompaniesTitle = "Trusted by developers from companies worldwide",
  className,
}: AnimatedTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  // Refs for scroll animations
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const controls = useAnimation()

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  // Trigger animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Auto rotate testimonials
  useEffect(() => {
    if (autoRotateInterval <= 0 || testimonials.length <= 1) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, autoRotateInterval)

    return () => clearInterval(interval)
  }, [autoRotateInterval, testimonials.length])

  if (testimonials.length === 0) {
    return null
  }

  return (
    <section ref={sectionRef} id="testimonials" className={`py-10 md:py-24 overflow-hidden bg-muted/30 ${className || ""}`}>
      <div className="px-3 sm:px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 gap-6 md:gap-16 w-full md:grid-cols-2 lg:gap-24"
        >
          {/* Left side: Heading and navigation */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center text-center md:text-left">
            <div className="space-y-3 md:space-y-6">
              {badgeText && (
                <div className="inline-flex items-center px-2.5 py-1 rounded-full text-xs sm:text-sm font-medium bg-primary/10 text-primary mx-auto md:mx-0">
                  <Star className="mr-1 h-3 w-3 sm:h-3.5 sm:w-3.5 fill-primary" />
                  <span>{badgeText}</span>
                </div>
              )}

              <h2 className="text-xl sm:text-2xl font-bold tracking-tighter md:text-4xl lg:text-5xl">{title}</h2>

              <p className="max-w-[600px] text-muted-foreground text-sm sm:text-base md:text-xl/relaxed mx-auto md:mx-0">{subtitle}</p>

              <div className="flex items-center gap-2 sm:gap-3 pt-2 md:pt-4 justify-center md:justify-start">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === index ? "w-8 sm:w-10 bg-primary" : "w-2 sm:w-2.5 bg-muted-foreground/30"
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side: Testimonial cards */}
          <motion.div variants={itemVariants} className="relative h-full min-h-[280px] sm:min-h-[320px] md:min-h-[400px] mx-1 sm:mx-4 md:mr-10 md:mx-0">
            {testimonials.map((testimonial, index) => {
              // Calculate offset for stacked card effect
              const offset = (index - activeIndex + testimonials.length) % testimonials.length

              return (
                <motion.div
                  key={testimonial.id}
                  initial={false}
                  animate={{
                    scale: offset === 0 ? 1 : 0.95 - offset * 0.03,
                    y: offset * 12,
                    x: offset * 8,
                    opacity: offset > 2 ? 0 : 1 - offset * 0.2,
                    zIndex: testimonials.length - offset,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 bg-background/95 backdrop-blur-sm border border-border/50 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-5 md:p-8 flex flex-col"
                >
                  {/* Star rating */}
                  <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 sm:h-5 sm:w-5 ${
                          i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Quote icon */}
                  <Quote className="h-5 w-5 sm:h-6 sm:w-6 text-primary/40 mb-2 sm:mb-3" />

                  {/* Testimonial content */}
                  <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed text-foreground/90 flex-grow line-clamp-6 sm:line-clamp-none">
                    "{testimonial.content}"
                  </p>

                  <Separator className="my-3 sm:my-4 md:my-6" />

                  {/* Author info */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Avatar className="h-8 w-8 sm:h-10 sm:w-10 border-2 border-primary/20">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-primary/10 text-primary text-xs sm:text-sm font-semibold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm sm:text-base font-semibold">{testimonial.name}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Trusted companies logo cloud */}
        {trustedCompanies.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12 md:mt-20 text-center"
          >
            <p className="text-xs sm:text-sm text-muted-foreground mb-4 md:mb-8">{trustedCompaniesTitle}</p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              {trustedCompanies.map((company, index) => (
                <div
                  key={index}
                  className="text-base sm:text-lg md:text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                >
                  {company}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
