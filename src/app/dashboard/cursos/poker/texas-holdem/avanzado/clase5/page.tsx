"use client";
import Sidebar from "@/components/Sidebar";

export default function AvanzadoClase5() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">🔍 Clase 5: Lectura Avanzada de Manos</h1>

          <p className="text-gray-300 mb-4">
            La lectura de manos es una de las habilidades más valiosas en el póker. En esta clase aprenderás a deducir el rango de manos del oponente basándote en su comportamiento.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">📊 Componentes clave para la lectura</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Acción preflop: ¿subió, pagó, hizo check?</li>
            <li>Comportamiento en el flop, turn y river.</li>
            <li>Posición en la mesa: early, middle, late.</li>
            <li>Tamaño de las apuestas en cada calle.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🔎 Narrowing down el rango</h2>
          <p className="text-gray-300 mb-4">
            A medida que avanza la mano, deberías ir “descartando” manos poco probables y enfocarte en las más lógicas según el patrón de apuestas.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🎥 Ejemplo práctico</h2>
          <p className="text-gray-300 mb-4">
            Imagina que un rival sube preflop desde early, apuesta fuerte en el flop, hace check en el turn y check-call en el river. Esto puede indicar una mano como JJ-QQ en un board conectado.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">💡 Consejo final</h2>
          <p className="text-gray-300">
            Combina la lógica con la experiencia. Cuanto más observes, más precisa será tu lectura. La práctica constante afina esta habilidad crítica.
          </p>
        </div>
      </main>
    </div>
  );
}
