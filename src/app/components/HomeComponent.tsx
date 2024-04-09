"use client";
import { Button } from "flowbite-react";
import Image from "next/image";
import React from "react";

function HomeComponent({
  handleSetActiveView,
}: {
  handleSetActiveView: (view: string) => void;
}) {
  const handleButtonForm = () => {
    handleSetActiveView("form");
  };
  const handleButtonView = () => {
    handleSetActiveView("view");
  };

  return (
    <div
      className="relative h-screen bg-no-repeat bg-cover bg-fixed bg-center "
      style={{
        backgroundImage: "url('/sotex/5-1-Recovered.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <main className="flex flex-col items-center justify-between p-2 gap-3 ">
        <div className="mx-auto mt-28">
          <Image
            alt="Sotex Logo"
            height="96"
            src="/sotex/logo.png"
            width="300"
            className=""
          />
        </div>
        <div className="mx-auto">
          <h1 className="text-3xl font-bold text-center text-pretty">Bienvenido a FABUC</h1>

          <p className="text-xl font-bold text-center mb-10">
            Control de Faenas
          </p>

          <div className="flex flex-col mx-auto gap-y-3 item-center">
            <Button
              onClick={() => handleButtonForm()}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md text-center"
            >
              Ingresar Faena
            </Button>

            <Button
              onClick={() => handleButtonView()}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md text-center"
            >
              Faenas Realizadas
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomeComponent;
