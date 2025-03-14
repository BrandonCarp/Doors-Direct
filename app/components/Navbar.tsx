"use client";
import Image from "next/image";
import Link from "next/link";
import Sidenav from "./Sidenav";

export default function Navbar() {
  return (
    <div className="bg-white border-b-2 sticky">
      <div className="flex items-center justify-between px-10">
        <Link href='/'> <Image className="py-2 m"
      src="/images/logo.png"
      alt="transparent logo"
      width={100}
      height={100}
       /></Link>
     <div>
      <Sidenav />
     </div>
      </div>
      
    </div>
  );
}
