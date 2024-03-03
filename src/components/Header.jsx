import React from "react";
import { Navbar } from ".";
import Link from "next/link";

export default function HeaderPage() {
  return (
    <header className="flex items-center justify-between mx-5 mt-5">
        <Link href="/" className="flex gap-2">
            <img src="/logo.svg" alt="logo imdb" className="" />
            <span className=" hidden text-2xl font-normal text-gray-200 sm:inline transition-all delay-75">Clone</span>    
        </Link>
        <Navbar />
    </header>
  );
}
