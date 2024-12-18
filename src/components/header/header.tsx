import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ModeToggle } from "@/components/mode-toggle";


const header = () => {
  return (
    <>
      <header className=" bg-gray-100 dark:bg-slate-950 bg-gradient-to-t fixed z-50 w-full py-5 px-8 ">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.png" width={40} height={40} alt="Logo" className="rounded-md" />
          </Link>
          <nav className="ml-auto mx-3 text-sm font-medium space-x-4 md:space-x-6 ">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/events">Events</Link>
            <Link href="/team">Team</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <ModeToggle />
        </div>
      </header>
    </>
  )
}

export default header