"use client";

import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";

export default function LoginComponent({ handleLogin }: { handleLogin: any }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (username: string, password: string) => {
    const res = handleLogin(username, password);
    console.log(res);
  };

  return (
    <div
      className="relative h-screen bg-no-repeat bg-cover bg-fixed bg-center"
      style={{
        backgroundImage: "url('/sotex/Hero-sotex.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <main className="flex flex-col items-center justify-center w-full min-h-screen p-4">
        <h1 className="text-4xl font-bold text-center mb-5">
          Acceso al Sistema
        </h1>
        <Card className="w-full max-w-md opacity-95 shadow-xl">
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleClick(username, password);
            }}
          >
            <div className="mx-auto">
              <Image
                alt="MPQ Logo"
                height="160"
                src="/sotex/logo.png"
                width="250"
                className="mx-auto my-4"
              />
            </div>
            <div>
              <Label htmlFor="email1" value="Ingrese Email" />
              <TextInput
                id="email1"
                type="email"
                placeholder="name@sotex.app"
                required
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div>
              <Label htmlFor="password1" value="Ingrese Password" />
              <TextInput
                placeholder="********"
                id="password1"
                type="password"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Recuerdame</Label>
            </div>
            <Button type="submit">Enviar</Button>
          </form>
        </Card>
      </main>
    </div>
  );
}
