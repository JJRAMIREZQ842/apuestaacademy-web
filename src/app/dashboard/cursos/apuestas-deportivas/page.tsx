"use client";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export default function ApuestasDeportivasPage() {
  const deportes = [
    { slug: "futbol", nombre: "Fútbol" },
    { slug: "baloncesto", nombre: "Baloncesto" },
    { slug: "tenis", nombre: "Tenis" },
    // puedes agregar más deportes aquí
  ];

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6">⚽ Apuestas Deportivas</h1>
        <p className="text-gray-300 mb-6">
          Aprende a analizar estadísticas, cuotas, mercados y estrategias de apuesta en tus deportes favoritos.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deportes.map((d) => (
            <Link
              key={d.slug}
              href={`/dashboard/cursos/apuestas-deportivas/${d.slug}`}
              className="bg-gray-800 p-6 rounded-xl hover:shadow-yellow-400 transition"
            >
              <h2 className="text-xl font-semibold text-yellow-300">{d.nombre}</h2>
              <p className="text-sm text-gray-300">Ver módulo de {d.nombre.toLowerCase()}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
