import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col ">

      {/* Top Navbar */}
      <header className="h-14 bg-primary border-b flex items-center justify-between">
        <Navbar/>
      </header>

      {/* Page Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>

    </div>
  );
};

export default Layout;
