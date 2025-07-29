import { Metadata } from "next";
import { Navbar, Footer, ThemeProvider } from "./components/layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "reza - frontend dev",
  description: "Portfolio pribadi dan karya-karya saya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
