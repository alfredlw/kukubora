import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

function Header() {
  const { pathname } = useRouter();

  return (
    <header className="flex  py-3 px-3 rounded-full">
      <Link href="/" className="flex items-center text-3xl font-semibold">
        <Image
          src="/assets/images/logo.png"
          alt="kuku bora diagnostics"
          height={32}
          width={32}
        />
        <h1 className="ml-3">KukuBora</h1>
      </Link>

      <div className="flex-1" />
      <nav
        className={`flex items-center space-x-4 mr-16 font-normal ${
          pathname.includes("diagnostic") && "hidden"
        }`}
      >
        <Link href="/" className={`font-medium ${pathname === "/" ? "text-red-500 border-b-2 border-b-yellow-400" : ""}`}>
          Accueil
        </Link>
        <Link
          href="/office"
          className={`font-medium ${pathname === "/office" ? "text-red-500 border-b-2 border-b-yellow-400" : ""}`}
        >
          Le Bureau
        </Link>
        {/* <Link
          href="/contact"
          className={`font-medium ${pathname === "/contact" ? "text-red-500 border-b-2 border-b-yellow-400" : ""}`}
        >
          Contact
        </Link> */}
      </nav>
      <Link href="/diagnostic">
        <button
          className={`bg-red-500 text-white rounded-full text-sm px-4 py-2 uppercase ${
            pathname.includes("diagnostic") && "hidden"
          }`}
        >
          Nouveau Diagnostique
        </button>
      </Link>
    </header>
  );
}

export default Header;
