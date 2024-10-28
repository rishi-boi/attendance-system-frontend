import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="flex border-t py-2 flex-col justify-center items-center">
      <Logo />
      <p className="text-gray-500">All rights reserverd. 2024</p>
    </footer>
  );
};

export default Footer;
