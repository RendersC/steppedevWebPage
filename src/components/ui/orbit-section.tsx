"use client"

import { Button } from "@/components/ui/button"

// Наши логотипы из /public/logos, повторены для плотности орбит.
const logos = [
  "n8n", "openai", "anthropic", "make", "zapier",
  "telegram", "supabase", "notion", "n8n", "openai",
  "anthropic", "make", "zapier", "telegram", "supabase",
]

export function OrbitSection() {
  const orbitCount = 3
  const orbitGap = 8 // rem между орбитами
  const iconsPerOrbit = Math.ceil(logos.length / orbitCount)

  return (
    <section
      id="tech"
      className="relative mx-auto my-24 flex h-[30rem] max-w-6xl items-center justify-between
      overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] px-6 md:my-32 md:pl-12"
    >
      {/* Левая часть — текст */}
      <div className="z-10 w-full md:w-1/2">
        <p className="text-sm uppercase tracking-widest text-white/40">
          Технологии
        </p>
        <h2
          className="mt-4 bg-gradient-to-br from-white from-30% to-white/50 bg-clip-text
          font-geist text-3xl font-semibold leading-tight tracking-tighter text-transparent sm:text-4xl md:text-5xl"
        >
          Современный
          <br />
          AI-стек
        </h2>
        <p className="mt-4 max-w-md text-balance text-white/55">
          n8n, OpenAI, Anthropic, CRM и мессенджеры — собираем решения на
          проверенных инструментах, которые работают в проде.
        </p>
        <div className="mt-7 flex items-center gap-3">
          <Button asChild className="font-geist tracking-tight">
            <a href="#contact">Обсудить проект</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-white/15 bg-transparent font-geist tracking-tight text-white hover:bg-white/5 hover:text-white"
          >
            <a href="#services">Услуги</a>
          </Button>
        </div>
      </div>

      {/* Правая часть — орбита (обрезана краем) */}
      <div className="relative hidden h-full w-1/2 items-center justify-start overflow-hidden md:flex">
        <div className="relative flex h-[50rem] w-[50rem] translate-x-1/2 items-center justify-center">
          {/* Центр — знак студии */}
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] shadow-lg">
            <img src="/logo-mark.png" alt="SteppeDev" className="h-10 w-auto" />
          </div>

          {/* Орбиты */}
          {[...Array(orbitCount)].map((_, orbitIdx) => {
            const size = `${12 + orbitGap * (orbitIdx + 1)}rem`
            const angleStep = (2 * Math.PI) / iconsPerOrbit
            const duration = 24 + orbitIdx * 8

            return (
              <div
                key={orbitIdx}
                className="absolute rounded-full border border-dashed border-white/15"
                style={{
                  width: size,
                  height: size,
                  animation: `orbit-spin ${duration}s linear infinite`,
                }}
              >
                {logos
                  .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                  .map((slug, iconIdx) => {
                    const angle = iconIdx * angleStep
                    const x = 50 + 50 * Math.cos(angle)
                    const y = 50 + 50 * Math.sin(angle)

                    return (
                      <div
                        key={iconIdx}
                        className="absolute"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        {/* контр-вращение, чтобы логотип не переворачивался */}
                        <div
                          style={{
                            animation: `orbit-spin-rev ${duration}s linear infinite`,
                          }}
                        >
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#161616] p-2.5 shadow-md">
                            <img
                              src={`/logos/${slug}.svg`}
                              alt={slug}
                              className="h-full w-full object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    )
                  })}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
