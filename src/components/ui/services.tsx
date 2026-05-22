"use client"

import {
  Workflow,
  Sparkles,
  Database,
  MessageCircle,
  Bot,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"

type Service = {
  icon: LucideIcon
  title: string
  description: string
  featured?: boolean
}

const services: Service[] = [
  {
    icon: Sparkles,
    title: "AI-интеграция во все сферы",
    description:
      "Главное оружие студии. Встраиваем искусственный интеллект в процессы, продукты и команду — от анализа данных до генерации контента и принятия решений.",
    featured: true,
  },
  {
    icon: Workflow,
    title: "n8n-автоматизации",
    description:
      "Соединяем сервисы в единые сценарии: данные, уведомления и рутина работают сами, без ручного труда.",
  },
  {
    icon: Database,
    title: "CRM-автоматизация",
    description:
      "Автоворонки, обогащение карточек и аналитика. Сделки двигаются без потерь и забытых лидов.",
  },
  {
    icon: MessageCircle,
    title: "Чат-боты",
    description:
      "Боты в Telegram и на сайте, которые отвечают, квалифицируют и продают 24/7.",
  },
  {
    icon: Bot,
    title: "AI-ассистенты",
    description:
      "Персональные ассистенты на ваших данных — помогают сотрудникам и клиентам в реальном времени.",
  },
]

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10",
        "bg-gradient-to-b from-white/[0.04] to-transparent p-px",
        "transition-transform duration-300 hover:-translate-y-1",
        service.featured && "md:col-span-2"
      )}
    >
      {/* Подсветка при наведении */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0
        transition-opacity duration-500 group-hover:opacity-100
        [background:radial-gradient(420px_circle_at_30%_0%,rgba(255,255,255,0.12),transparent_70%)]"
      />

      <div
        className={cn(
          "relative flex h-full flex-col gap-4 rounded-2xl bg-[#0a0a0a]/90 p-7 backdrop-blur-sm md:p-8",
          service.featured && "md:gap-6 md:p-10"
        )}
      >
        {/* Grid-текстура только на featured — визуальное эхо hero */}
        {service.featured && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-60
            bg-[linear-gradient(to_right,#1c1c1c_1px,transparent_1px),linear-gradient(to_bottom,#1c1c1c_1px,transparent_1px)]
            bg-[size:38px_38px]
            [mask-image:radial-gradient(ellipse_70%_60%_at_80%_20%,#000_40%,transparent_85%)]"
          />
        )}

        <div className="relative flex items-center gap-3">
          <span
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-xl",
              "border border-white/10 bg-white/[0.05] text-white",
              "transition-colors duration-300 group-hover:bg-white/[0.1]",
              service.featured && "h-14 w-14"
            )}
          >
            <Icon
              className={cn("h-5 w-5", service.featured && "h-7 w-7")}
              strokeWidth={1.5}
            />
          </span>
          {service.featured && (
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-widest text-white/50">
              Ключевое направление
            </span>
          )}
        </div>

        <div className="relative">
          <h3
            className={cn(
              "font-geist font-semibold tracking-tight text-white",
              service.featured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
            )}
          >
            {service.title}
          </h3>
          <p
            className={cn(
              "mt-2 text-sm leading-relaxed text-white/55",
              service.featured && "md:mt-3 md:max-w-md md:text-base"
            )}
          >
            {service.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export function Services() {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-background py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Заголовок */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-widest text-white/40">
            Что мы делаем
          </p>
          <h2
            className="mt-4 bg-gradient-to-br from-white from-30% to-white/50 bg-clip-text
            font-geist text-4xl font-semibold leading-tight tracking-tighter text-transparent md:text-5xl"
          >
            Услуги студии
          </h2>
          <p className="mt-4 text-balance text-base text-white/55 md:text-lg">
            Превращаем рутину в автоматические сценарии и встраиваем AI туда,
            где он приносит максимум пользы.
          </p>
        </div>

        {/* Bento-сетка */}
        <div className="mt-16 grid grid-cols-1 gap-5 md:auto-rows-fr md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
