"use client";

import LoginComponent from "./components/LoginComponent";
import HomeComponent from "./components/HomeComponent";
import FormComponent from "./components/FormComponent";
import ListReports from "./components/ListReports";
import { useState } from "react";
import NavbarComponent from "./components/NavbarComponent";

type Inputs = {
  company: string;
  center: string;
  employees: string;
  workingEmployees: { employee: string }[];
  typeOfCages: string;
  loberoThread?: string;
  date: string;
  rope?: string;
  gasoline?: number;
  oil?: number;
  others?: string;
  startTime: string;
  endTime: string;
  inCharges: string;
  workTypes: string;
  registrationNumber?: string;
  ships: string;
  workDetail: string;
  observations?: string;
  materials?: string;
  usedMaterials: { material: string; detail: string }[];
};

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeView, setActiveView] = useState("home");

  const [objetos, setObjetos] = useState<Array<any>>([
    {
      company: "compA",
      center: "Centro 1",
      employees: "5",
      workingEmployees: [
        { employee: "Empleado 1" },
        { employee: "Empleado 2" },
      ],
      typeOfCages: "Tipo de Jaulas",
      date: "2021-08-01",
      startTime: "08:00",
      endTime: "17:00",
      inCharges: "Encargados",
      workTypes: "Trabajo tipo A ",
      ships: "Barco A",
      workDetail: "Detalle de Trabajo",

      usedMaterials: [{ material: "0", detail: "" }],
    },
  ]);

  let ultimoIndice =
    objetos.length > 0 ? objetos[objetos.length - 1].indice : 0;

  // Función para agregar objetos
  const agregarObjeto = (nuevoObjeto: Inputs) => {
    console.log("agregando", nuevoObjeto);
    console.log("indice", ultimoIndice);
    setObjetos([...objetos, nuevoObjeto]);
  };

  const eliminarObjeto = (indexToRemove: number) => {
    // Eliminar objeto basado en su posición en el array
    console.log("eliminando objeto en el índice", indexToRemove);
    setObjetos(objetos.filter((_, index) => index !== indexToRemove));
  };

  // Credenciales hardcoded
  const hardcodedCredentials = {
    username: "user@sotex.app",
    password: "password123",
  };

  const handleLogin = (username: string, password: string) => {
    console.log(username, password);
    if (
      username === hardcodedCredentials.username &&
      password === hardcodedCredentials.password
    ) {
      setIsAuthenticated(true);
      return true;
    } else {
      alert("Credenciales incorrectas");
      return false;
    }
  };
  const handleSetActiveView = (view: string) => {
    setActiveView(view);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  return (
    <>
      {isAuthenticated ? (
        <>
          <NavbarComponent
            handleLogout={handleLogout}
            handleSetActiveView={handleSetActiveView}
            
          />

          {activeView === "home" && (
            <HomeComponent handleSetActiveView={handleSetActiveView} />
          )}
          {activeView === "form" && (
            <FormComponent agregarObjeto={agregarObjeto} />
          )}
          {activeView === "view" && (
            <ListReports objetos={objetos} eliminarObjeto={eliminarObjeto} />
          )}
        </>
      ) : (
        <LoginComponent handleLogin={handleLogin} />
      )}
    </>
  );
}
