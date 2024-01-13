"use client";

import { Navbar } from "flowbite-react";
import Image from "next/image";

export default function NavbarComponent() {
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
        <Navbar.Link href="/form" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/">About</Navbar.Link>
        <Navbar.Link href="/">Services</Navbar.Link>
        <Navbar.Link href="/">Pricing</Navbar.Link>
        <Navbar.Link href="/">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
