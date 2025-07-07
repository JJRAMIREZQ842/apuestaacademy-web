"use client";
import Sidebar from "@/components/Sidebar";

export default function AvanzadoClase8() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">🎓 Clase 8: Preparación para torneos de alto nivel</h1>

          <p className="text-gray-300 mb-4">
            En esta última clase del módulo avanzado aprenderás cómo prepararte para competir en torneos profesionales, desde la parte técnica hasta la mental y logística.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🧩 Aspectos técnicos</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Domina los rangos por stack size y posición.</li>
            <li>Estudia ICM y situaciones de burbuja.</li>
            <li>Practica con simuladores como ICMIZER y PioSolver.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🧠 Preparación mental</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Trabaja la gestión emocional ante bad beats.</li>
            <li>Establece rutinas de enfoque y descanso.</li>
            <li>Mantén una mentalidad de largo plazo.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">📋 Logística y planificación</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Elige torneos adecuados a tu banca.</li>
            <li>Prepárate físicamente (hidratación, comida, sueño).</li>
            <li>Planifica breaks y tiempos muertos.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🏁 Conclusión</h2>
          <p className="text-gray-300">
            La preparación profesional requiere compromiso integral. Con entrenamiento constante y estrategia clara, puedes dar el salto a competir con la élite del poker mundial.
          </p>
        </div>
      </main>
    </div>
  );
}

