"use client";
import Sidebar from "@/components/Sidebar";

export default function IntermedioClase1() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">♠️ Intermedio – Clase 1: Lecturas de oponentes</h1>

          <p className="mb-4 text-gray-300">
            Aprende a interpretar patrones de apuesta, lenguaje corporal (en vivo) y tiempos de reacción para anticiparte a las jugadas de tus oponentes.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🔍 Señales a observar</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Frecuencia de apuestas — ¿Cuan agresivo es?</li>
            <li>Tiempo de respuesta — ¿Reflotan rápido o dudan?</li>
            <li>Reacciones al ganar o perder — pistas emocionales.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🎯 Aplicación práctica</h2>
          <p className="text-gray-300 mb-4">
            Observa una partida y toma nota de comportamientos repetitivos. Anota patrones y adáptate en siguiente sesión.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">📌 Resumen</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Las lecturas te permiten jugar manos marginales con ventaja.</li>
            <li>No bases tus decisiones solo en tus cartas.</li>
            <li>La perseverancia y la observación mejoran tu nivel.</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
