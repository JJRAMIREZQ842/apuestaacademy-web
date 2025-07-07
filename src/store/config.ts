import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createJSONStorage } from "zustand/middleware";

interface ConfigState {
  apiKey: string;
  setApiKey: (key: string) => void;
}

export const useConfigStore = create<ConfigState>()(
  persist(
    (set) => ({
      apiKey: "",
      setApiKey: (key) => set({ apiKey: key }),
    }),
    {
      name: "config-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
