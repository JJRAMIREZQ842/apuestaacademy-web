"use client";
import Sidebar from "@/components/Sidebar";

export default function PrincipianteFutbolClase1() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">🔰 Clase 1: Tipos de Apuestas en Fútbol</h1>

          <p className="text-gray-300 mb-4">
            En esta clase conocerás los tipos de apuestas más comunes en fútbol y cómo elegir la que te dé mayor rentabilidad.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🎯 Cuotas y probabilidades</h2>
          <p className="text-gray-300 mb-4">
            Las cuotas reflejan la probabilidad implícita de un evento. Para calcularla:
          </p>
          <p className="text-gray-300 mb-4">
            <code className="bg-gray-800 p-1 rounded">Prob = 1 / cuota</code>
          </p>
          <p className="text-gray-300 mb-4">
            Ejemplo: cuota 2.50 → prob = 0.4 (40%). Si apuestas $100 y ganas, obtienes $250 ($150 netos).
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">📌 Tipos de apuesta básicas</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li><strong>Apuesta a ganador:</strong> el resultado directo (victoria, empate o derrota).</li>
            <li><strong>Más/Menos goles:</strong> apostando si habrá más o menos de X goles.</li>
            <li><strong>Doble oportunidad:</strong> cubres dos de tres resultados posibles.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🏆 Cómo elegir sabiamente</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Compara cuotas: busca value, cuotas más altas que tu cálculo de probabilidad.</li>
            <li>Especialízate: empieza con un tipo (ej. ganadores) y domina estadísticas asociadas.</li>
            <li>Evita apuestas impulsivas: concéntrate en ligas o equipos que conoces bien.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">📈 Conclusión</h2>
          <p className="text-gray-300">
            Dominar los tipos de apuestas y comprender las cuotas es tu base para generar ganancias consistentes. En la próxima clase analizaremos cómo leer estadísticas clave.
          </p>
        </div>
      </main>
    </div>
  );
}
