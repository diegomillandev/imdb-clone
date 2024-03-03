import React from "react";
import Link from "next/link";
import { Navbar, SwitchDarkMode } from ".";

export default function HeaderPage() {
  return (
    <header className="flex items-center justify-between mx-5 pt-5">
        <Link href="/" className="flex gap-2">
            <img src="/logo.svg" alt="logo imdb" />
            <span className=" hidden text-2xl font-normal text-gray-800 dark:text-gray-200 sm:inline transition-all delay-75">Clone</span>    
        </Link>
        <div className="flex items-center gap-2">
            <SwitchDarkMode />
            <Navbar />
        </div>
    </header>
  );
}
