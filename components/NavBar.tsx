import React, { useEffect } from 'react'
import Link from "./Link";
import { ListBullets, X } from "@phosphor-icons/react";
import BarbellLogo from "./img/BarbellLogo.png";
import { useState } from "react"
import { SelectedPage } from './shared/types';
import useMediaQuery from './hooks/useMediaQuery';
import './global.css'
import ActionButton from './shared/ActionButton';

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Nav = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const navbarBackground = scrollPosition >= 56 ? "transition duration-500 fixed bg-zinc-950 drop-shadow" : "";

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <div className={`${navbarBackground} transition fixed border-2 border-transparent flex items-center justify-between top-0 z-30 w-full py-3`}>
        <div className="flex items-center justify-between mx-auto top-0 z-30 w-5/6">

          <div className="muscle-mate text-slate-100 font-regular text-xl flex items-center gap-1">
            MuscleMate
            <img className="h-auto w-4 pt-1" src={BarbellLogo.src} alt="Logo" />

          </div>

          {isAboveMediumScreens ? (

            <div className="flex items-center justify-between w-full">
              <div className="text-slate-100 text-sm flex items-center justify-between pl-10 gap-8">
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
                <div />
              </div>
              <div className="text-slate-100 text-sm flex items-center justify-between gap-8">
                <p>Sign In</p>
                <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
              </div>
            </div>
          ) : (
            <button className="rounded-full bg-red-700 p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <ListBullets weight="fill" className="h-5 w-6  text-white" />
            </button>
          )}
        </div>
      </div>
      {/* MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 sm:h-full h-[50%] top-0 rounded-md w-[300px] bg-zinc-800 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <X weight="bold" color="#868686" className="h-7 w-24 pt-0 text-grey-400" />
            </button>
          </div>
          {/* MENU ITEMS */}
          <div className="text-slate-100 font-semibold ml-[33%] flex flex-col gap-10 text-2xl">
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
            <div />
          </div>
        </div>
      )}
    </nav>
  )
}



export function NavBar() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Nav
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  )
}



