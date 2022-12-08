'use client'
import { usePathname } from 'next/navigation';
import React, { useReducer } from "react";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import animate from "../components/page/animate";
import '../styles/global.scss'
import '../styles/reset.scss'

const RootLayout = ({ children }: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();

  React.useEffect(() => {
    return animate(pathname);
  }, [pathname]);

  return (
    <html lang="en">
      <body>
        {children}
        <Nav />
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout;