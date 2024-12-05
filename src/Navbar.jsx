import React from "react";
import { Logo } from "./image";
const Navbar = () => {
  return (
    <div className="bg-[#1C1E53]">
      <nav className="container py-5  flex justify-between  text-white">
        <a href="#" className="font-bold">
          {" "}
          <img src={Logo} alt="Logo" />
        </a>
        <ul className="flex gap-5">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
