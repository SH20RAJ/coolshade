import HomeNav from "@/components/explore/Nav";
import Footer from "@/components/Footer";
import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <HomeNav />
      {children}
      <Footer />
    </div>
  );
}
