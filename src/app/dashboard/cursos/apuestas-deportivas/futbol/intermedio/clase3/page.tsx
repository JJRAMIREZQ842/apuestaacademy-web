// pages/dashboard/cursos/apuestas-deportivas/futbol/intermedio/clase3/page.tsx
"use client";
import Sidebar from "@/components/Sidebar";

export default function Clase3IntermedioFutbol() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">⚽ Clase 3: Gestión del Bankroll y Análisis de Resultados</h1>

          <p className="mb-4 text-gray-300">
            Una de las diferencias clave entre apostadores recreativos y profesionales es la gestión del dinero. Esta clase te enseñará cómo proteger tu capital y optimizar tus resultados a largo plazo.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">💰 ¿Qué es el Bankroll?</h2>
          <p className="text-gray-300 mb-4">
            Es el total de dinero que tienes destinado exclusivamente para apostar. No debe mezclarse con tus finanzas personales.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">📊 Reglas básicas de gestión</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Apuesta entre el 1% y 5% del bankroll por jugada (según confianza).</li>
            <li>Evita la "recuperación" inmediata tras pérdidas. Mantén la disciplina.</li>
            <li>Evalúa resultados cada 10-20 apuestas, no en el corto plazo.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🧠 Registro y análisis</h2>
          <p className="text-gray-300 mb-4">
            Lleva un registro detallado de tus apuestas (tipo, cuota, stake, resultado). Esto te permitirá detectar errores, corregir rumbo y especializarte.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🎯 Conclusión</h2>
          <p className="text-gray-300">
            Apostar con disciplina y datos es el verdadero camino al éxito. Controlar el bankroll es más importante que predecir partidos.
          </p>
        </div>
      </main>
    </div>
  );
}
