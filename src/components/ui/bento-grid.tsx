"use client"

import { cn } from "@/lib/utils"

export interface BentoItem {
  title: string
  description: string
  icon: React.ReactNode
  status?: string
  tags?: string[]
  meta?: string
  cta?: string
  colSpan?: number
  hasPersistentHover?: boolean
}

interface BentoGridProps {
  items: BentoItem[]
}

function BentoGrid({ items }: BentoGridProps) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "group relative overflow-hidden rounded-2xl p-5 transition-all duration-300",
            "border border-white/10 bg-[#0a0a0a]",
            "will-change-transform hover:-translate-y-0.5 hover:border-white/20",
            item.colSpan === 2 ? "md:col-span-2" : "col-span-1",
            item.hasPersistentHover && "-translate-y-0.5 border-white/20"
          )}
        >
          {/* Точечный паттерн */}
          <div
            className={cn(
              "absolute inset-0 transition-opacity duration-300",
              item.hasPersistentHover ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            )}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:4px_4px]" />
          </div>

          <div className="relative flex flex-col space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white">
                {item.icon}
              </div>
              <span className="rounded-lg bg-white/[0.06] px-2.5 py-1 text-xs font-medium text-white/60 transition-colors duration-300 group-hover:bg-white/[0.12]">
                {item.status || "Active"}
              </span>
            </div>

            <div className="space-y-1.5">
              <h3 className="font-geist text-base font-semibold tracking-tight text-white md:text-lg">
                {item.title}
                {item.meta && (
                  <span className="ml-2 text-xs font-normal text-white/40">
                    {item.meta}
                  </span>
                )}
              </h3>
              <p className="text-sm leading-relaxed text-white/55">
                {item.description}
              </p>
            </div>

            <div className="mt-2 flex items-center justify-between">
              <div className="flex flex-wrap items-center gap-2 text-xs text-white/40">
                {item.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-md bg-white/[0.05] px-2 py-1 transition-colors duration-200 hover:bg-white/[0.1]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              {item.cta && (
                <span className="text-xs text-white/40 opacity-0 transition-opacity group-hover:opacity-100">
                  {item.cta}
                </span>
              )}
            </div>
          </div>

          {/* Градиентная рамка при наведении */}
          <div
            className={cn(
              "pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-transparent via-white/10 to-transparent p-px transition-opacity duration-300",
              item.hasPersistentHover ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            )}
          />
        </div>
      ))}
    </div>
  )
}

export { BentoGrid }
