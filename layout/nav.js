import React from "react";
import Link from "next/link";

const Nav = () => (
  <nav className="nav">
    <Link prefetch href="/">
      <a>Home</a>
    </Link>

    <Link prefetch href="/about">
      <a>About</a>
    </Link>
  </nav>
);

export default Nav;
