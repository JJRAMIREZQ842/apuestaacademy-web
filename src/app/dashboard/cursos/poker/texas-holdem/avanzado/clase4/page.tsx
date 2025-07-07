"use client";
import Sidebar from "@/components/Sidebar";

export default function AvanzadoClase4() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">🎯 Clase 4: Explotación de Tendencias del Rival</h1>

          <p className="text-gray-300 mb-4">
            Para alcanzar un nivel avanzado en Texas Hold'em, necesitas detectar y explotar patrones en el juego de tus oponentes. Esta clase te mostrará cómo hacerlo de manera efectiva.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🧩 Identifica patrones comunes</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Jugadores que siempre apuestan fuerte con buenas manos.</li>
            <li>Rivales que bluffean demasiado en el river.</li>
            <li>Oponentes que hacen check-call con manos medias.</li>
            <li>Maniáticos (jugadores ultra agresivos que apuestan sin lógica).</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🧠 Ajustes estratégicos</h2>
          <p className="text-gray-300 mb-4">
            Una vez detectadas tendencias, haz ajustes. Por ejemplo, si un jugador bluffea mucho, amplía tus rangos de call. Si un jugador solo sube con manos fuertes, foldea más.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">⚖️ Juego balanceado vs explotador</h2>
          <p className="text-gray-300 mb-4">
            Un juego balanceado es óptimo contra jugadores fuertes. Pero contra rivales débiles, un estilo explotador puede maximizar tu ventaja. Aprende cuándo usar cada uno.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">📌 Conclusión</h2>
          <p className="text-gray-300">
            Detectar debilidades y explotarlas te convierte en un jugador temido. La clave está en la observación constante y los ajustes dinámicos.
          </p>
        </div>
      </main>
    </div>
  );
}
