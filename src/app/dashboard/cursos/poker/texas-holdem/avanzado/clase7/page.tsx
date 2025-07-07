"use client";
import Sidebar from "@/components/Sidebar";

export default function AvanzadoClase7() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">⚔️ Clase 7: Exploit vs. GTO</h1>

          <p className="text-gray-300 mb-4">
            En esta clase aprenderás la diferencia entre dos enfoques estratégicos fundamentales en el poker moderno: el juego explotador (exploit) y el juego óptimo teórico (GTO).
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🔍 ¿Qué es GTO?</h2>
          <p className="text-gray-300 mb-4">
            GTO (Game Theory Optimal) es una estrategia que busca ser inexpugnable. Jugar GTO significa tomar decisiones que no pueden ser explotadas por ningún rival, sin importar lo que haga.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🎯 ¿Qué es Exploit?</h2>
          <p className="text-gray-300 mb-4">
            Exploit es una estrategia adaptativa que explota los errores del rival. Se enfoca en maximizar ganancias al detectar y castigar patrones débiles o previsibles del oponente.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">📈 ¿Cuándo usar cada una?</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Usa GTO contra oponentes fuertes o desconocidos.</li>
            <li>Usa exploit contra jugadores con tendencias claras.</li>
            <li>El poker de élite combina ambos enfoques de forma dinámica.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🧠 Ejemplo práctico</h2>
          <p className="text-gray-300 mb-4">
            Si detectas que un rival foldea demasiado a 3-bets, puedes hacer 3-bets más frecuentes con manos marginales. Esta es una decisión explotadora basada en su error.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🔚 Conclusión</h2>
          <p className="text-gray-300">
            Entender cuándo balancear entre GTO y exploit es clave en juegos de alto nivel. Los mejores jugadores ajustan constantemente su estilo según el rival y la situación.
          </p>
        </div>
      </main>
    </div>
  );
}
