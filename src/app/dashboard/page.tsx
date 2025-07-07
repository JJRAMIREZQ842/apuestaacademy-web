"use client";

import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export default function DashboardInicio() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />

      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">🎓 Bienvenido a ApuestaAcademy</h1>

        <section className="mb-8 bg-gray-900 p-6 rounded-xl border border-yellow-500">
          <h2 className="text-2xl font-semibold mb-4">¿Qué aprenderás aquí?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>📈 Estrategias para apuestas deportivas y de casino.</li>
            <li>🧠 Análisis con inteligencia artificial de tus decisiones.</li>
            <li>💸 Gestión de bankroll y control emocional.</li>
            <li>⚙️ Métodos profesionales y técnicas avanzadas.</li>
          </ul>
        </section>

        <section className="mb-8 bg-gray-900 p-6 rounded-xl border border-yellow-500">
          <h2 className="text-2xl font-semibold mb-4">Ventajas de usar ApuestaAcademy</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>✅ Plataforma 100% online y accesible desde cualquier dispositivo.</li>
            <li>✅ Contenido actualizado por expertos en apuestas.</li>
            <li>✅ Asistencia IA para mejorar tus decisiones en tiempo real.</li>
            <li>✅ Seguimiento de tu progreso y rendimiento.</li>
          </ul>
        </section>

        <section className="mb-12 bg-gray-900 p-6 rounded-xl border border-yellow-500">
          <h2 className="text-2xl font-semibold mb-4">¿Cómo funciona?</h2>
          <p className="text-gray-300 mb-2">
            Simplemente accede a nuestros cursos para aprender lo fundamental y luego usa el
            <span className="text-yellow-400 font-semibold"> Coach IA</span> para evaluar tus apuestas.
            Además, puedes llevar un registro detallado de tu progreso.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/dashboard/cursos" className="block bg-yellow-500 hover:bg-yellow-400 text-black p-6 rounded-xl transition text-center font-bold text-lg">
            📚 Ver Cursos
          </Link>
          <Link href="/dashboard/coach" className="block bg-yellow-500 hover:bg-yellow-400 text-black p-6 rounded-xl transition text-center font-bold text-lg">
            🧠 Probar Coach IA
          </Link>
        </div>
      </main>
    </div>
  );
}
