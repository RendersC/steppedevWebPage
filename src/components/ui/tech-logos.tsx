"use client"

import { InfiniteSlider } from "@/components/ui/infinite-slider"
import { ProgressiveBlur } from "@/components/ui/progressive-blur"

// Логотипы стека студии. SVG из пакета simple-icons лежат локально в /public/logos
// (с белой заливкой) — без зависимости от внешнего CDN.
const logos = [
  { id: "n8n", description: "n8n", image: "/logos/n8n.svg" },
  { id: "openai", description: "OpenAI", image: "/logos/openai.svg" },
  { id: "anthropic", description: "Anthropic", image: "/logos/anthropic.svg" },
  { id: "make", description: "Make", image: "/logos/make.svg" },
  { id: "zapier", description: "Zapier", image: "/logos/zapier.svg" },
  { id: "telegram", description: "Telegram", image: "/logos/telegram.svg" },
  { id: "supabase", description: "Supabase", image: "/logos/supabase.svg" },
  { id: "notion", description: "Notion", image: "/logos/notion.svg" },
]

export function TechLogos() {
  return (
    <section id="tech" className="w-full bg-background py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">
          На каких технологиях работаем
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Современный AI-стек для автоматизации
        </h2>
      </div>

      <div className="relative mt-12 h-[100px] w-full overflow-hidden">
        <InfiniteSlider
          className="flex h-full w-full items-center"
          duration={30}
          gap={64}
        >
          {logos.map((logo) => (
            <div key={logo.id} className="flex w-32 items-center justify-center">
              <img
                src={logo.image}
                alt={logo.description}
                className="h-8 w-auto opacity-70 transition-opacity hover:opacity-100"
              />
            </div>
          ))}
        </InfiniteSlider>

        <ProgressiveBlur
          className="pointer-events-none absolute top-0 left-0 h-full w-[200px]"
          direction="left"
          blurIntensity={1}
        />
        <ProgressiveBlur
          className="pointer-events-none absolute top-0 right-0 h-full w-[200px]"
          direction="right"
          blurIntensity={1}
        />
      </div>
    </section>
  )
}
