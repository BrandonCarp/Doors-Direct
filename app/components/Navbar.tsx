"use client";
import Image from "next/image";
import Link from "next/link";
import Sidenav from "./Sidenav";

export default function Navbar() {
  return (
    <div className="bg-white border-b-2 sticky">
      <div className="flex items-center justify-between px-5">
        <Link href='/'> <Image className="py-2 md:h-[60] md:w-[100]"
      src="/images/logo.png"
      alt="transparent logo"
      width={80}
      height={60}
       /></Link>
     <div>
      <Sidenav />
     </div>
      </div>
      
    </div>
  );
}
