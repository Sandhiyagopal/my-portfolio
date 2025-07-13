// src/common/components/navbar/FloatingNavbarClient.tsx
"use client";

import dynamic from "next/dynamic";

const FloatingNavbar = dynamic(() => import("@/common/components/navbar/FloatingNavbar"), {
  ssr: false,
});

const FloatingNavbarClient = (props: any) => {
  return <FloatingNavbar {...props} />;
};

export default FloatingNavbarClient;
