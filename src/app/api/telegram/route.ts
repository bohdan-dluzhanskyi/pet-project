import { NextResponse } from "next/server";

const escapeHtml = (str: string = "") =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

export async function POST(request: Request) {
  try {
    const { name, phone, comment } = await request.json();

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      throw new Error(
        "Не задані TELEGRAM_BOT_TOKEN або TELEGRAM_CHAT_ID"
      );
    }

    const text = `
📬 <b>НОВА ЗАЯВКА НА САЙТІ</b>

👤 <b>Ім'я:</b> ${escapeHtml(name)}
📞 <b>Телефон:</b> ${escapeHtml(phone)}
💬 <b>Запит:</b> ${escapeHtml(comment)}
`.trim();

    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "HTML",
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error(data);
      throw new Error(data.description);
    }

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Telegram Route Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Не вдалося відправити повідомлення",
      },
      { status: 500 }
    );
  }
}