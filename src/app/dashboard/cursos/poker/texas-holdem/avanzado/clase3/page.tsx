"use client";
import Sidebar from "@/components/Sidebar";

export default function AvanzadoClase3() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">🧠 Clase 3: Lectura de Manos Avanzada</h1>

          <p className="text-gray-300 mb-4">
            Esta clase profundiza en la lectura de manos, una habilidad fundamental para anticipar el rango de tu oponente y tomar mejores decisiones.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🔍 ¿Qué es la lectura de manos?</h2>
          <p className="text-gray-300 mb-4">
            Es el proceso de deducir qué manos puede tener tu rival en base a su comportamiento durante una mano, el tipo de jugador que es y las cartas comunitarias.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">📊 Factores clave</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Acción preflop (¿pagó, subió, resubió?).</li>
            <li>Apuestas en cada calle (frecuencia y tamaño).</li>
            <li>Posición en la mesa.</li>
            <li>Estilo de jugador (tight, loose, agresivo, pasivo).</li>
            <li>Timing tells (cuánto tarda en actuar).</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🧠 Cómo acotar rangos</h2>
          <p className="text-gray-300 mb-4">
            A medida que avanza la mano, puedes descartar manos que no encajan con su línea. El objetivo es reducir su rango a pocas combinaciones plausibles.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🎯 Conclusión</h2>
          <p className="text-gray-300">
            La lectura de manos es más arte que ciencia. Requiere experiencia, análisis constante y capacidad para adaptarse a cada oponente. ¡Sigue practicando!
          </p>
        </div>
      </main>
    </div>
  );
}
