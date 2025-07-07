"use client";
import Sidebar from "@/components/Sidebar";

export default function AvanzadoClase2() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">🧠 Clase 2: Juego Explotativo vs GTO</h1>

          <p className="text-gray-300 mb-4">
            En esta clase aprenderás la diferencia entre estrategias explotativas y GTO (Game Theory Optimal), y cuándo conviene aplicar cada una en el juego real.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🎭 Juego Explotativo</h2>
          <p className="text-gray-300 mb-4">
            Se basa en ajustar tu juego a los errores específicos de tus oponentes. Si un jugador paga demasiado, apuestas más por valor. Si se tira mucho, haces más faroles.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">📐 GTO – Game Theory Optimal</h2>
          <p className="text-gray-300 mb-4">
            Es una estrategia teóricamente perfecta, que no puede ser explotada. Busca el equilibrio entre valor y farol, sin depender del rival.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">⚖️ ¿Cuál usar?</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Usa GTO contra regulares o jugadores fuertes.</li>
            <li>Usa explotativo contra jugadores débiles o con patrones evidentes.</li>
            <li>Lo ideal: domina ambos y alterna según contexto.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🧪 Ejemplo Práctico</h2>
          <p className="text-gray-300">
            Estás en el river con una mano media. Contra un rival tight que se tira mucho, puedes apostar como farol (explotativo). Contra un pro agresivo, quizás solo checks GTO.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🎯 Conclusión</h2>
          <p className="text-gray-300">
            Aprender a detectar cuándo explotar y cuándo protegerte con GTO es clave en el juego avanzado. Entrénate con simuladores y revisa manos propias para detectar errores.
          </p>
        </div>
      </main>
    </div>
  );
}
