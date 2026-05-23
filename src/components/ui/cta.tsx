"use client"

import { OrbitingAvatarsCTA } from "@/components/ui/orbiting-avatars"

// Плейсхолдеры в /public/avatars — замени на свои квадратные (1:1) фото.
const avatars = [
  { src: "/avatars/01.jpg", alt: "Клиент 1" },
  { src: "/avatars/02.jpg", alt: "Клиент 2" },
  { src: "/avatars/03.jpg", alt: "Клиент 3" },
  { src: "/avatars/04.jpg", alt: "Клиент 4" },
  { src: "/avatars/05.jpg", alt: "Клиент 5" },
  { src: "/avatars/06.jpg", alt: "Клиент 6" },
]

function scrollToContact() {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
}

export function Cta() {
  return (
    <OrbitingAvatarsCTA
      title="Готовы внедрить AI в бизнес?"
      description="Обсудим задачу и предложим, как автоматизировать процессы и подключить AI. Ответим в течение рабочего дня."
      buttonText="Обсудить проект"
      buttonProps={{ onClick: scrollToContact }}
      avatars={avatars}
      orbitRadius={18}
      orbitDuration={50}
    />
  )
}
