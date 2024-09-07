import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  );
}
