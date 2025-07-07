import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  const { text, imageBase64 } = await req.json();

  try {
    if (imageBase64) {
      const modelVision = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await modelVision.generateContent({
        contents: [
          {
            role: "user",
            parts: [
              {
                text: "Aquí tienes una captura de mi apuesta. Analízala, ¿fue una buena decisión? Explica por qué.",
              },
              {
                inlineData: {
                  data: imageBase64,
                  mimeType: "image/jpeg",
                },
              },
            ],
          },
        ],
      });

      const response = await result.response;
      return NextResponse.json({ reply: response.text() });
    }

    if (text) {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(text);
      const response = await result.response;
      return NextResponse.json({ reply: response.text() });
    }

    return NextResponse.json({ reply: "No se recibió texto ni imagen." });
  } catch (err: any) {
    console.error("[Coach API error]", err);
    return NextResponse.json({ reply: "Error analizando: " + err.message }, { status: 500 });
  }
}
