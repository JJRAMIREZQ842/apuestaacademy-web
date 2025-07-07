// /app/dashboard/cursos/poker/texas-holdem/intermedio/clase6/page.tsx
"use client";
import Sidebar from "@/components/Sidebar";

export default function IntermedioClase6() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">♠️ Clase 6: Juego en el River – Toma de decisiones finales</h1>

          <p className="text-gray-300 mb-4">
            El river es la última calle en una mano de Texas Hold'em. No se repartirán más cartas, lo que significa que tu mano está completa. Todas las decisiones que tomes en esta etapa son críticas: estás apostando por valor, como farol, o decidiendo si igualar una apuesta.
          </p>

          <h2 className="text-2xl text-yellow-300 font-semibold mt-6 mb-2">🎯 Objetivos del juego en el river</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Maximizar valor con manos fuertes.</li>
            <li>Evitar pagar con manos débiles o marginales.</li>
            <li>Utilizar faroles estratégicamente.</li>
          </ul>

          <h2 className="text-2xl text-yellow-300 font-semibold mt-6 mb-2">💡 Valor de showdown vs. bluff</h2>
          <p className="text-gray-300 mb-4">
            Antes de decidir tu acción, evalúa si tu mano tiene suficiente valor para ganar en el showdown. Si no lo tiene, podrías considerar apostar como farol, especialmente si representas una mano fuerte creíble.
          </p>

          <h2 className="text-2xl text-yellow-300 font-semibold mt-6 mb-2">🧠 Factores clave en el river</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li><strong>Textura del board:</strong> ¿Es probable que el rival tenga un proyecto completado?</li>
            <li><strong>Acción previa:</strong> ¿Cómo jugó tu oponente las calles anteriores?</li>
            <li><strong>Tu imagen:</strong> ¿Cómo cree tu oponente que juegas tú?</li>
            <li><strong>Pot odds:</strong> ¿Te conviene pagar en términos de relación riesgo/recompensa?</li>
          </ul>

          <h2 className="text-2xl text-yellow-300 font-semibold mt-6 mb-2">🔁 Bluff en el river</h2>
          <p className="text-gray-300 mb-4">
            El river es la calle más efectiva para farolear, pero también la más arriesgada. Asegúrate de que:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Tu línea de juego sea coherente con una mano fuerte.</li>
            <li>Tu oponente sea capaz de foldear manos medianas.</li>
            <li>Tengas pocos outs y poco valor de showdown.</li>
          </ul>

          <h2 className="text-2xl text-yellow-300 font-semibold mt-6 mb-2">📌 Ejemplo práctico</h2>
          <p className="text-gray-300 mb-4">
            Tienes A♠️K♣️ y el board es J♦️ 9♣️ 2♠️ 4♠️ Q♥️. Tu oponente te hace una apuesta fuerte en el river.
          </p>
          <ul className="list-disc text-gray-400 ml-5">
            <li>Tienes una mano alta (top high card).</li>
            <li>No tienes valor de showdown frente a una apuesta fuerte.</li>
            <li>Considera si un farol podría funcionar y si su rango tiene manos que puedan foldear.</li>
          </ul>

          <h2 className="text-2xl text-yellow-300 font-semibold mt-6 mb-2">✅ Conclusión</h2>
          <p className="text-gray-300">
            El river no es solo el final de una mano, es el momento en el que se revela toda tu estrategia. Aprende a reconocer cuándo apostar por valor y cuándo transformar una mano sin valor en una herramienta de presión. Cada decisión cuenta.
          </p>
        </div>
      </main>
    </div>
  );
}

