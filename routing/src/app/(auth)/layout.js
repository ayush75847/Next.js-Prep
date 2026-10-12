"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "login", href: "/login" },
  { name: "register", href: "/register" },
  { name: "forgot-password", href: "/forgot-password" },
];

function AuthLayout({ children }) {
  const pathname = usePathname();
  return (
    <>
      <div className="p-5">
        {navLinks.map((link) => {
          const isActive =
            link.href === pathname ||
            (pathname.startsWith(link.href) && link.href !== "/");

          return (
            <h1 key={link.name} className="inline-block m-2">
              <Link
                href={link.href}
                className={
                  isActive
                    ? " font-bold text-gray-700 hover:text-blue-600"
                    : " text-gray-700 hover:text-blue-600"
                }
              >
                {link.name}
              </Link>
            </h1>
          );
        })}
      </div>

      <div>{children}</div>
    </>
  );
}

export default AuthLayout;
