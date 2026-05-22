// Serverless-функция (Vercel: /api/lead). Принимает заявку с формы и
// отправляет её в Telegram. Токен и chat_id берутся ТОЛЬКО из переменных
// окружения хостинга — в коде/репозитории их нет.
//
// Нужно задать на хостинге (Vercel → Settings → Environment Variables):
//   TELEGRAM_BOT_TOKEN — токен бота от @BotFather
//   TELEGRAM_CHAT_ID   — id чата/пользователя, куда слать заявки

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  if (!token || !chatId) {
    return res.status(500).json({ error: "Сервер не настроен" })
  }

  // Тело может прийти строкой или уже распарсенным объектом
  let body = req.body
  if (typeof body === "string") {
    try {
      body = JSON.parse(body || "{}")
    } catch {
      body = {}
    }
  }
  body = body || {}

  const name = String(body.name || "").trim().slice(0, 200)
  const contact = String(body.contact || "").trim().slice(0, 200)
  const message = String(body.message || "").trim().slice(0, 2000)

  if (!name || !contact || !message) {
    return res.status(400).json({ error: "Заполните все поля" })
  }

  // parse_mode не задаём — текст уходит как есть, без риска инъекций разметки
  const text =
    "🔔 Новая заявка с сайта SteppeDev\n\n" +
    "👤 Имя: " + name + "\n" +
    "📩 Контакт: " + contact + "\n" +
    "📝 Задача: " + message

  try {
    const tg = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true,
      }),
    })
    const data = await tg.json()
    if (!data.ok) {
      return res.status(502).json({ error: "Ошибка Telegram", detail: data.description })
    }
    return res.status(200).json({ ok: true })
  } catch (e) {
    return res.status(500).json({ error: "Не удалось отправить" })
  }
}
