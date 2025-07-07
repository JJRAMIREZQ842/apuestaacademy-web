"use client";
import Sidebar from "@/components/Sidebar";

export default function Clase5() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">📍 Clase 5: Posiciones en la mesa</h1>

          <p className="mb-4 text-gray-300">
            En el Texas Hold'em, la posición desde la que juegas en la mesa puede ser más importante que tus cartas. Dominar este concepto te dará ventaja estratégica.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">📌 Tipos de posiciones</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li><strong>Early position (EP):</strong> Primeros en hablar, menos información. Incluye UTG (Under The Gun).</li>
            <li><strong>Middle position (MP):</strong> Posiciones intermedias. Más flexibilidad.</li>
            <li><strong>Late position (LP):</strong> Incluye el botón y cutoff. Mejor información, más poder.</li>
            <li><strong>Blinds:</strong> Small Blind y Big Blind. Obligados a apostar, pero hablan últimos preflop.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🧠 Importancia estratégica</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>En posiciones tardías puedes jugar manos más débiles con ventaja.</li>
            <li>Desde posiciones tempranas, juega manos fuertes.</li>
            <li>El botón (dealer) es la posición más poderosa postflop.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🎯 Conclusión</h2>
          <p className="text-gray-300">
            Entender las posiciones es vital para aplicar presión, defender o retirarte con sabiduría. Siempre evalúa tu posición antes de decidir jugar una mano.
          </p>
        </div>
      </main>
    </div>
  );
}
