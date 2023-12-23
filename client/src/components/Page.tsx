import React, { useEffect, useState, FormEvent } from "react";
import Navbar from "../components/Navbar";

function Page({ children }: { children: JSX.Element }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Page;
