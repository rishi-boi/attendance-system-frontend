"use client";
import SignIn from "@/components/shared/SignIn";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
  const searchParams = useSearchParams();
  const login_as = searchParams.get("login");
  useGSAP(() => {
    gsap.from(".logo", { y: -20, ease: "power2.out" });
    gsap.from(".btns", { opacity: 0, y: 20 });
  }, [searchParams]);
  return (
    <div className="absolute min-w-[300px] border rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-8">
      <h1 className="text-3xl logo text-center">
        Login As{" "}
        <span className="text-primary capitalize">
          {login_as ? <span>{login_as}</span> : "?"}
        </span>
      </h1>
      <div className="btns">
        {login_as ? (
          <SignIn login_as={login_as} />
        ) : (
          <div className="flex flex-col gap-3 mt-6">
            <RainbowButton className="w-full">
              <Link href={"?login=admin"} className="w-full">
                Admin
              </Link>
            </RainbowButton>
            <Link
              href="?login=teacher"
              className="px-8 hover:bg-gray-100 transition text-center py-2 font-medium border rounded-xl"
            >
              Teacher
            </Link>
            <Link
              href="?login=student"
              className="px-8 hover:bg-gray-100 text-center py-2 font-medium border rounded-xl"
            >
              Student
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
