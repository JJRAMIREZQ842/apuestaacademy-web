"use client";
import Sidebar from "@/components/Sidebar";

export default function IntermedioClase5() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">♠️ Intermedio – Clase 5: Juego en el turn</h1>

          <p className="mb-4 text-gray-300">
            El turn es la cuarta carta comunitaria y una de las calles más importantes del juego. Aquí es donde muchos pozos se definen y las decisiones se vuelven más costosas.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">📌 Importancia del turn</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>La mayoría de las manos se retiran aquí si no han mejorado.</li>
            <li>Es donde debes reevaluar tu mano con base en nuevas cartas y acciones del rival.</li>
            <li>Una buena lectura del oponente puede darte la ventaja en este punto clave.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">💡 Estrategia</h2>
          <p className="text-gray-300 mb-4">
            Si tu mano mejora (ej. completar color o escalera), juega agresivamente. Si no, evalúa si vale la pena continuar, hacer check o incluso un farol basado en tu lectura.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🎯 Conclusión</h2>
          <p className="text-gray-300">
            El turn es decisivo. Dominarlo te hará perder menos con manos mediocres y ganar más con manos fuertes o faroles efectivos.
          </p>
        </div>
      </main>
    </div>
  );
}
