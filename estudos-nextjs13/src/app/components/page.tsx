"use client";
import ImagensAleatoria from "./exemploHooks/ImagensAleatorias";

export default function PaginaDeHooks() {
  return (
    <div className={`flex justify-center items-center h-screen  gap-5 `}>
      <ImagensAleatoria />
      <ImagensAleatoria />
      <ImagensAleatoria />
    </div>
  );
}
