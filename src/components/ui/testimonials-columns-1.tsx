"use client"

import React from "react"
import { motion } from "motion/react"

export type Testimonial = {
  text: string
  name: string
  role: string
}

// Инициалы из имени/ника (поддержка кириллицы и латиницы).
function initials(name: string) {
  const letters = name.replace(/[^A-Za-zА-Яа-яЁё]/g, "")
  return (letters || name).slice(0, 2).toUpperCase()
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
            {props.testimonials.map(({ text, name, role }, i) => (
              <div
                className="w-full max-w-xs rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 shadow-lg shadow-black/40"
                key={i}
              >
                <div className="text-sm leading-relaxed text-white/80">{text}</div>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-xs font-semibold text-white">
                    {initials(name)}
                  </div>
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
