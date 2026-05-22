import {
  Github,
  Instagram,
  Phone,
  MessageCircle,
  ExternalLink,
} from "lucide-react"

const TELEGRAM = "https://t.me/Belyi_0071"
const WHATSAPP = "https://wa.me/77055205316"
const GITHUB = "https://github.com/RendersC"
const INSTAGRAM = "https://www.instagram.com/nura_a07_?igsh=emt1c3Nzc3c0c2M1"
const KWORK = "https://kwork.ru/user/steppedev"

const socials = [
  { icon: MessageCircle, href: TELEGRAM, label: "Telegram" },
  { icon: Phone, href: WHATSAPP, label: "WhatsApp" },
  { icon: Github, href: GITHUB, label: "GitHub" },
  { icon: Instagram, href: INSTAGRAM, label: "Instagram" },
]

const services = [
  { label: "n8n-автоматизации", href: "#services" },
  { label: "AI-интеграция", href: "#services" },
  { label: "CRM-автоматизация", href: "#services" },
  { label: "Чат-боты", href: "#services" },
  { label: "AI-ассистенты", href: "#services" },
]

const company = [
  { label: "О студии", href: "#hero" },
  { label: "Как мы работаем", href: "#process" },
  { label: "Технологии", href: "#tech" },
  { label: "Контакты", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 pt-32 pb-12">
      {/* Фоновый grid-паттерн — эхо hero */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Бренд */}
          <div className="group">
            <div className="mb-8 flex items-center">
              <img
                src="/logo-full.png"
                alt="SteppeDev"
                className="h-20 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="mb-8 leading-relaxed text-gray-600">
              Внедряем AI и автоматизацию в бизнес: n8n-сценарии, CRM, чат-боты
              и AI-ассистенты. Главное оружие — интеграция искусственного
              интеллекта.
            </p>
            <div className="flex space-x-4">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white/90 text-gray-600 shadow-sm transition-all duration-300 hover:border-transparent hover:bg-black hover:text-white hover:shadow-lg"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Услуги */}
          <div>
            <h4 className="mb-6 font-geist text-lg font-bold tracking-tight text-black">
              Услуги
            </h4>
            <ul className="space-y-4">
              {services.map((service, idx) => (
                <li key={idx}>
                  <a
                    href={service.href}
                    className="group flex items-center text-gray-600 transition-colors duration-300 hover:text-black"
                  >
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-black opacity-0 transition-opacity group-hover:opacity-100" />
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Компания */}
          <div>
            <h4 className="mb-6 font-geist text-lg font-bold tracking-tight text-black">
              Компания
            </h4>
            <ul className="space-y-4">
              {company.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="group flex items-center text-gray-600 transition-colors duration-300 hover:text-black"
                  >
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-black opacity-0 transition-opacity group-hover:opacity-100" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="mb-6 font-geist text-lg font-bold tracking-tight text-black">
              Контакты
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-gray-600 transition-colors duration-300 hover:text-black"
                >
                  <Phone className="mr-2 h-5 w-5 text-gray-400" />
                  +7 705 520 5316
                </a>
              </li>
              <li>
                <a
                  href={TELEGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-gray-600 transition-colors duration-300 hover:text-black"
                >
                  <MessageCircle className="mr-2 h-5 w-5 text-gray-400" />
                  @Belyi_0071
                </a>
              </li>
              <li>
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-gray-600 transition-colors duration-300 hover:text-black"
                >
                  <Github className="mr-2 h-5 w-5 text-gray-400" />
                  github.com/RendersC
                </a>
              </li>
              <li>
                <a
                  href={KWORK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-gray-600 transition-colors duration-300 hover:text-black"
                >
                  <ExternalLink className="mr-2 h-5 w-5 text-gray-400" />
                  kwork.ru/user/steppedev
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 border-t border-black/10 pt-8 text-center">
          <p className="text-sm font-medium text-gray-500">
            © {new Date().getFullYear()} SteppeDev. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
