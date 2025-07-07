"use client";
import Sidebar from "@/components/Sidebar";

export default function PrincipianteFutbolClase2() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">📊 Clase 2: Análisis Estadístico para Apostar en Fútbol</h1>

          <p className="text-gray-300 mb-4">
            Para tomar decisiones inteligentes al apostar, necesitas entender e interpretar estadísticas clave que afectan el resultado de un partido.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">📌 Estadísticas más relevantes</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li><strong>Rendimiento local/visitante:</strong> algunos equipos rinden muy diferente según la localía.</li>
            <li><strong>Goles anotados y recibidos:</strong> evalúa promedios por partido.</li>
            <li><strong>Estado de forma:</strong> últimos 5 partidos, forma ofensiva y defensiva.</li>
            <li><strong>Historial de enfrentamientos:</strong> algunos equipos tienen dominancia psicológica sobre otros.</li>
            <li><strong>Bajas por lesión o sanción:</strong> afectan directamente el rendimiento del equipo.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">📊 Dónde consultar estadísticas</h2>
          <p className="text-gray-300 mb-4">
            Utiliza plataformas como SofaScore, WhoScored, FlashScore o estadísticas integradas en casas de apuestas. Evalúa tendencias, promedios y rendimiento individual.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🎯 Cómo aplicar el análisis</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Combina estadísticas recientes con el contexto (clima, rivalidad, motivación).</li>
            <li>Haz tu propia "línea justa" (probabilidad real) antes de mirar cuotas.</li>
            <li>Elimina sesgos emocionales, confía en datos.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🚀 Consejo</h2>
          <p className="text-gray-300">
            Lleva un registro de tus apuestas y las estadísticas consideradas. Así irás ajustando tu análisis con el tiempo.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">📈 Conclusión</h2>
          <p className="text-gray-300">
            El análisis estadístico reduce la incertidumbre. Es tu herramienta más valiosa para generar apuestas inteligentes y sostenibles.
          </p>
        </div>
      </main>
    </div>
  );
}
