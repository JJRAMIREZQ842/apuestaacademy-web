"use client";

import { useProgresoStore } from "@/store/progreso";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function CoachPage() {
  const [chat, setChat] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input && !image) return;
    setLoading(true);

    const userMsg = input ? `👤 Usuario: ${input}` : "👤 Usuario: (imagen subida)";
    setChat((prev) => [...prev, userMsg]);

    let imageBase64;
    if (image) {
      imageBase64 = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve((reader.result as string).split(",")[1]);
        reader.readAsDataURL(image);
      });
    }

    try {
      const res = await fetch("/api/coach", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input, imageBase64 }),
      });

      const data = await res.json();
      setChat((prev) => [...prev, `💬 IA: ${data.reply}`]);

      const montoDetectado = input.match(/\d+/)?.[0] || "0";
      useProgresoStore.getState().agregarApuesta({
        fecha: new Date().toISOString().split("T")[0],
        tipo: image ? "Captura" : "Texto",
        resultado: data.reply.toLowerCase().includes("buena") ? "ganada" : "perdida",
        monto: parseInt(montoDetectado),
      });
    } catch (err) {
      setChat((prev) => [...prev, `💬 IA: Error: ${err}`]);
    }

    setInput("");
    setImage(null);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar />

      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6">🧠 Coach IA</h1>

        <div className="bg-gray-900 p-6 rounded-xl border border-yellow-500 max-w-3xl mx-auto">
          <p className="text-gray-300 mb-4">
            Describe tus apuestas o sube una imagen, y nuestro asistente IA analizará tus decisiones estratégicas.
          </p>

          <div className="bg-black border border-gray-700 rounded p-4 text-sm h-64 overflow-y-auto space-y-2">
            {chat.map((msg, i) => (
              <p key={i} className={msg.startsWith("💬") ? "text-yellow-300" : "text-white"}>{msg}</p>
            ))}
            {loading && <p className="text-yellow-500">⌛ Analizando...</p>}
          </div>

          <div className="mt-4 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Describe tu apuesta..."
              className="flex-1 p-2 rounded bg-gray-800 border border-gray-600 text-white"
            />
            <button
              onClick={handleSend}
              disabled={loading}
              className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-300"
            >
              Enviar
            </button>
          </div>

          <div className="mt-4">
            <label className="block text-sm text-gray-400 mb-1">O sube una captura de pantalla de tu apuesta:</label>
            <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)} className="text-white" />
          </div>

          {image && (
            <div className="mt-4 border border-gray-700 p-2 rounded">
              <p className="text-sm text-gray-300 mb-2">📸 Imagen cargada:</p>
              <img src={URL.createObjectURL(image)} alt="captura apuesta" className="max-h-48 rounded" />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
