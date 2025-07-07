"use client";

import { useProgresoStore } from "@/store/progreso";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function ProgresoPage() {
  const { apuestas, reiniciar } = useProgresoStore();
  const [filtroTipo, setFiltroTipo] = useState<"Todas" | "Texto" | "Captura">("Todas");

  const apuestasFiltradas = apuestas
    .filter((a) => (filtroTipo === "Todas" ? true : a.tipo === filtroTipo))
    .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());

  const agrupadas = apuestasFiltradas.reduce((acc, apuesta) => {
    (acc[apuesta.fecha] = acc[apuesta.fecha] || []).push(apuesta);
    return acc;
  }, {} as Record<string, typeof apuestas>);

  const total = apuestas.reduce(
    (sum, a) => sum + (a.resultado === "ganada" ? a.monto : -a.monto),
    0
  );
  const ganadas = apuestas.filter((a) => a.resultado === "ganada").length;
  const porcentaje = apuestas.length
    ? Math.round((ganadas / apuestas.length) * 100)
    : 0;

  return (
    <div className="min-h-screen flex">
      <Sidebar />

      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-yellow-400">📊 Progreso</h1>
          <button
            onClick={reiniciar}
            className="px-4 py-2 bg-red-600 rounded hover:bg-red-500"
          >
            Limpiar historial
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 p-4 rounded text-center">
            <p className="text-sm text-gray-400">Total acumulado</p>
            <p className={`text-2xl font-bold ${total >= 0 ? "text-green-400" : "text-red-400"}`}>
              ${total}
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded text-center">
            <p className="text-sm text-gray-400">Apuestas ganadas</p>
            <p className="text-2xl font-bold text-green-400">{ganadas}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded text-center">
            <p className="text-sm text-gray-400">Porcentaje de éxito</p>
            <p className="text-2xl font-bold text-yellow-400">{porcentaje}%</p>
          </div>
        </div>

        <div className="mb-4">
          <label className="text-sm text-gray-400 mr-2">Filtrar por tipo:</label>
          <select
            className="bg-gray-800 text-white p-2 rounded"
            value={filtroTipo}
            onChange={(e) => setFiltroTipo(e.target.value as any)}
          >
            <option value="Todas">Todas</option>
            <option value="Texto">Texto</option>
            <option value="Captura">Captura</option>
          </select>
        </div>

        <div className="bg-gray-900 p-4 rounded">
          <h2 className="text-xl font-semibold mb-4">Historial de apuestas</h2>

          {apuestasFiltradas.length === 0 ? (
            <p className="text-gray-400">No hay registros aún.</p>
          ) : (
            Object.entries(agrupadas).map(([fecha, lista]) => (
              <div key={fecha} className="mb-6">
                <h3 className="text-yellow-400 font-bold text-lg mb-2">{fecha}</h3>
                <table className="w-full text-sm mb-4">
                  <thead>
                    <tr className="text-gray-400 border-b border-gray-700">
                      <th className="p-2 text-left">Tipo</th>
                      <th className="p-2 text-left">Resultado</th>
                      <th className="p-2 text-left">Monto</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lista.map((a, i) => (
                      <tr key={i} className="border-b border-gray-800">
                        <td className="p-2">{a.tipo}</td>
                        <td className={`p-2 ${a.resultado === "ganada" ? "text-green-400" : "text-red-400"}`}>
                          {a.resultado}
                        </td>
                        <td className="p-2">${a.monto}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
