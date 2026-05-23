"use client"

import { useEffect, useRef, useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { label: "Услуги", href: "#services" },
  { label: "Процесс", href: "#process" },
  { label: "Отзывы", href: "#testimonials" },
  { label: "Контакты", href: "#contact" },
]

function Logo() {
  return (
    <a href="#hero" className="flex items-center gap-2.5">
      <img src="/logo-mark.png" alt="SteppeDev" className="h-8 w-auto" />
      <span className="font-geist text-lg font-semibold tracking-tight text-white">
        Steppe<span className="text-white/50">Dev</span>
      </span>
    </a>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 16)
      // Вниз и достаточно далеко от верха — прячем; вверх — показываем.
      if (y > lastY.current && y > 80) setHidden(true)
      else setHidden(false)
      lastY.current = y
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-transform duration-300 will-change-transform",
        hidden && !open ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div
        className={cn(
          "border-b transition-colors duration-300",
          scrolled || open
            ? "border-white/10 bg-black/70 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        )}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Logo />

          {/* Десктоп-ссылки */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Десктоп-CTA */}
          <div className="hidden md:block">
            <Button asChild size="sm" className="h-9 font-geist tracking-tight">
              <a href="#contact">Обсудить проект</a>
            </Button>
          </div>

          {/* Мобильная кнопка-бургер */}
          <button
            type="button"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Мобильное меню */}
        {open && (
          <div className="border-t border-white/10 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base text-white/70 transition-colors hover:bg-white/[0.05] hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="mt-3 h-11 font-geist tracking-tight">
                <a href="#contact" onClick={() => setOpen(false)}>
                  Обсудить проект
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
