import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-transparent p-4 w-full top-0 z-10 flex justify-center">
      {/* Wrapper dengan width terbatas dan alignment ke kiri pada mobile */}
      <div className="w-full text-xl max-w-5xl flex flex-col md:flex-row md:justify-between items-start md:items-center md:px-0 px-4">
        {/* Nama di kiri */}
        <div className="font-bold text-white mb-4 md:mb-0">
          <Link href="/">Reza Dwi Andrianto</Link>
        </div>

        <div className="w-full md:w-auto">
          <ul className="flex flex-col md:flex-row md:justify-end space-y-2 md:space-y-0 md:space-x-4 text-white">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </li>
            <li>
              <a
                href="https://saweria.co/notkyuura"
                target="_blank"
                rel="noopener noreferrer"
              >
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
