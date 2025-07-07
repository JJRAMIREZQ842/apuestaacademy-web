// /app/dashboard/cursos/poker/texas-holdem/intermedio/clase7/page.tsx
"use client";
import Sidebar from "@/components/Sidebar";

export default function IntermedioClase7() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">💰 Clase 7: Gestión de banca – Clave para la supervivencia</h1>

          <p className="text-gray-300 mb-4">
            La gestión de banca es tan importante como las habilidades técnicas en el póker. Puedes ser el mejor jugador, pero si no gestionas tu dinero correctamente, puedes quedarte fuera del juego.
          </p>

          <h2 className="text-2xl text-yellow-300 font-semibold mt-6 mb-2">📌 ¿Qué es la gestión de banca?</h2>
          <p className="text-gray-300 mb-4">
            Es el proceso de controlar cuánto dinero estás dispuesto a arriesgar según tu bankroll total (el dinero que tienes destinado exclusivamente para jugar).
          </p>

          <h2 className="text-2xl text-yellow-300 font-semibold mt-6 mb-2">💡 Reglas básicas</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Juega dentro de tus límites: nunca pongas en juego más del 5% de tu banca en una sola sesión.</li>
            <li>Evita el tilt: mantener tu mentalidad ayuda a no tomar decisiones impulsivas con tu dinero.</li>
            <li>Haz seguimiento de tu progreso: registra tus ganancias y pérdidas para ajustar tu estrategia.</li>
          </ul>

          <h2 className="text-2xl text-yellow-300 font-semibold mt-6 mb-2">📊 Ejemplo práctico</h2>
          <p className="text-gray-300 mb-4">
            Si tienes $500 de banca, lo ideal es no jugar en mesas donde una entrada supere los $25. Esto te da espacio para errores y reduces el riesgo de bancarrota.
          </p>

          <h2 className="text-2xl text-yellow-300 font-semibold mt-6 mb-2">🚨 Errores comunes</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Subir de nivel demasiado rápido.</li>
            <li>Jugar en tilt tras una mala racha.</li>
            <li>No separar fondos personales de la banca de póker.</li>
          </ul>

          <h2 className="text-2xl text-yellow-300 font-semibold mt-6 mb-2">✅ Conclusión</h2>
          <p className="text-gray-300">
            La gestión de banca te mantiene en el juego a largo plazo. Con disciplina y control, aseguras tu presencia en las mesas mientras desarrollas tu habilidad como jugador.
          </p>
        </div>
      </main>
    </div>
  );
}
