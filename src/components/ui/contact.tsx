"use client"

import { useState } from "react"
import { Send, Phone, MessageCircle, ArrowUpRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const CONTACTS = {
  telegram: { label: "@Belyi_0071", href: "https://t.me/Belyi_0071" },
  whatsapp: { label: "+7 705 520 5316", href: "https://wa.me/77055205316" },
}

const fieldClass =
  "border-white/10 bg-white/[0.03] text-white placeholder:text-white/30 focus-visible:ring-white/20"

export function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const fd = new FormData(e.currentTarget)
    const payload = {
      name: fd.get("name"),
      contact: fd.get("contact"),
      message: fd.get("message"),
    }

    try {
      // Заявка уходит на serverless-функцию /api/lead, которая шлёт её в Telegram.
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error()
      setSent(true)
    } catch {
      setError(
        "Не удалось отправить заявку. Напишите нам в Telegram или WhatsApp — ответим быстро."
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-background py-24 md:py-32"
    >
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Левая колонка — заголовок и прямые контакты */}
        <div>
          <p className="text-sm uppercase tracking-widest text-white/40">
            Контакты
          </p>
          <h2
            className="mt-4 bg-gradient-to-br from-white from-30% to-white/50 bg-clip-text
            font-geist text-4xl font-semibold leading-tight tracking-tighter text-transparent md:text-5xl"
          >
            Давайте обсудим
            <br />
            ваш проект
          </h2>
          <p className="mt-5 max-w-md text-balance text-base text-white/55 md:text-lg">
            Расскажите задачу — предложим, как автоматизировать процессы и
            встроить AI. Ответим в течение рабочего дня.
          </p>

          <div className="mt-10 flex flex-col gap-3">
            <a
              href={CONTACTS.telegram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4
              transition-colors hover:border-white/25 hover:bg-white/[0.05]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-white">
                <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <span className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-white/40">
                  Telegram
                </span>
                <span className="text-sm text-white">{CONTACTS.telegram.label}</span>
              </span>
              <ArrowUpRight className="ml-auto h-4 w-4 text-white/30 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/60" />
            </a>

            <a
              href={CONTACTS.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4
              transition-colors hover:border-white/25 hover:bg-white/[0.05]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-white">
                <Phone className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <span className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-white/40">
                  WhatsApp
                </span>
                <span className="text-sm text-white">{CONTACTS.whatsapp.label}</span>
              </span>
              <ArrowUpRight className="ml-auto h-4 w-4 text-white/30 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/60" />
            </a>
          </div>
        </div>

        {/* Правая колонка — форма */}
        <div className="rounded-2xl border border-white/10 bg-[#0a0a0a]/80 p-6 backdrop-blur-sm md:p-8">
          {sent ? (
            <div className="flex h-full min-h-[360px] flex-col items-center justify-center text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white">
                <Check className="h-7 w-7" strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 font-geist text-2xl font-semibold tracking-tight text-white">
                Заявка отправлена
              </h3>
              <p className="mt-2 max-w-xs text-sm text-white/55">
                Спасибо! Мы свяжемся с вами в ближайшее время.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-white/80">
                  Имя
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Как к вам обращаться"
                  className={fieldClass}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact" className="text-sm font-medium text-white/80">
                  Telegram или email
                </label>
                <Input
                  id="contact"
                  name="contact"
                  required
                  placeholder="@username или you@mail.com"
                  className={fieldClass}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-white/80">
                  Задача
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Коротко опишите, что хотите автоматизировать"
                  className={fieldClass}
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="mt-1 h-11 w-full font-geist text-base tracking-tight"
              >
                {loading ? (
                  "Отправляем…"
                ) : (
                  <>
                    Отправить заявку
                    <Send className="ml-2 h-4 w-4" strokeWidth={2} />
                  </>
                )}
              </Button>

              {error && (
                <p className="text-center text-sm text-red-400">{error}</p>
              )}

              <p className="text-center text-xs text-white/35">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
