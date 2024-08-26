// app/page.js
'use client';
import landingPage from "./landing/page";
// import signInPage from "./sign-in/[[...sign-in]]/page";
// import signUpPage from "./sign-up/[[...sign-up]]/page";
import RMPPage from "./RMP/page";

import { usePathname } from "next/navigation";


const Page = () => {
  const pathname = usePathname();

  if (pathname === "/") {
    return landingPage();
  }

  // if (pathname === "/sign-in") {
  //   return SignInPage();
  // }

  // if (pathname === "/sign-up") {
  //   return SignUpPage();
  // }

  if (pathname === "/RMP") {
    return RMP();
  }

  return landingPage();
};

export default Page;