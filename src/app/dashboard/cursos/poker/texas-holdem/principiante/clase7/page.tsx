"use client";
import Sidebar from "@/components/Sidebar";

export default function Clase7() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">🪑 Clase 7: Introducción a la posición en la mesa</h1>

          <p className="mb-4 text-gray-300">
            La posición en la que te encuentras en la mesa tiene un gran impacto en tus decisiones. Aprender a jugar según tu posición te convertirá en un jugador mucho más fuerte.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">📌 ¿Qué es la posición?</h2>
          <p className="text-gray-300 mb-4">
            Se refiere al orden en el que actúas durante una mano. En Texas Hold'em, actuar después de los demás te da más información y ventaja.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">📍 Tipos de posiciones</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li><strong>Early position (EP):</strong> Primeros en actuar. Menor ventaja.</li>
            <li><strong>Middle position (MP):</strong> En el medio. Algo más de control.</li>
            <li><strong>Late position (LP):</strong> Últimos en actuar. Mayor ventaja.</li>
            <li><strong>Blinds:</strong> Small blind y big blind actúan al final del preflop y primero en las demás rondas.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">✅ Por qué importa</h2>
          <p className="text-gray-300 mb-4">
            En posición puedes ver cómo actúan los demás antes de tomar una decisión. Esto te permite hacer apuestas más precisas y evitar errores costosos.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🎯 Conclusión</h2>
          <p className="text-gray-300">
            Jugar en posición es una de las ventajas más importantes del póker. Aprende a adaptarte según tu posición y verás grandes mejoras en tu juego.
          </p>
        </div>
      </main>
    </div>
  );
}
