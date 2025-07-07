// pages/dashboard/cursos/apuestas-deportivas/futbol/intermedio/clase2/page.tsx
"use client";
import Sidebar from "@/components/Sidebar";

export default function Clase2IntermedioFutbol() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">⚽ Clase 2: Tipos de Apuestas Avanzadas en Fútbol</h1>

          <p className="mb-4 text-gray-300">
            Una vez dominadas las apuestas básicas como 1X2, es momento de explorar mercados más complejos que pueden ofrecer mejores oportunidades y valor si se analizan correctamente.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">📌 Apuestas de Valor en Mercados Alternativos</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><strong>Apuestas al hándicap asiático:</strong> útiles para partidos desequilibrados, reducen el riesgo en ciertas condiciones.</li>
            <li><strong>Over/Under (goles):</strong> analiza el promedio de goles por equipo, por liga, por local/visita.</li>
            <li><strong>Ambos marcan (BTTS):</strong> excelente mercado para equipos con defensas débiles pero buena delantera.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🎯 Estrategias para Utilizar estos Mercados</h2>
          <p className="text-gray-300 mb-4">
            La clave está en el análisis previo y en identificar patrones. Por ejemplo:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Equipos que marcan pero también reciben muchos goles = BTTS y Over 2.5.</li>
            <li>Favoritos que no ganan por goleada = hándicap asiático -0.5 o -1.0.</li>
            <li>Equipos defensivos y partidos cerrados = Under 2.5.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">💡 Consejo Final</h2>
          <p className="text-gray-300">
            No apuestes en todos los mercados. Especialízate en los que mejor comprendas, y construye tu estrategia en base al análisis, no a la intuición.
          </p>
        </div>
      </main>
    </div>
  );
}
