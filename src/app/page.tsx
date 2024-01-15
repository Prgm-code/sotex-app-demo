"use client";

import LoginComponent from "./components/LoginComponent";
import HomeComponent from "./components/HomeComponent";
import FormComponent from "./components/FormComponent";
import { useState } from "react";
import Link from "next/link";
import NavbarComponent from "./components/NavbarComponent";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [activeView, setActiveView] = useState("home");

  // Credenciales hardcoded
  const hardcodedCredentials = {
    username: "user@mpq.com",
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
  }

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
            {activeView === "form" && <FormComponent />}
            {activeView === "view" && (
              <div className="flex flex-col items-center justify-between p-2">
                <Link href="/reports">
                  <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center">
                    Visualizar Reportes
                  </a>
                </Link>
              </div>
            )}
        </>
      ) : (
        <LoginComponent handleLogin={handleLogin} />
      )}
    </>
  );
}
