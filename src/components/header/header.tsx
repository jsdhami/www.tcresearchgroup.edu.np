"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ModeToggle } from "@/components/mode-toggle";
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="bg-gray-100 dark:bg-slate-950 bg-gradient-to-t from-gray-200 to-gray-100 dark:from-slate-900 dark:to-slate-950 fixed z-50 w-full py-5 px-8 transition-all duration-50">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.png" width={40} height={40} alt="Logo" className="rounded-md hover:opacity-80 transition-opacity duration-300" />
          </Link>
          <nav className="hidden md:flex ml-auto mx-3 text-sm font-medium space-x-4 md:space-x-6">
            <Link href="/" className="hover:text-blue-500 transition-colors duration-150">Home</Link>
            <Link href="/about" className="hover:text-blue-500 transition-colors duration-150">About</Link>
            <Link href="/events" className="hover:text-blue-500 transition-colors duration-150">Events</Link>
            <Link href="/team" className="hover:text-blue-500 transition-colors duration-150">Team</Link>
            <Link href="/contact" className="hover:text-blue-500 transition-colors duration-150">Contact</Link>
            <ModeToggle />
          </nav>
          <div className="flex items-center md:hidden ml-auto space-x-4">
            <button onClick={toggleMobileMenu} className="text-gray-700 dark:text-gray-300">
                {isMobileMenuOpen ? <XIcon className="h-6 w-6" aria-label="Close menu" /> : <MenuIcon className="h-6 w-6" aria-label="Open menu" />}
            </button>
            <ModeToggle />
          </div>
        </div>
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 space-y-2 text-sm font-medium bg-transparent  p-4 rounded-md shadow-lg transition-all duration-50">
            <Link href="/" onClick={toggleMobileMenu} className="block hover:text-blue-500 transition-colors duration-150">Home</Link>
            <Link href="/about" onClick={toggleMobileMenu} className="block hover:text-blue-500 transition-colors duration-150">About</Link>
            <Link href="/events" onClick={toggleMobileMenu} className="block hover:text-blue-500 transition-colors duration-150">Events</Link>
            <Link href="/team" onClick={toggleMobileMenu} className="block hover:text-blue-500 transition-colors duration-150">Team</Link>
            <Link href="/contact" onClick={toggleMobileMenu} className="block hover:text-blue-500 transition-colors duration-150">Contact</Link>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;