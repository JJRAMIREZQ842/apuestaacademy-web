"use client";
import Sidebar from "@/components/Sidebar";

export default function Clase2() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">♣️ Clase 2: Reglas básicas del Texas Hold'em</h1>

          <p className="mb-4 text-gray-300">
            En esta clase aprenderás las reglas fundamentales que rigen el juego de Texas Hold'em, esenciales para cualquier principiante.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🔄 Objetivo del juego</h2>
          <p className="text-gray-300 mb-4">
            Formar la mejor mano posible de cinco cartas combinando tus dos cartas privadas con las cinco cartas comunitarias.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">📜 Reglas generales</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Cada jugador recibe dos cartas privadas.</li>
            <li>Se reparten cinco cartas comunitarias en tres fases: flop (3), turn (1) y river (1).</li>
            <li>Hay cuatro rondas de apuestas: preflop, flop, turn y river.</li>
            <li>Gana quien tenga la mejor mano de cinco cartas o el último jugador en pie tras las apuestas.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">💡 Consejos iniciales</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Aprende las combinaciones de manos desde la más baja hasta la escalera real.</li>
            <li>No juegues todas las manos, selecciona tus manos iniciales cuidadosamente.</li>
            <li>Observa el comportamiento de tus oponentes y aprende de ellos.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🎯 Conclusión</h2>
          <p className="text-gray-300">
            Dominar las reglas es el primer paso esencial para desarrollar una estrategia ganadora. En la siguiente clase profundizaremos en las posiciones en la mesa y cómo afectan a tus decisiones.
          </p>
        </div>
      </main>
    </div>
  );
}
