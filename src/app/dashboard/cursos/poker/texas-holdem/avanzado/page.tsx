"use client";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export default function AvanzadoTexas() {
  const clases = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">🔴 Módulo Avanzado - Texas Hold'em</h1>
          <p className="text-gray-300 mb-6">
            Este módulo está diseñado para jugadores con experiencia que buscan perfeccionar sus habilidades, desarrollar lecturas avanzadas y competir en torneos de alto nivel.
          </p>

          <div className="space-y-4">
            {clases.map((num) => (
              <Link
                key={num}
                href={`/dashboard/cursos/poker/texas-holdem/avanzado/clase${num}`}
                className="block bg-gray-800 p-4 rounded border border-gray-600 hover:bg-gray-700 transition"
              >
                <span className="text-lg font-semibold text-yellow-300">Clase {num}</span>
                <p className="text-sm text-gray-400">Haz clic para ver el contenido de la clase.</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
