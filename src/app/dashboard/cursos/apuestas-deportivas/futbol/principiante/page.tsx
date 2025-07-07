"use client";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export default function FutbolPrincipiante() {
  const clases = [1, 2, 3];

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6">📘 Principiante – Fútbol</h1>
        <p className="text-gray-300 mb-6">
          Aprende desde cero: tipos de apuesta, cómo leer cuotas y cómo generar tus primeras ganancias moderadas.
        </p>
        <div className="space-y-4">
          {clases.map(num => (
            <Link
              key={num}
              href={`/dashboard/cursos/apuestas-deportivas/futbol/principiante/clase${num}`}
              className="block bg-gray-800 p-4 rounded border border-gray-600 hover:bg-gray-700 transition"
            >
              <span className="text-lg font-semibold text-yellow-300">Clase {num}</span>
              <p className="text-sm text-gray-400">Ver contenido completo de la clase</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
