"use client";

import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";
import { set } from "zod";

export default function LoginComponent({ handleLogin }: { handleLogin: any }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (username: string, password: string) => {
    const res = handleLogin(username, password);
    console.log(res);
  };

  return (
    <main className="flex flex-col items-center justify-between p-10">
      <h2 className="text-3xl font-bold text-center my-5">Acceso al Sistema</h2>
      <Card className="max-w-sm">
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
              height="96"
              src="/1669380754322.webp"
              width="96"
              className="mb-3 rounded-full shadow-lg"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Ingrese Email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@mpq.com"
              required
              onChange={(e) => {
                e.preventDefault();
                setUsername(e.target.value);
              }}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Ingrese Password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              required
              onChange={(e) => {
                e.preventDefault();
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </main>
  );
}
