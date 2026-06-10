"use client"

import {
  Globe,
  Scale,
  Calculator,
  Bitcoin,
  Sparkles,
  Megaphone,
  Factory,
  Terminal,
} from "lucide-react"
import {
  TestimonialsColumn,
  type Testimonial,
} from "@/components/ui/testimonials-columns-1"

// Реальные отзывы клиентов. Подпись — по типу бизнеса, без указания площадки.
const testimonials: Testimonial[] = [
  {
    text: "Быстро и качественно выполнен заказ. Будем обращаться повторно.",
    name: "Онлайн-сервис",
    role: "n8n-автоматизация",
    icon: Globe,
  },
  {
    text: "Обратилась с вопросом создания сайта для юриста. Сделали всё быстро и качественно: добавили всё необходимое, подключили ИИ-бота, настроили хостинг, домен и чаты в мессенджерах. Отвечали быстро и даже бесплатно приняли мои правки. Спасибо за работу, обязательно ещё обращусь. Вы супер!",
    name: "Юридическая практика",
    role: "Сайт + ИИ-бот",
    icon: Scale,
  },
  {
    text: "Благодарю за выполненную работу! Заказ по вёрстке выполнен раньше срока, все правки учли и моментально исправили. Ребята профи, всем рекомендую!",
    name: "Бухгалтерия и учёт",
    role: "Вёрстка сайта",
    icon: Calculator,
  },
  {
    text: "Задача была выполнена сверхоперативно! Очень рекомендую данного исполнителя. Сам буду обращаться ещё.",
    name: "Крипто-финанс компания",
    role: "Автоматизация · скрипт",
    icon: Bitcoin,
  },
  {
    text: "Отличная работа, настоящие профессионалы. Telegram-бот сделан качественно и по ТЗ. Порадовала инициатива по оптимизации процессов. Управление ролями и система квот реализованы безупречно. Проект сдан в срок, код передан в репозитории с документацией. Очень доволен результатом!",
    name: "Бьюти-сфера · ногтевой сервис",
    role: "AI-анализ ногтей + CRM-бот",
    icon: Sparkles,
    image: "/clients/kuzhbalov96.jpg",
  },
  {
    text: "Ребята выполнили работу в кратчайшие сроки, спасибо большое! Отвечают очень быстро, с ними просто коммуницировать и работа идёт быстро. Советую!",
    name: "Digital-агентство",
    role: "Автоматизация · скрипт",
    icon: Megaphone,
  },
  {
    text: "Осталась очень довольна работой — сайт хороший, приятный глазу. Сделали шустро, чётко и без проблем, понимают с полуслова. Буду ли обращаться снова? ОДНОЗНАЧНО ДА!",
    name: "Производственная компания",
    role: "Корпоративный сайт",
    icon: Factory,
  },
  {
    text: "Делал правку скрипта на Python — в отличие от многих других сделал всё быстро и качественно. Рекомендую.",
    name: "Разработчик",
    role: "Доработка Python-скрипта",
    icon: Terminal,
    image: "/clients/art36.jpg",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 8)

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative w-full overflow-hidden bg-background py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Заголовок */}
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <div className="rounded-full border border-white/10 px-4 py-1 text-sm text-white/60">
            Отзывы
          </div>
          <h2
            className="mt-5 bg-gradient-to-br from-white from-30% to-white/50 bg-clip-text
            font-geist text-4xl font-semibold leading-tight tracking-tighter text-transparent md:text-5xl"
          >
            Что говорят клиенты
          </h2>
          <p className="mt-4 text-balance text-base text-white/55 md:text-lg">
            8 положительных отзывов и ни одного отрицательного — реальные задачи
            бизнеса, доведённые до результата.
          </p>
        </div>

        {/* Колонки с автопрокруткой */}
        <div className="mt-14 flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  )
}
