import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Apuesta = {
  fecha: string;
  tipo: string;
  resultado: "ganada" | "perdida";
  monto: number;
};

interface ProgresoState {
  apuestas: Apuesta[];
  agregarApuesta: (apuesta: Apuesta) => void;
  reiniciar: () => void; // ✅ agregado
}

export const useProgresoStore = create<ProgresoState>()(
  persist(
    (set) => ({
      apuestas: [],
      agregarApuesta: (apuesta) =>
        set((state) => ({
          apuestas: [...state.apuestas, apuesta],
        })),
      reiniciar: () => set({ apuestas: [] }), // ✅ agregado
    }),
    {
      name: "progreso-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
