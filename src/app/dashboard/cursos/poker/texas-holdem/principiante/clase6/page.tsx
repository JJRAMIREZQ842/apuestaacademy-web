"use client";
import Sidebar from "@/components/Sidebar";

export default function Clase6() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">🂡 Clase 6: Tipos de manos iniciales</h1>

          <p className="mb-4 text-gray-300">
            Las cartas que recibes al inicio (hole cards) determinan muchas veces si deberías jugar una mano o no. Aquí aprenderás a reconocer manos fuertes, medias y débiles.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">💪 Manos fuertes (premium)</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>AA (par de ases)</li>
            <li>KK, QQ, JJ</li>
            <li>AK suited o no suited</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🧩 Manos medias</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>AJ, KQ, AT</li>
            <li>Conectores suited como 98s, 76s</li>
            <li>Pares medios (88, 77, 66...)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">⚠️ Manos débiles</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Cartas desconectadas y bajas como 93o, J2</li>
            <li>Manos con gran diferencia de valor (K4, Q7)</li>
            <li>Cartas del mismo color pero sin conexión</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🎯 Conclusión</h2>
          <p className="text-gray-300">
            Saber cuáles manos jugar y cuáles evitar te hará perder menos fichas y ganar más a largo plazo. No todas las manos merecen ser jugadas, incluso en posición.
          </p>
        </div>
      </main>
    </div>
  );
}
