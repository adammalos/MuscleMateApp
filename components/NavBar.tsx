'use client';
import React from 'react'
import Link from "./Link";
import { Barbell } from "@phosphor-icons/react";
import { useState } from "react"

type Props = {
    selectedPage: string;
    setSelectedPage: (value: string) => void;
  };

  const Nav = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <div className="bg-zinc-800 border-2 border-transparent border-b-rose-700 flex items-center justify-between top-0 z-30 w-full py-6">
      <div className="flex items-center justify-between mx-auto top-0 z-30 w-5/6">
        <div className="text-slate-100 font-semibold text-2xl flex items-center gap-2">
          <p className="pb-1">MuscleMate</p>
          <Barbell weight="fill" size={27} color="red" />
          <div className="text-slate-100 font-semibold text-sm flex items-center pl-10 gap-10">
          <Link 
          page="Home"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          />
          <Link 
          page="Benefits"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          />
          <Link 
          page="Our Classes"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          />
          <Link 
          page="Contact Us"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          />
          </div>
        </div>
        <div className="text-slate-100 font-semibold text-base flex items-center gap-5">
          <p>Sign In</p>
          <button className="border-4 border-transparent rounded-bl-lg ring-2 ring-red-800 ring-offset-4 ring-offset-transparent dark:ring-offset-zinc-800">Be a Member</button>
        </div>
      </div>
    </div>
  )
}

export function NavBar() {
    const [selectedPage, setSelectedPage] = useState("home");
  
    return (
        <div>
      <Nav selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      </div>
     
    )
  }
  

