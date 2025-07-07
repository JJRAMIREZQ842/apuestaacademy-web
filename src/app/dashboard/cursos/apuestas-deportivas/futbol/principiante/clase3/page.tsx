"use client";
import Sidebar from "@/components/Sidebar";

export default function PrincipianteFutbolClase3() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">🎯 Clase 3: Tipos de Apuestas en Fútbol y Cuándo Usarlas</h1>

          <p className="text-gray-300 mb-4">
            No todas las apuestas son iguales. Conocer las distintas opciones y cuándo aplicarlas puede aumentar significativamente tus probabilidades de ganar.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">⚖️ Apuestas más comunes</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li><strong>1X2:</strong> Victoria local (1), empate (X) o visitante (2). Ideal cuando tienes clara la diferencia entre equipos.</li>
            <li><strong>Doble oportunidad:</strong> Apuesta a dos resultados posibles. Menor riesgo, menor cuota.</li>
            <li><strong>Apuestas Over/Under:</strong> Total de goles (ej. más de 2.5). Muy útil cuando hay tendencias ofensivas claras.</li>
            <li><strong>Ambos equipos marcan:</strong> Ideal cuando ambos tienen buenas ofensivas pero defensas débiles.</li>
            <li><strong>Resultado exacto:</strong> Más arriesgada pero muy rentable si dominas análisis.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🧠 Cuándo usar cada una</h2>
          <p className="text-gray-300 mb-4">
            Aprende a adaptar tu estrategia a cada partido. No apuestes siempre al mismo tipo. Por ejemplo:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li><strong>Over 2.5:</strong> si ambos equipos promedian +1.5 goles por partido.</li>
            <li><strong>1X:</strong> si el equipo local tiene buena racha invicta.</li>
            <li><strong>Ambos marcan:</strong> si los 2 marcan en el 70% de sus juegos.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">📉 Apuestas a evitar como principiante</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li><strong>Combinadas con muchas selecciones:</strong> atractivas pero riesgosas.</li>
            <li><strong>Apuestas en vivo sin plan:</strong> fáciles de dejarse llevar por la emoción.</li>
            <li><strong>Apostar al favorito siempre:</strong> muchas veces no hay valor en la cuota.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">✅ Conclusión</h2>
          <p className="text-gray-300">
            Seleccionar el tipo de apuesta correcto según el contexto del partido y tu análisis es clave para tener rentabilidad a largo plazo.
          </p>
        </div>
      </main>
    </div>
  );
}
