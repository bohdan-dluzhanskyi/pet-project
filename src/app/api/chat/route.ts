import { google } from "@ai-sdk/google";
import { streamText } from "ai";

export const runtime = "edge";

interface IncomingMessage {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: Request) {
  try {
    // 📩 Отримуємо чистий масив повідомлень із нашого фронтенду
    const { messages }: { messages: IncomingMessage[] } = await req.json();

    // 🤖 Запускаємо AI безпосередньо, передаючи масив у правильній структурі
    const result = streamText({
      model: google("gemini-2.5-flash"), // Або gemini-2.5-flash

      // Передаємо масив повідомлень без зайвих конвертацій
      messages: messages.map((m) => ({
        role: m.role,
        content: m.content,
      })),

      system: `
Ти AI-консультант DevStudio.

Правила:
- відповідай українською
- будь коротким
- використовуй списки
- допомагай з сайтами, UX/UI, стеком
- якщо мало даних — уточнюй
- якщо ціна — пояснюй що потрібен обсяг задачі
      `,

      temperature: 0.7,
      maxOutputTokens: 800,
    });

    // 🔥 Повертаємо чистий ТЕКСТОВИЙ STREAM, який ідеально читає наш Reader
    return result.toTextStreamResponse();
  } catch (error) {
    console.error("CHAT ERROR:", error);

    return new Response(
      JSON.stringify({ error: "AI request failed" }),
      { 
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}
