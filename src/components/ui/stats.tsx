"use client"

// Полоса фактов — быстрые доводы «почему нам можно доверять» для B2B.
const stats = [
  { value: "5.0", label: "средняя оценка от клиентов" },
  { value: "100%", label: "положительных отзывов клиентов" },
  { value: "до 80%", label: "рутины забирает автоматизация" },
  { value: "< 24 ч", label: "ответ на новую заявку" },
]

export function Stats() {
  return (
    <section className="relative w-full bg-background pb-8">
      <div className="mx-auto max-w-6xl px-6">
        {/* gap-px поверх bg-white/10 даёт тонкие разделители между ячейками */}
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1.5 bg-[#0a0a0a] px-4 py-8 text-center md:px-6"
            >
              <span
                className="bg-gradient-to-br from-white from-30% to-white/50 bg-clip-text
                font-geist text-3xl font-semibold tracking-tighter text-transparent md:text-4xl"
              >
                {stat.value}
              </span>
              <span className="max-w-[180px] text-xs leading-snug text-white/45 md:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
