"use client";
import Sidebar from "@/components/Sidebar";

export default function AvanzadoClase6() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">🛡️ Clase 6: Lectura de Rango y Bloqueadores</h1>

          <p className="text-gray-300 mb-4">
            En niveles avanzados, la capacidad de entender rangos completos y cómo tus cartas influyen en ellos es fundamental. Aquí exploramos el concepto de bloqueadores y su aplicación en jugadas complejas.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🔐 ¿Qué son los bloqueadores?</h2>
          <p className="text-gray-300 mb-4">
            Un bloqueador es una carta en tu mano que reduce la probabilidad de que el oponente tenga una combinación específica. Por ejemplo, si tienes un As, reduces las chances de que el rival tenga AA.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">📊 Aplicación en lectura de rango</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Jugar faroles con bloqueadores a la nuts.</li>
            <li>Evitar farolear cuando no bloqueas manos fuertes.</li>
            <li>Usar tus bloqueadores para inducir errores del rival.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🧠 Ejemplo técnico</h2>
          <p className="text-gray-300 mb-4">
            Supón que tienes A♠ Q♣ y el board es K♠ J♠ 5♦ 7♠ 2♥. Tu As de espadas bloquea el color máximo, lo que puede permitirte convertir tu mano en un farol efectivo representando la nuts.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🎯 Conclusión</h2>
          <p className="text-gray-300">
            Entender bloqueadores y cómo afectan la percepción de rangos es esencial para dominar el juego en niveles altos. Esta habilidad permite hacer jugadas audaces con lógica detrás.
          </p>
        </div>
      </main>
    </div>
  );
}
