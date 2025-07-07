"use client";
import Sidebar from "@/components/Sidebar";

export default function IntermedioClase2() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">♠️ Intermedio – Clase 2: Posición en la mesa</h1>

          <p className="mb-4 text-gray-300">
            La posición en la mesa es uno de los factores más determinantes en el Texas Hold'em. Jugar con posición te da ventaja estratégica sobre tus oponentes.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🔄 Tipos de posiciones</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li><strong>Early Position (EP):</strong> Son los primeros en actuar. Debes jugar manos fuertes.</li>
            <li><strong>Middle Position (MP):</strong> Puedes ampliar un poco el rango de manos.</li>
            <li><strong>Late Position (LP):</strong> Tienes la ventaja de ver lo que hacen los demás antes de actuar.</li>
            <li><strong>Blinds:</strong> Posiciones forzadas, debes ser cauteloso.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">📈 Ventajas de jugar en posición</h2>
          <p className="text-gray-300 mb-4">
            Puedes controlar el tamaño del bote, hacer faroles con más eficacia y tener más información antes de decidir.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">✅ Conclusión</h2>
          <p className="text-gray-300">
            Aprende a identificar tu posición en cada mano y ajusta tu estrategia. La posición es poder en el póker.
          </p>
        </div>
      </main>
    </div>
  );
}
