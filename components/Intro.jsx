"use client";
import About from "../components/About";

import Button from "./Button";
import Link from "next/link";

export default function Intro() {
  return (
    <section id="intro" className="mt-16 h-[100dvh] lg:h-[80dvh]">
      <div className="rounded-full bg-emerald-500/90 blur-3xl h-20 w-20 ml-auto mr-10"></div>
      <h1 className="text-6xl sm:text-9xl font-bold">
        Brian Lagranda
        <span className="text-emerald-500 text-6xl">.</span>
      </h1>
      <h3 className="mt-2 text-lg sm:text-2xl px-1 sm:px-2">
        Frontend developer
      </h3>
      <h4 className="text-sm sm:text-md px-1 sm:px-2 text-black/70">
        based in Argentina
      </h4>

      <About />
      <Link href="/Brian Lagranda - Frontend Developer - Resume.pdf">
        <Button text="Resume"></Button>
      </Link>
      <div className="rounded-full bg-emerald-500/80 blur-3xl h-20 w-20 flex self-end"></div>
    </section>
  );
}
