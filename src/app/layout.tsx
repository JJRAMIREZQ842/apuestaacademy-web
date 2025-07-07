import "../globals.css";
import { ReactNode } from "react";


export const metadata = {
  title: "ApuestaAcademy",
  description: "Universidad Inteligente del Juego",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

