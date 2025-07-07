"use client";
import Sidebar from "@/components/Sidebar";

export default function IntermedioClase4() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">♠️ Intermedio – Clase 4: Semi-faroles y control del bote</h1>

          <p className="mb-4 text-gray-300">
            Un semi-farol es una jugada donde apuestas o subes con una mano que no es fuerte ahora, pero tiene potencial de mejorar. Esta clase explica cómo utilizarlos estratégicamente.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🧠 ¿Qué es un semi-farol?</h2>
          <p className="text-gray-300 mb-4">
            Es una apuesta con una mano que probablemente esté por detrás en el momento, pero que tiene outs (probabilidades de mejora) si se completan ciertas cartas.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🎯 Ejemplo práctico</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Tienes 4♠️5♠️ y el flop es 6♠️7♣️Q♦️ — puedes hacer una apuesta fuerte, aunque no tengas aún una mano hecha.</li>
            <li>Si tu oponente foldea, ganas el bote. Si no, aún puedes ligar una escalera.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">💡 Control del bote</h2>
          <p className="text-gray-300 mb-4">
            En manos marginales o cuando no deseas inflar el bote, controla el tamaño apostando poco o haciendo check en ciertas calles.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">📌 Conclusión</h2>
          <p className="text-gray-300">
            Los semi-faroles son esenciales en el arsenal de un jugador intermedio. Aprender cuándo y contra quién usarlos puede marcar la diferencia.
          </p>
        </div>
      </main>
    </div>
  );
}
