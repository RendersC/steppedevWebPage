"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { LayeredText } from "@/components/ui/layered-text"

const layeredLines = [
  { top: " ", bottom: "AUTOMATE" },
  { top: "AUTOMATE", bottom: "INTEGRATE" },
  { top: "INTEGRATE", bottom: "AI" },
  { top: "AI", bottom: "BOTS" },
  { top: "BOTS", bottom: "SCALE" },
  { top: "SCALE", bottom: "GROW" },
  { top: "GROW", bottom: " " },
]

type QA = { id: number; question: string; answer: string }

const faqs: QA[] = [
  {
    id: 1,
    question: "Что такое n8n и зачем нужна автоматизация?",
    answer:
      "n8n — это платформа для соединения сервисов в единые сценарии без рутинного ручного труда. Заявки, уведомления, выгрузки данных и обработка AI запускаются автоматически. В итоге команда тратит время на задачи, а не на однотипные операции.",
  },
  {
    id: 2,
    question: "Сколько стоит проект и от чего зависит цена?",
    answer:
      "Стоимость зависит от объёма: количества сценариев, интеграций и сложности AI-логики. После короткого брифинга мы фиксируем объём и называем точную цену — без скрытых платежей. Небольшие задачи можно сделать пакетно.",
  },
  {
    id: 3,
    question: "Сколько времени занимает разработка?",
    answer:
      "Простой бот или сценарий — от нескольких дней. Комплексная интеграция с CRM и AI-ассистентом — от 1–2 недель. Точные сроки фиксируем на этапе проектирования и часто сдаём раньше срока.",
  },
  {
    id: 4,
    question: "С какими CRM и сервисами вы интегрируетесь?",
    answer:
      "Практически с любыми, у которых есть API или вебхуки: amoCRM, Bitrix24, Google-сервисы, Telegram, базы данных (PostgreSQL и др.), платёжные системы и сотни других через n8n, Make и Zapier.",
  },
  {
    id: 5,
    question: "Безопасны ли мои данные при внедрении AI?",
    answer:
      "Да. Доступы храним по принципу минимальных прав, ключи — в защищённых хранилищах. По запросу разворачиваем решение на вашей инфраструктуре, чтобы данные не покидали ваш контур.",
  },
  {
    id: 6,
    question: "Можно ли доработать существующую систему, а не делать с нуля?",
    answer:
      "Конечно. Часто мы подключаемся к уже работающим сайтам, CRM и ботам: добавляем AI, оптимизируем сценарии и закрываем узкие места, не переписывая всё заново.",
  },
  {
    id: 7,
    question: "Будет ли поддержка после запуска?",
    answer:
      "Да. После сдачи передаём код и документацию, обучаем команду и сопровождаем решение: дорабатываем, масштабируем и помогаем по мере роста.",
  },
  {
    id: 8,
    question: "Как начать работу?",
    answer:
      "Напишите нам в Telegram или WhatsApp, либо оставьте заявку в форме ниже. Проведём короткий брифинг, разберём задачу и предложим решение со сроками и ценой.",
  },
]

export function Faq() {
  return (
    <section
      id="faq"
      className="relative w-full overflow-hidden bg-background py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[0.8fr_1fr] lg:gap-16">
        {/* Левая колонка — заголовок + анимированный текст + CTA */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm uppercase tracking-widest text-white/40">FAQ</p>
          <h2
            className="mt-4 bg-gradient-to-br from-white from-30% to-white/50 bg-clip-text
            font-geist text-4xl font-semibold leading-tight tracking-tighter text-transparent md:text-5xl"
          >
            Частые вопросы
          </h2>

          {/* Декоративный layered-text (анимация при наведении) */}
          <LayeredText
            lines={layeredLines}
            fontSize="44px"
            fontSizeMd="30px"
            className="!mx-0 !pb-8 !pt-24 hidden md:block"
          />
        </div>

        {/* Правая колонка — аккордеон */}
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="w-full [&>div]:border-white/10"
        >
          {faqs.map((item) => (
            <AccordionItem key={item.id} value={`item-${item.id}`}>
              <AccordionTrigger className="py-5 text-left !no-underline">
                <span className="text-base font-medium tracking-tight text-white md:text-lg">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="pr-6 text-sm leading-relaxed text-white/55 md:text-base">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
