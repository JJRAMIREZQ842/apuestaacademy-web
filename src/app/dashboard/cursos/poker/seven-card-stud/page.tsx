"use client";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export default function SevenCardPage() {
  const modulos = ["principiante", "intermedio", "avanzado"];

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6">♠️ Seven Card Stud</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modulos.map((m) => (
            <Link
              key={m}
              href={`/dashboard/cursos/poker/seven-card/${m}`}
              className="bg-gray-800 p-6 rounded-xl hover:shadow-yellow-400 transition"
            >
              <h2 className="text-xl font-semibold text-yellow-300 capitalize">{m}</h2>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
