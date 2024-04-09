"use client";

import { Navbar } from "flowbite-react";
import Image from "next/image";

// Define a TypeScript type for your props
type NavbarComponentProps = {
  handleLogout: () => void;
  handleSetActiveView: (view: string) => void;
};

// Use the type with your functional component
export default function NavbarComponent({
  handleLogout,
  handleSetActiveView,
}: NavbarComponentProps) {
  const handleButtonForm = (view: string) => {
    console.log(view);
    handleSetActiveView(view);
  };

  return (
    <div className="bg-opacity-90 bg-white shadow-md fixed top-0 left-0 right-0 z-50 h-14"> 

    <Navbar fluid={true} rounded={true}
      className="bg-white dark:bg-gray-800 shadow-lg position-relative"
    >

      <Navbar.Brand href="" 
      target="_blank" rel="noopener noreferrer"
      >
        <Image
          src="/sotex/only_logo.png"
          className="mr-3 h-6 sm:h-9 "
          alt="Sotex_logo"
          width={36}
          height={36}
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Sistema de Gestión
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          onClick={() => {
            handleButtonForm("home");
          }}
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          onClick={() => {
            handleButtonForm("form");
          }}
        >
          Ingresar Faena
        </Navbar.Link>
        <Navbar.Link
          onClick={() => {
            handleButtonForm("view");
          }}
        >
          Listar Faenas
        </Navbar.Link>

        <Navbar.Link
          className="border-2 border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-2 px-4 rounded"
          onClick={() => {
            handleLogout();
          }}
        >
          Salir
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}
