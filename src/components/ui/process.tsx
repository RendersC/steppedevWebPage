"use client"

import { Search, DraftingCompass, Code2, Rocket } from "lucide-react"
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid"

const steps: BentoItem[] = [
  {
    title: "Брифинг и аудит",
    meta: "Шаг 01",
    description:
      "Погружаемся в ваши процессы, находим узкие места и точки, где AI и автоматизация дадут максимальный эффект.",
    icon: <Search className="h-5 w-5" strokeWidth={1.5} />,
    status: "Старт",
    tags: ["Анализ", "Цели"],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "Проектирование",
    meta: "Шаг 02",
    description:
      "Проектируем архитектуру: сценарии, интеграции и метрики результата.",
    icon: <DraftingCompass className="h-5 w-5" strokeWidth={1.5} />,
    status: "План",
    tags: ["Архитектура"],
  },
  {
    title: "Разработка и интеграция",
    meta: "Шаг 03",
    description:
      "Собираем сценарии в n8n, подключаем CRM, чат-ботов и AI-ассистентов, тестируем на реальных данных.",
    icon: <Code2 className="h-5 w-5" strokeWidth={1.5} />,
    status: "Сборка",
    tags: ["n8n", "CRM", "AI"],
    colSpan: 2,
  },
  {
    title: "Запуск и поддержка",
    meta: "Шаг 04",
    description:
      "Запускаем в работу, обучаем команду и сопровождаем — дорабатываем и масштабируем по мере роста.",
    icon: <Rocket className="h-5 w-5" strokeWidth={1.5} />,
    status: "Релиз",
    tags: ["Поддержка"],
  },
]

export function Process() {
  return (
    <section
      id="process"
      className="relative w-full overflow-hidden bg-background py-24 md:py-32"
    >
      {/* Тонкая grid-текстура фоном — эхо hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40
        bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)]
        bg-[size:48px_48px]
        [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_50%,transparent_90%)]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Заголовок */}
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-white/40">
            Процесс
          </p>
          <h2
            className="mt-4 bg-gradient-to-br from-white from-30% to-white/50 bg-clip-text
            font-geist text-4xl font-semibold leading-tight tracking-tighter text-transparent md:text-5xl"
          >
            Как мы работаем
          </h2>
          <p className="mt-4 text-balance text-base text-white/55 md:text-lg">
            Прозрачный путь от первой встречи до работающего решения — без
            сюрпризов и затянутых сроков.
          </p>
        </div>

        {/* Шаги в виде bento-сетки */}
        <div className="mt-14">
          <BentoGrid items={steps} />
        </div>
      </div>
    </section>
  )
}
