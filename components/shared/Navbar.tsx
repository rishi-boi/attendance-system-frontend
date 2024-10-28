import React from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="py-4 border-b bg-white z-50">
      <Wrapper>
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <Logo />
          </Link>
          <Link
            className={buttonVariants({
              size: "lg",
              variant: "outline",
            })}
            href={"/getstarted"}
          >
            Login
          </Link>
        </div>
      </Wrapper>
    </nav>
  );
};

export default Navbar;
