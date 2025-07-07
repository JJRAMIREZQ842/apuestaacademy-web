import Link from "next/link";

const Sidebar = () => (
  <aside className="w-64 bg-gray-900 text-yellow-300 p-6 space-y-6 hidden md:block h-screen sticky top-0">
    <h2 className="text-2xl font-bold">🎓 ApuestaAcademy</h2>
    <nav className="flex flex-col gap-4 text-sm">
      <Link href="/dashboard"><span className="hover:text-yellow-500">🏠 Inicio</span></Link>
      <Link href="/dashboard/cursos"><span className="hover:text-yellow-500">📚 Cursos</span></Link>
      <Link href="/dashboard/coach"><span className="hover:text-yellow-500">🧠 Coach IA</span></Link>
      <Link href="/dashboard/progreso"><span className="hover:text-yellow-500">📈 Progreso</span></Link>
      <Link href="/dashboard/configuracion"><span className="hover:text-yellow-500">⚙️ Configuración</span></Link>
    </nav>
  </aside>
);

export default function Home() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6">📚 Tus Cursos Activos</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Apuestas Deportivas",
              desc: "Desde cuotas hasta modelos estadísticos",
              color: "bg-gradient-to-r from-blue-800 to-blue-600",
            },
            {
              title: "Póker Estratégico",
              desc: "Lectura de manos y estrategia avanzada",
              color: "bg-gradient-to-r from-pink-700 to-pink-500",
            },
            {
              title: "Criptoapuestas",
              desc: "Blockchain, DeFi y gestión de riesgo",
              color: "bg-gradient-to-r from-amber-600 to-yellow-500",
            },
            {
              title: "Psicología del Jugador",
              desc: "Control emocional y toma de decisiones",
              color: "bg-gradient-to-r from-purple-800 to-purple-600",
            },
            {
              title: "Arbitraje Legal",
              desc: "Oportunidades sin riesgo entre casas",
              color: "bg-gradient-to-r from-green-700 to-green-500",
            },
            {
              title: "IA para Pronósticos",
              desc: "Modelos predictivos avanzados",
              color: "bg-gradient-to-r from-slate-700 to-gray-600",
            },
          ].map(({ title, desc, color }) => (
            <div
              key={title}
              className={`rounded-xl p-5 shadow-lg border border-gray-700 text-white ${color}`}
            >
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-200">{desc}</p>
              <button className="mt-4 px-4 py-2 bg-black bg-opacity-30 border border-white rounded hover:bg-opacity-50 text-sm">
                Continuar curso
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
} 
