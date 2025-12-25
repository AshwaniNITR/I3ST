"use client";
import { useState } from "react";
import { CommitteesBackground } from "../../components/Background";
import FeesPage from "../../components/Registration";
const Page = () => {


  return (
    <div className="relative min-h-screen">
      {/* <Navbar /> */}
      <CommitteesBackground />
      <FeesPage/>
    </div>
  );
};

export default Page;
