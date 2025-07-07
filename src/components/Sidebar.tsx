"use client";

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

export default Sidebar;
