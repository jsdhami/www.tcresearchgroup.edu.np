import React from "react";
import Hero from "@/components/hero/hero";
import Link from "next/link";
import Playlist from "@/components/playlist/playlist";

export default function Home() {
  return (
  <>
    <Hero/>
    <div className="flex flex-row justify-center gap-4 items-center pb-6">
    <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
          
            Know More
          </Link>
          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </Link>
    </div>
    <Playlist />
  </>
  );
}
