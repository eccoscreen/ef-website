'use client'
import React from "react";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import animate from "../components/page/animate";
import '../styles/global.scss'
import '../styles/reset.scss'

const RootLayout = ({ children }: {
  children: React.ReactNode;
}) => {
  React.useEffect(() => {
    animate();
  }, []);

  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout;