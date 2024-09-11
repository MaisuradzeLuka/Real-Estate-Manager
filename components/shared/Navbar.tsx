import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" px-40 py-8 w-full">
      <Link href="/">
        <Image
          width={150}
          height={50}
          src="/assets/images/LOGO-02-3.png"
          alt="page-logo"
        />
      </Link>
    </nav>
  );
};

export default Navbar;
