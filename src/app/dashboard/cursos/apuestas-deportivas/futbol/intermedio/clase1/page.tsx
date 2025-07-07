// pages/dashboard/cursos/apuestas-deportivas/futbol/intermedio/clase1/page.tsx
"use client";
import Sidebar from "@/components/Sidebar";

export default function Clase1IntermedioFutbol() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">⚽ Clase 1: Análisis Estadístico y Valor en las Cuotas</h1>

          <p className="mb-4 text-gray-300">
            Para mejorar tus resultados en apuestas deportivas, es fundamental que aprendas a identificar valor en las cuotas que ofrecen las casas de apuestas. Esta clase profundiza en cómo usar estadísticas y herramientas para encontrar ese valor.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">📊 ¿Qué es el Valor en las Apuestas?</h2>
          <p className="text-gray-300 mb-4">
            Una apuesta tiene valor cuando la probabilidad que tú estimas es mayor que la que la casa de apuestas refleja en su cuota. Por ejemplo, si crees que un equipo tiene un 60% de ganar y la cuota sugiere solo un 40%, hay valor.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">📈 Uso de Estadísticas</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Revisa los últimos 5 a 10 partidos de cada equipo.</li>
            <li>Evalúa goles marcados y recibidos, posesión, tiros a puerta, etc.</li>
            <li>Consulta enfrentamientos directos (head-to-head).</li>
            <li>Ten en cuenta bajas importantes y el calendario de los próximos partidos.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🧮 Herramientas para Apostadores</h2>
          <p className="text-gray-300 mb-4">
            Puedes apoyarte en plataformas como:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><strong>FlashScore:</strong> estadísticas en tiempo real y resultados.</li>
            <li><strong>SofaScore:</strong> datos detallados por jugador y equipo.</li>
            <li><strong>OddsPortal:</strong> comparación de cuotas y movimientos.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">💡 Conclusión</h2>
          <p className="text-gray-300">
            Apostar sin analizar estadísticas es como jugar a ciegas. Aprovecha el poder de los datos y toma decisiones informadas para maximizar tus posibilidades de obtener beneficios constantes.
          </p>
        </div>
      </main>
    </div>
  );
}
