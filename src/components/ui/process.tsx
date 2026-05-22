"use client"

import { Search, DraftingCompass, Code2, Rocket, type LucideIcon } from "lucide-react"

type Step = {
  num: string
  icon: LucideIcon
  title: string
  description: string
}

const steps: Step[] = [
  {
    num: "01",
    icon: Search,
    title: "Брифинг и аудит",
    description:
      "Погружаемся в ваши процессы, находим узкие места и точки, где AI и автоматизация дадут максимальный эффект.",
  },
  {
    num: "02",
    icon: DraftingCompass,
    title: "Проектирование",
    description:
      "Проектируем архитектуру решения: сценарии, интеграции и метрики, по которым будем измерять результат.",
  },
  {
    num: "03",
    icon: Code2,
    title: "Разработка и интеграция",
    description:
      "Собираем сценарии в n8n, подключаем CRM, чат-ботов и AI-ассистентов, тестируем на реальных данных.",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Запуск и поддержка",
    description:
      "Запускаем в работу, обучаем команду и сопровождаем — дорабатываем и масштабируем по мере роста.",
  },
]

function StepCard({ step, isLast }: { step: Step; isLast: boolean }) {
  const Icon = step.icon
  return (
    <div className="group relative flex flex-col">
      {/* Соединительная линия к следующему шагу (только на десктопе) */}
      {!isLast && (
        <div
          aria-hidden
          className="pointer-events-none absolute left-[calc(50%+2rem)] right-[-1.25rem] top-7 hidden h-px lg:block
          bg-gradient-to-r from-white/20 to-white/0"
        />
      )}

      {/* Номер + иконка */}
      <div className="relative flex items-center gap-4">
        <span
          className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl
          border border-white/10 bg-[#0a0a0a] text-white
          transition-colors duration-300 group-hover:border-white/25 group-hover:bg-white/[0.06]"
        >
          <Icon className="h-6 w-6" strokeWidth={1.5} />
        </span>
        <span className="font-geist text-5xl font-semibold tracking-tighter text-white/10 transition-colors duration-300 group-hover:text-white/20">
          {step.num}
        </span>
      </div>

      {/* Текст */}
      <h3 className="mt-6 font-geist text-lg font-semibold tracking-tight text-white md:text-xl">
        {step.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-white/55">
        {step.description}
      </p>
    </div>
  )
}

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
            Прозрачный путь от первой встречи до работающего решения —
            без сюрпризов и затянутых сроков.
          </p>
        </div>

        {/* Шаги */}
        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <StepCard key={step.num} step={step} isLast={i === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
