"use client"

import React from "react"
import { motion } from "motion/react"
import type { LucideIcon } from "lucide-react"

export type Testimonial = {
  text: string
  name: string // тип бизнеса клиента
  role: string // что делали в проекте
  icon?: LucideIcon
  image?: string // реальное фото клиента (приоритетнее иконки)
}

export const TestimonialsColumn = (props: {
  className?: string
  testimonials: Testimonial[]
  duration?: number
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 bg-background pb-6"
      >
        {[...new Array(2).fill(0)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, name, role, icon: Icon, image }, i) => (
              <div
                className="w-full max-w-xs rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 shadow-lg shadow-black/40"
                key={i}
              >
                <div className="text-sm leading-relaxed text-white/80">{text}</div>
                <div className="mt-5 flex items-center gap-3">
                  {image ? (
                    <img
                      src={image}
                      alt={name}
                      loading="lazy"
                      className="h-10 w-10 rounded-full border border-white/10 object-cover"
                    />
                  ) : (
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white">
                      {Icon ? <Icon className="h-5 w-5" strokeWidth={1.5} /> : null}
                    </span>
                  )}
                  <div className="flex flex-col">
                    <div className="font-medium leading-5 tracking-tight text-white">
                      {name}
                    </div>
                    <div className="text-sm leading-5 tracking-tight text-white/50">
                      {role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  )
}
