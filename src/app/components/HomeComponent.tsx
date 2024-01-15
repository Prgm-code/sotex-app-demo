"use client";
import { Button } from "flowbite-react";
import Image from "next/image";
import React from "react";

function HomeComponent({ handleSetActiveView }: { handleSetActiveView: (view: string) => void }) {
    const handleButtonForm = () => {
    handleSetActiveView("form");
  };
  const handleButtonView = () => {
    handleSetActiveView("view");
  };

  return (
    <main className="flex flex-col items-center justify-between p-2">
      <div className="mx-auto">
        <Image
          alt="MPQ Logo"
          height="96"
          src="/1669380754322.webp"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        />
      </div>
      <div className="mx-auto">
        <h1 className="text-3xl font-bold text-center">Bienvenido a MPQ</h1>

        <p className="text-xl font-bold text-center">
          Master Pro Quality (MPQ)
        </p>

        <div className="flex flex-col mx-auto gap-y-3 item-center">
          <Button
            onClick={() => handleButtonForm()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
          >
            Ingresar Reporte
          </Button>

          <Button
            onClick={() => handleButtonView()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
          >
            Visualizar Reportes
          </Button>
        </div>
      </div>
    </main>
  );
}

export default HomeComponent;
