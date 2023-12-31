"use client";

import Link from "next/link";
import nextLogo from "../../public/next.svg";
import Image from "next/image";

interface HeadingProps {
  title: string;
  subtitle: string;
}

const Heading = ({ title, subtitle }: HeadingProps) => {
  return (
    <div className="flex flex-col gap-y-2 mb-2">
      <Link href="/" className="flex items-center justify-center mb-4 ">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Logo
        </span>
      </Link>
      <h2 className="text-2xl font-bold break-words">{title}</h2>
      <h3 className="text-base font-light">{subtitle}</h3>
    </div>
  );
};

export default Heading;
