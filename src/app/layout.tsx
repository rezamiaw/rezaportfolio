import React from "react";
import Navbar from "./components/Navbar";
import "./globals.css";

type LayoutProps = {
  children: React.ReactNode; // Menambahkan tipe untuk children
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
