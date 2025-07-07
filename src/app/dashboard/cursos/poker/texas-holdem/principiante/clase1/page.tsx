"use client";
import Sidebar from "@/components/Sidebar";

export default function Clase1() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-black text-white p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">♠️ Clase 1: Introducción al Texas Hold'em</h1>

          <p className="mb-4 text-gray-300">
            El Texas Hold'em es una de las variantes más populares del póker en todo el mundo. Es fácil de aprender pero toma tiempo dominarlo. Esta clase cubre lo esencial para empezar.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">📌 Objetivo de la clase</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Comprender qué es el Texas Hold'em.</li>
            <li>Identificar las reglas básicas del juego.</li>
            <li>Familiarizarse con la estructura de una mano.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🃏 ¿Qué es Texas Hold'em?</h2>
          <p className="text-gray-300 mb-4">
            Es una variante del póker donde cada jugador recibe dos cartas privadas (conocidas como "hole cards") y debe combinarlas con cinco cartas comunitarias para formar la mejor mano posible de cinco cartas.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">📋 Estructura de una mano</h2>
          <ol className="list-decimal list-inside text-gray-300 space-y-2">
            <li>Reparto de las cartas (2 por jugador).</li>
            <li>Ronda de apuestas (Preflop).</li>
            <li>Se revelan 3 cartas comunitarias (Flop).</li>
            <li>Segunda ronda de apuestas.</li>
            <li>Se revela la 4ta carta (Turn).</li>
            <li>Otra ronda de apuestas.</li>
            <li>Se revela la 5ta carta (River).</li>
            <li>Última ronda de apuestas y showdown.</li>
          </ol>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">🎯 Conclusión</h2>
          <p className="text-gray-300">
            En esta clase aprendiste los fundamentos del Texas Hold'em. A partir de aquí, comenzaremos a desarrollar estrategias y comprender el valor de las manos.
          </p>
        </div>
      </main>
    </div>
  );
}
