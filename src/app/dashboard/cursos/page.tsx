"use client";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";

const cursos = [
  { titulo: "Apuestas Deportivas", slug: "apuestas-deportivas" },
  { titulo: "Póker", slug: "poker" },
  { titulo: "Casino", slug: "casino" },
  { titulo: "Criptoapuestas", slug: "criptoapuestas" },
  { titulo: "Esports", slug: "esports" },
  { titulo: "Psicología", slug: "psicologia" },
  { titulo: "Arbitraje", slug: "arbitraje" },
  { titulo: "IA para Pronósticos", slug: "ia" },
];

export default function CursosPage() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />

      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6">📚 Catálogo de Cursos</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cursos.map(({ titulo, slug }) => (
            <div
              key={slug}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-md hover:shadow-yellow-400"
            >
              <h3 className="text-lg font-semibold text-yellow-300 mb-2">{titulo}</h3>
              <p className="text-sm text-gray-300">
                Curso introductorio y avanzado sobre {titulo.toLowerCase()}.
              </p>
              <Link href={`/dashboard/cursos/${slug}`}>
                <button className="mt-4 px-4 py-2 border border-yellow-300 text-yellow-300 rounded hover:bg-yellow-400 hover:text-black transition text-sm">
                  Ver contenido
                </button>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
