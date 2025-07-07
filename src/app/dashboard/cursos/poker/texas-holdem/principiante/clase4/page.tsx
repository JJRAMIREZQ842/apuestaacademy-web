"use client";
import Sidebar from "@/components/Sidebar";

export default function Clase4() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">🃏 Clase 4: Tipos de manos y su valor</h1>

          <p className="mb-4 text-gray-300">
            Conocer las manos del póker y su jerarquía es esencial. En esta clase repasaremos todas las combinaciones posibles, de la más baja a la más alta.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">📊 Clasificación de manos</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li><strong>Carta alta:</strong> Sin pares, gana la carta más alta.</li>
            <li><strong>Pareja:</strong> Dos cartas del mismo valor.</li>
            <li><strong>Doble pareja:</strong> Dos pares distintos.</li>
            <li><strong>Trío (Set):</strong> Tres cartas del mismo valor.</li>
            <li><strong>Escalera:</strong> Cinco cartas en secuencia (sin importar el palo).</li>
            <li><strong>Color:</strong> Cinco cartas del mismo palo, no necesariamente en orden.</li>
            <li><strong>Full House:</strong> Un trío y una pareja.</li>
            <li><strong>Póker:</strong> Cuatro cartas del mismo valor.</li>
            <li><strong>Escalera de color:</strong> Cinco cartas consecutivas del mismo palo.</li>
            <li><strong>Escalera Real:</strong> A♠ K♠ Q♠ J♠ 10♠ (la mejor mano posible).</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🎯 Consejos clave</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Memoriza la jerarquía de manos.</li>
            <li>Las manos medias (doble pareja, color) son comunes ganadoras.</li>
            <li>No sobrevalores pares bajos o solo carta alta.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🧠 Ejercicio</h2>
          <p className="text-gray-300">
            Mira una partida grabada de póker y trata de identificar qué tipo de manos se enfrentan en cada showdown.
          </p>
        </div>
      </main>
    </div>
  );
}
