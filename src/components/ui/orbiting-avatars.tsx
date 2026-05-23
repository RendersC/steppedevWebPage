import * as React from "react"
import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"

// Вставляет нужные CSS-анимации в документ
const Styles = () => {
  const css = `
    @keyframes orbit-cta { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    @keyframes counter-orbit-cta { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
    @keyframes float-cta { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
    .animate-orbit-cta { animation: orbit-cta var(--orbit-duration) linear infinite; }
    .animate-counter-orbit-cta { animation: counter-orbit-cta var(--orbit-duration) linear infinite; }
    .animate-float-cta { animation: float-cta 6s ease-in-out infinite; }
  `
  return <style>{css}</style>
}

interface Avatar {
  src: string
  alt: string
}

export interface OrbitingAvatarsCTAProps {
  title: React.ReactNode
  description: React.ReactNode
  buttonText: string
  buttonProps?: ButtonProps
  avatars: Avatar[]
  className?: string
  orbitRadius?: number // радиус в rem
  orbitDuration?: number // длительность в секундах
}

export const OrbitingAvatarsCTA = ({
  title,
  description,
  buttonText,
  buttonProps,
  avatars,
  className,
  orbitRadius = 20,
  orbitDuration = 40,
}: OrbitingAvatarsCTAProps) => {
  const radiusInPx = orbitRadius * 16

  return (
    <>
      <Styles />
      <section
        className={cn(
          "relative flex h-[42rem] w-full items-center justify-center overflow-hidden bg-background",
          className
        )}
      >
        {/* Фоновые концентрические круги */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute left-1/2 top-1/2 h-[35rem] w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/15" />
          <div className="absolute left-1/2 top-1/2 h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/15" />
        </div>

        {/* Центральный контент */}
        <div className="relative z-10 flex max-w-xl flex-col items-center gap-5 px-4 text-center">
          <h2 className="bg-gradient-to-br from-white from-30% to-white/50 bg-clip-text font-geist text-3xl font-semibold tracking-tighter text-transparent md:text-5xl">
            {title}
          </h2>
          <p className="max-w-md text-balance text-white/55 md:text-lg">
            {description}
          </p>
          <Button size="lg" className="h-12 px-8 font-geist text-base tracking-tight" {...buttonProps}>
            {buttonText}
          </Button>
        </div>

        {/* Вращающийся контейнер с аватарами */}
        <div
          className="animate-orbit-cta absolute inset-0 z-0"
          style={{ "--orbit-duration": `${orbitDuration}s` } as React.CSSProperties}
        >
          {avatars.map((avatar, i) => {
            const angle = (i / avatars.length) * 2 * Math.PI
            const x = Math.cos(angle) * radiusInPx
            const y = Math.sin(angle) * radiusInPx

            return (
              <div
                key={i}
                className="absolute left-1/2 top-1/2"
                style={{ transform: `translate(${x}px, ${y}px)` }}
              >
                <div
                  className="animate-float-cta relative h-14 w-14"
                  style={{ animationDelay: `-${i * 0.8}s` }}
                >
                  <img
                    src={avatar.src}
                    alt={avatar.alt}
                    className="animate-counter-orbit-cta h-full w-full rounded-full border border-white/10 object-cover shadow-md"
                    style={{ "--orbit-duration": `${orbitDuration}s` } as React.CSSProperties}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
