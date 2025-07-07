"use client";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";

const variantes = [
  { name: "Texas Hold'em", slug: "texas-holdem" },
  { name: "Omaha", slug: "omaha" },
  { name: "Seven‑Card Stud", slug: "seven-card-stud" },
];

export default function PokerPage() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6">🎲 Póker: Variantes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {variantes.map(({ name, slug }) => (
            <Link href={`/dashboard/cursos/poker/${slug}`} key={slug}>
              <div className="cursor-pointer bg-gray-800 p-6 rounded-xl border border-gray-700 hover:shadow-yellow-400 shadow-md transition">
                <h3 className="text-lg font-semibold text-yellow-300">{name}</h3>
                <p className="text-sm text-gray-300 mt-2">
                  Aprende {name}, desde lo básico hasta estrategias avanzadas.
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
