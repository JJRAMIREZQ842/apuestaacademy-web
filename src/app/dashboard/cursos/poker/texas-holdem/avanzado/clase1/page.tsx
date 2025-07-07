"use client";
import Sidebar from "@/components/Sidebar";

export default function AvanzadoClase1() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">🎯 Avanzado – Clase 1: Rangos balanceados y polarizados</h1>

          <p className="text-gray-300 mb-4">
            En este nivel analizarás cómo construir rangos que incluyen tanto manos fuertes como faroles, haciéndolos difíciles de leer y explotables.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🧩 Rangos balanceados</h2>
          <p className="text-gray-300 mb-4">
            Los rangos balanceados mezclan valor y faroles en proporciones razonables para no ser predecibles.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">⚖️ Rangos polarizados</h2>
          <p className="text-gray-300 mb-4">
            Aquí se usan solo manos muy fuertes o faroles, omitiendo manos marginales. Ideal en situaciones específicas (e.g., pot grande vs agresión).
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🎯 Aplicación práctica</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Estrategia de apuesta en flop texturizados.</li>
            <li>Uso de bloqueadores antes del river.</li>
            <li>Evitar predictibilidad en decisiones clave.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">📌 Resumen</h2>
          <p className="text-gray-300">
            Dominar la construcción de rangos balanceados y polarizados te permite controlar la percepción del rival y maximizar tu EV.
          </p>
        </div>
      </main>
    </div>
  );
}
