"use client";

import Sidebar from "@/components/Sidebar";
import { useConfigStore } from "../../../store/config";


import { useState } from "react";

export default function ConfiguracionPage() {
  const { apiKey, setApiKey } = useConfigStore();
  const [nuevoApi, setNuevoApi] = useState(apiKey);
  const [email, setEmail] = useState("");
  const [notifications, setNotifications] = useState({
    betsAnalysis: true,
    newCourses: false,
    promotions: false,
  });
  const [zonaHoraria, setZonaHoraria] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);

  const guardarApi = () => setApiKey(nuevoApi);

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-yellow-400 mb-8">⚙️ Configuración</h1>

        {/* API Key */}
        <section className="bg-gray-900 p-6 rounded-xl border border-yellow-500 mb-8 max-w-2xl">
          <h2 className="text-xl font-semibold mb-4">API Key de Gemini</h2>
          <input
            type="text"
            value={nuevoApi}
            onChange={(e) => setNuevoApi(e.target.value)}
            placeholder="Ingresa tu API Key"
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600 mb-4"
          />
          <button
            onClick={guardarApi}
            className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-300"
          >
            Guardar
          </button>
        </section>

        {/* Zona horaria */}
        <section className="bg-gray-900 p-6 rounded-xl border border-yellow-500 mb-8 max-w-2xl">
          <h2 className="text-xl font-semibold mb-4">Zona horaria</h2>
          <select
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
            value={zonaHoraria}
            onChange={(e) => setZonaHoraria(e.target.value)}
          >
            {Intl.supportedValuesOf("timeZone").map((tz) => (
              <option key={tz} value={tz}>
                {tz}
              </option>
            ))}
          </select>
        </section>

        {/* Perfil */}
        <section className="bg-gray-900 p-6 rounded-xl border border-yellow-500 mb-8 max-w-2xl">
          <h2 className="text-xl font-semibold mb-4">Perfil de usuario</h2>
          <label className="block mb-2 text-gray-400">Correo electrónico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="usuario@ejemplo.com"
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600 mb-4"
          />
          <button className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-300">
            Actualizar email
          </button>
        </section>

        {/* Notificaciones */}
        <section className="bg-gray-900 p-6 rounded-xl border border-yellow-500 max-w-2xl">
          <h2 className="text-xl font-semibold mb-4">Notificaciones</h2>
          {Object.entries(notifications).map(([key, val]) => (
            <div key={key} className="flex items-center justify-between mb-3">
              <span className="capitalize text-gray-300">
                {key === "betsAnalysis" ? "Análisis de apuestas" :
                 key === "newCourses" ? "Nuevos cursos" :
                 key === "promotions" ? "Promociones" : key}
              </span>
              <input
                type="checkbox"
                checked={val as boolean}
                onChange={() =>
                  setNotifications((prev) => ({ ...prev, [key]: !(prev as any)[key] }))
                }
                className="h-5 w-5"
              />
            </div>
          ))}
          <button className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-300">
            Guardar preferencias
          </button>
        </section>
      </main>
    </div>
  );
}
