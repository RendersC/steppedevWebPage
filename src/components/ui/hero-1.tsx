"use client"

import { ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroProps {
  eyebrow?: string
  title: string
  subtitle: string
  ctaLabel?: string
  ctaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
}

// Реальные фото клиентов для trust-блока под CTA.
const clientAvatars = ["/clients/kuzhbalov96.jpg", "/clients/art36.jpg"]

export function Hero({
  eyebrow = "Innovate Without Limits",
  title,
  subtitle,
  ctaLabel = "Explore Now",
  ctaHref = "#",
  secondaryCtaLabel,
  secondaryCtaHref,
}: HeroProps) {
  return (
    <section
      id="hero"
      // `isolate` создаёт stacking context, чтобы сетка с `-z-10`
      // рисовалась ПОВЕРХ фона секции (а не пряталась под ним), но под контентом.
      className="relative isolate mx-auto flex w-full flex-col items-center justify-center px-6 text-center md:px-8
      min-h-[calc(100vh-40px)] pt-24 overflow-hidden
      bg-[linear-gradient(to_bottom,#fff,#ffffff_50%,#e8e8e8_88%)]
      dark:bg-[linear-gradient(to_bottom,#000,#0000_30%,#898e8e_78%,#ffffff_99%_50%)]
      rounded-b-xl"
    >
      {/* Grid BG */}
      <div
        className="absolute -z-10 inset-0 opacity-80 h-[600px] w-full
        bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]
        dark:bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)]
        bg-[size:6rem_5rem]
        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
      />

      {/* Radial Accent */}
      <div
        className="absolute left-1/2 top-[calc(100%-90px)] lg:top-[calc(100%-150px)]
        h-[500px] w-[700px] md:h-[500px] md:w-[1100px] lg:h-[750px] lg:w-[140%]
        -translate-x-1/2 rounded-[100%] border-[#B48CDE] bg-white dark:bg-black
        bg-[radial-gradient(closest-side,#fff_82%,#000000)]
        dark:bg-[radial-gradient(closest-side,#000_82%,#ffffff)]
        animate-fade-up"
      />

      {/* Eyebrow — статус доступности */}
      {eyebrow && (
        <a href="#contact" className="group z-20">
          <span
            className="text-sm text-gray-600 dark:text-gray-300 font-geist mx-auto px-5 py-2
            bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent
            border-[2px] border-gray-300/20 dark:border-white/5
            rounded-3xl w-fit tracking-tight flex items-center justify-center gap-2.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {eyebrow}
            <ChevronRight className="inline w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </a>
      )}

      {/* Title */}
      <h1
        className="animate-fade-in -translate-y-4 text-balance
        bg-gradient-to-br from-black from-30% to-black/40
        bg-clip-text py-6 text-5xl font-semibold leading-none tracking-tighter
        text-transparent opacity-0 sm:text-6xl md:text-7xl lg:text-8xl
        dark:from-white dark:to-white/40"
      >
        {title}
      </h1>

      {/* Subtitle */}
      <p
        className="animate-fade-in mb-10 -translate-y-4 text-balance
        text-lg tracking-tight text-gray-600 dark:text-gray-400
        opacity-0 md:text-xl mx-auto max-w-3xl"
      >
        {subtitle}
      </p>

      {/* CTA */}
      <div className="z-20 flex flex-col items-center justify-center gap-3 sm:flex-row">
        {ctaLabel && (
          <Button
            asChild
            className="h-11 w-fit px-7 md:h-12 md:w-56 font-geist tracking-tighter text-center text-base md:text-lg"
          >
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
        )}
        {secondaryCtaLabel && secondaryCtaHref && (
          <Button
            asChild
            variant="outline"
            className="h-11 w-fit border-white/15 bg-white/[0.03] px-7 font-geist text-base tracking-tighter
            text-white hover:border-white/30 hover:bg-white/[0.08] hover:text-white md:h-12"
          >
            <a href={secondaryCtaHref} target="_blank" rel="noopener noreferrer">
              {secondaryCtaLabel}
            </a>
          </Button>
        )}
      </div>

      {/* Trust-блок — стеклянная пилюля, читается на любом фоне градиента */}
      <div
        className="z-20 mt-10 inline-flex items-center gap-3.5 rounded-2xl
        border border-white/10 bg-[#0a0a0a] px-4 py-2.5 shadow-xl shadow-black/50"
      >
        <div className="flex -space-x-2.5">
          {clientAvatars.map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              loading="lazy"
              className="h-8 w-8 rounded-full border-2 border-black object-cover"
            />
          ))}
          <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-black bg-white/[0.12] text-[11px] font-semibold text-white">
            +9
          </span>
        </div>
        <div className="h-9 w-px bg-white/10" />
        <div className="flex flex-col items-start gap-0.5">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-white text-white" />
            ))}
            <span className="ml-1 text-sm font-semibold text-white">5.0</span>
          </div>
          <span className="text-xs text-white/55">
            10+ проектов сдано · 100% положительных отзывов
          </span>
        </div>
      </div>
    </section>
  )
}
