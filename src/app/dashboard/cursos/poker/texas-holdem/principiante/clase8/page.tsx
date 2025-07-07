"use client";
import Sidebar from "@/components/Sidebar";

export default function Clase8() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">🧠 Clase 8: Estrategia básica de Texas Hold'em</h1>

          <p className="mb-4 text-gray-300">
            En esta clase aprenderás conceptos básicos de estrategia para comenzar a tomar decisiones inteligentes en la mesa de juego.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🎯 Selección de manos iniciales</h2>
          <p className="text-gray-300 mb-4">
            No todas las manos son buenas para jugar. En general, juega manos fuertes como pares altos, cartas altas conectadas y suited.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">⚖️ Jugar según tu posición</h2>
          <p className="text-gray-300 mb-4">
            En posición puedes jugar más manos, fuera de posición debes ser más selectivo. Usa esto a tu favor.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">💰 Gestión de banca</h2>
          <p className="text-gray-300 mb-4">
            No arriesgues más de lo que puedes perder. La gestión de tu dinero es clave para ser un jugador rentable a largo plazo.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🔍 Observa a tus oponentes</h2>
          <p className="text-gray-300 mb-4">
            Fíjate en cómo juegan los demás. ¿Juegan muchas manos? ¿Son agresivos? Ajusta tu juego en consecuencia.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">📌 Resumen</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Juega manos fuertes y sé selectivo.</li>
            <li>Usa tu posición para tener ventaja.</li>
            <li>Cuida tu banca, no te arriesgues de más.</li>
            <li>Observa y adáptate a tus rivales.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🎓 Conclusión del módulo</h2>
          <p className="text-gray-300">
            ¡Felicidades! Has completado el módulo principiante de Texas Hold'em. Ya conoces los fundamentos y puedes comenzar a poner en práctica tus habilidades. El siguiente paso es el módulo intermedio, donde profundizaremos en la estrategia.
          </p>
        </div>
      </main>
    </div>
  );
}
