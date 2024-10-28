import React from "react";

const Logo = ({ className }: { className?: string }) => {
  return (
    <h1 className={`font-bold text-2xl ${className}`}>
      Mark<span className="text-primary">Me</span>
    </h1>
  );
};

export default Logo;
