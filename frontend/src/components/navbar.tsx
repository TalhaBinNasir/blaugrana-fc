"use client";

import React from "react";
import { useRouter } from "next/navigation";
import "../styles/navbar.css";

function Navbar() {
  const router = useRouter();

  return (
    <div className="flex bg-gradient-to-r from-barca-yellow via-barca-red to-barca-blue justify-between align-center">
      <div className="flex justify-between align-center pl-4 py-2">
        <button
          className="transition ease-in-out rounded-full p-4 text-lg text-gray-800 font-semibold hover:bg-yellow-600 duration-300"
          onClick={() => router.push("/")}
        >
          Home
        </button>
        <button
          className="transition ease-in-out rounded-full p-4 text-lg text-gray-800 font-semibold hover:bg-yellow-600 duration-300"
          onClick={() => router.push("/club-profile")}
        >
          Club Profile
        </button>
      </div>
      <div className="py-2">
        <img
          src="./favicon.ico"
          height={60}
          width={60}
          alt="logo"
          onClick={() => router.push("/")}
        />
      </div>
      <div className="flex justify-between align-center pr-4 py-2">
        <button className="transition ease-in-out rounded-full p-4 text-lg text-indigo-200 font-semibold hover:bg-blue-900 duration-300">
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;
