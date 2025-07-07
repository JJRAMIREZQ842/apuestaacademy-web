"use client";
import Sidebar from "@/components/Sidebar";

export default function Clase3() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">
            🪑 Clase 3: Posiciones en la mesa
          </h1>

          <p className="mb-4 text-gray-300">
            La posición en la mesa es un factor clave en Texas Hold'em. En esta clase descubrirás cómo influye en tus decisiones y estrategia.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">
            📌 Principales posiciones
          </h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li><strong>Small Blind (SB):</strong> Segunda ficha obligatoria, juega primero post-flop.</li>
            <li><strong>Big Blind (BB):</strong> Primera apuesta obligatoria, bajo presión post-flop.</li>
            <li><strong>Early Position (UTG…):</strong> Deciden primero; deben jugar manos fuertes.</li>
            <li><strong>Middle Position (MP):</strong> Deciden tras UTG, mayor flexibilidad que early.</li>
            <li><strong>Late Position (CO, Button):</strong> Ventaja por actuar de últimos; permiten juego más agresivo.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">
            💡 ¿Por qué importa la posición?
          </h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Mayor información al actuar de últimos.</li>
            <li>Permite controles de tamaño de bote y faroles con respaldo.</li>
            <li>Define qué manos son jugables según posición.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">
            🎯 Ejemplo práctico
          </h2>
          <p className="text-gray-300 mb-4">
            Estás en el botón (dé última posición) con A♠️K♠️: puedes jugar con agresividad y controlar apuestas.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">
            📎 Tarea sugerida
          </h2>
          <p className="text-gray-300">
            Juega una sesión de práctica y observa cómo varía tu rango de manos en diferentes posiciones.
          </p>
        </div>
      </main>
    </div>
  );
}
