"use client";

import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
import type { SidebarProps } from "@/customTypes/sidebar";

export default function Sidebar({ isSidebarOpen, toggleSidebar }: SidebarProps) {
  return (
    <section
      className={`bg-dark-2 shrink-0 rounded-[10px] overflow-hidden transition-all duration-150 w-full ${isSidebarOpen ? "pt-[38px] pl-[31px] pr-[27px] pb-[31px] lg:w-[374px]" : "p-0 lg:w-0 opacity-0 hidden"}`}
    >
      <div className="flex items-start justify-between mb-[22px]">
        <h2 className="text-primary text-xl font-bold">Welcome to Lyric Music</h2>
        <button type="button" className="text-gray-light cursor-pointer text-2xl" onClick={toggleSidebar}>
          <IoCloseOutline />
        </button>
      </div>
      <div className="flex flex-col gap-y-5 pr-2.5 text-gray mb-5">
        <p>
          We&apos;re thrilled to have you join us on this musical journey! Lyric Music is your gateway to a fresh and
          immersive way to enjoy the bands and artists you love. Whether you&apos;re searching for your all-time
          favorite tracks, exploring curated playlists crafted to fit every mood, or discovering new songs that will
          soon become your go-to anthems, Lyric Music is here to elevate your listening experience.
        </p>
        <p>
          Imagine having the perfect soundtrack for every moment of your life, from energizing workouts to peaceful
          evenings under the stars. With an intuitive interface designed to make finding music effortless and enjoyable,
          you&apos;ll spend less time searching and more time grooving. Best of all, it&apos;s completely free—because
          we believe that great music should be accessible to everyone.
        </p>
        <p>
          At Lyric Music, we&apos;re passionate about creating a community where music lovers like you can explore,
          connect, and celebrate the power of sound. So dive in, press play, and let the music move you. Welcome to your
          new favorite way to listen.
        </p>
      </div>
      <div className="bg-dark-1 flex gap-x-5 items-center rounded-[10px] pl-3.5 py-5 pr-6">
        <div className="text-primary w-[150px] h-20 relative">
          <Image src="/assets/flag.svg" alt="Flag" fill className="object-contain" sizes="auto" />
        </div>
        <div className="flex flex-col gap-y-1">
          <h4 className="text-primary text-xl font-bold uppercase">Coming Soon</h4>
          <p className="text-gray text-[13px] leading-4">Check out whats new for 2025 from the Lyric team.</p>
        </div>
      </div>
    </section>
  );
}
