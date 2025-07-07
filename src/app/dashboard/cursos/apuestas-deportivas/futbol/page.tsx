"use client";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export default function FutbolPage() {
  const modulos = [
    { slug: "principiante", nombre: "Principiante" },
    { slug: "intermedio", nombre: "Intermedio" },
    { slug: "avanzado", nombre: "Avanzado" },
  ];

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6">⚽ Módulo Fútbol</h1>
        <p className="text-gray-300 mb-6">
          Elige tu nivel de aprendizaje, desde fundamentos hasta análisis avanzados de cuotas y mercados.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modulos.map((m) => (
            <Link
              key={m.slug}
              href={`/dashboard/cursos/apuestas-deportivas/futbol/${m.slug}`}
              className="bg-gray-800 p-6 rounded-xl hover:shadow-yellow-400 transition"
            >
              <h2 className="text-xl font-semibold text-yellow-300">{m.nombre}</h2>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
