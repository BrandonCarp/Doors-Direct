"use client";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="bg-white border-b-2 sticky">
      <div className="">
      <Image className="p-3"
      src="/images/logo.png"
      alt="transparent logo"
      width={150}
      height={100}
       />
      </div>
      
    </div>
  );
}
