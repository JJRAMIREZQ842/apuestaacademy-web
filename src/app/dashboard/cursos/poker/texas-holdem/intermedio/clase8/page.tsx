// /app/dashboard/cursos/poker/texas-holdem/intermedio/clase8/page.tsx
"use client";
import Sidebar from "@/components/Sidebar";

export default function IntermedioClase8() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">🧠 Clase 8: Herramientas de análisis y mejora</h1>

          <p className="text-gray-300 mb-4">
            En esta clase aprenderás a usar software y recursos que te permiten analizar tus partidas, detectar errores y mejorar tus habilidades estratégicas en Texas Hold'em.
          </p>

          <h2 className="text-2xl text-yellow-300 font-semibold mt-6 mb-2">📊 Software de análisis</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li><strong>PokerTracker / Holdem Manager:</strong> Analizan tus estadísticas y las de tus oponentes. Muy útiles para torneos y cash games online.</li>
            <li><strong>Equilab:</strong> Calculadora de equity gratuita, ideal para aprender sobre rangos y probabilidades.</li>
            <li><strong>GTO+ / PioSolver:</strong> Herramientas avanzadas para estudiar el juego óptimo basado en teoría del juego (GTO).</li>
          </ul>

          <h2 className="text-2xl text-yellow-300 font-semibold mt-6 mb-2">📚 Revisión de manos</h2>
          <p className="text-gray-300 mb-4">
            Guardar tus manos importantes y revisarlas después te permite entender qué decisiones fueron correctas y cuáles no. Puedes discutirlas en foros o con un mentor.
          </p>

          <h2 className="text-2xl text-yellow-300 font-semibold mt-6 mb-2">👥 Comunidades de estudio</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Discords y grupos privados de póker.</li>
            <li>Foros como TwoPlusTwo o Reddit en /r/poker.</li>
            <li>Clases en vivo o coachings grupales.</li>
          </ul>

          <h2 className="text-2xl text-yellow-300 font-semibold mt-6 mb-2">📈 Conclusión</h2>
          <p className="text-gray-300">
            La mejora continua es lo que separa a los jugadores promedio de los verdaderamente exitosos. Aprovecha las herramientas y mantén una mentalidad de crecimiento constante.
          </p>
        </div>
      </main>
    </div>
  );
}
