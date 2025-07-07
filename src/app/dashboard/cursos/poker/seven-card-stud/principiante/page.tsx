"use client";
import Sidebar from "@/components/Sidebar";

export default function SevenCardPrincipiantePage() {
  const clases = [
    "1. ¿Qué es el Seven Card Stud?",
    "2. Cómo se reparten las cartas",
    "3. Rondas de apuestas",
    "4. Valor de manos",
    "5. Cuándo retirarse o continuar",
    "6. Control de bankroll",
    "7. Jugadas fuertes",
    "8. Consejos para principiantes"
  ];

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6">♠️ Seven Card Stud - Nivel Principiante</h1>
        <ul className="space-y-4">
          {clases.map((titulo, i) => (
            <li
              key={i}
              className="bg-gray-800 p-4 rounded-xl border border-gray-700 hover:shadow-yellow-400 transition"
            >
              <p className="text-lg text-yellow-300">{titulo}</p>
              <p className="text-sm text-gray-300">Haz clic para ver la clase (pendiente de implementar).</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
