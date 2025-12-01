"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/data/catalog.json"
import Mehtalogy from "@/components/Mehtalogy"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);



  return (
    <>
      {/* Spacer to push content down */}
      <div className="h-14"></div>

      <nav
        aria-label="Main Navigation"
        className="fixed top-0 w-full z-50  mx-auto flex flex-wrap
          bg-light/50 shadow-lg backdrop-blur-md ">
        <div className="container mx-auto flex items-center justify-between p-2">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/favicon.svg"
              alt="Mehtalogy Technology Partner Logo"
              width={40}
              height={40}
              priority
              className="object-contain"
            />
            <h1 className="">
              <Mehtalogy />
            </h1>

          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-4">
            {navLinks.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                className="text-on-surface hover:text-accent transition-colors font-medium"
              >
                {item.text}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-on-surface hover:text-accent transition-colors"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute right-0 top-10 md:hidden z-50 bg-background shadow-lg">
            <div className="flex flex-col gap-4 p-4 items-end">
              {navLinks.map((item) => (
                <Link
                  key={item.link}
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="text-on-surface hover:text-accent font-medium transition-colors"
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
