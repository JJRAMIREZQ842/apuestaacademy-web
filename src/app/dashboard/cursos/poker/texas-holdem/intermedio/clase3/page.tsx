"use client";
import Sidebar from "@/components/Sidebar";

export default function IntermedioClase3() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">♠️ Intermedio – Clase 3: Lectura de oponentes</h1>

          <p className="mb-4 text-gray-300">
            Entender el comportamiento de tus oponentes es clave para tomar decisiones acertadas en el póker. Esta clase explora cómo identificar patrones y rangos de manos.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🧠 Observación en la mesa</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Presta atención al estilo de juego: agresivo, pasivo, tight o loose.</li>
            <li>Observa cómo reaccionan ante diferentes tipos de apuestas.</li>
            <li>Analiza la frecuencia de faroles o apuestas por valor.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🔍 Rango de manos probables</h2>
          <p className="text-gray-300 mb-4">
            Basado en su posición, acción preflop y postflop, puedes estimar qué manos es probable que tengan tus oponentes.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🎯 Conclusión</h2>
          <p className="text-gray-300">
            La lectura de oponentes no es una ciencia exacta, pero mejora con la experiencia y la atención constante. Usa esta habilidad para tomar ventaja en cada mano.
          </p>
        </div>
      </main>
    </div>
  );
}

