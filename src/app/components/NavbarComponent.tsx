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
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://www.linkedin.com/in/masterproquality/">
        <Image
          src="/1669380754322.webp"
          className="mr-3 h-6 sm:h-9 "
          alt="Flowbite Logo"
          width={36}
          height={36}
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Master Pro Quality (MPQ)
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
          Formulario de Faena
        </Navbar.Link>
        <Navbar.Link
          onClick={() => {
            handleButtonForm("view");
          }}
        >
          Visualizar Faenas
        </Navbar.Link>

        <Navbar.Link
          className="border-2 border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-2 px-4 rounded"
          onClick={() => {
            handleLogout();
          }}
        >
          Logout
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
