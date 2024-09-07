"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
export default function LogOutPage() {
  const handleLogout = async () => {
    signOut().then(() => {
      window.open("/explore", "_self");
    });
  };

  return (
    <div className="flex justify-center items-center h-screen  - ">
      <div className="max-w-md p-5 flex flex-col items-center justify-center gap-8   rounded-lg  ">
        <img src="/assets/logout.svg" alt="" />

        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
}
