import React, { ReactNode } from "react";

const Wrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return <div className={`${className} text-gray-800 mx-6`}>{children}</div>;
};

export default Wrapper;
