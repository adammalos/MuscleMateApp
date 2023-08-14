"use client"
import React, { useState } from 'react';
import { NavBar } from "@/components/NavBar";
import useMediaQuery from './hooks/useMediaQuery';
import { SelectedPage } from './shared/types';
import MainWorkout from "./img/MainWorkout.png";
import EvolveText from "./img/EvolveText.png";
import SponsorRedBull from "./img/SponsorRedBull.png";
import SponsorForbes from "./img/SponsorForbes.png";
import SponsorFortune from "./img/SponsorFortune.png";
import WomanHoldingWeights from "./img/WomanHoldingWeights.png";
import BarbellLogo from "./img/BarbellLogo.png";
import ActionButton from './shared/ActionButton';
import AnchorLink from 'react-anchor-link-smooth-scroll';



type Props = {
  setSelectedPage: (value: SelectedPage) => void;

};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  return (
    <section
      id="home"
      className="inset-0 relative bg-cover"
      style={{ backgroundImage: `url(${WomanHoldingWeights.src})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div>
        <NavBar />
      </div>
      {/* IMAGE OVERLAY */}

      {/* CONTENT */}
      <div className="relative">
        {/* MAIN HEADER */}
        <div className=" mx-auto w-5/6 items-center justify-center h-5/6">
          {/* HEADING */}
          <div className="">
            {/* <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1]">
                <img src={EvolveText.src} alt="" />
              </div>
            </div> */}
            <span className="muscle-mate text-rose-400 font-regular md:text-8xl text-4xl flex items-center 
            md:pt-56 pt-20 gap-1 bg-no-repeat md:bg-left lg:bg-[length:700px_120px] bg-[length:0px_0px]"
              style={{ backgroundImage: `url(${EvolveText.src})` }}>
                <span className="md:pb-14 lg:pl-10">MuscleMate</span>
              <img className="
              md:h-auto 
              md:w-14
              h-auto 
              w-7 
              pt-2
              md:pt-4 
              md:pb-11"
                src={BarbellLogo.src} alt="Logo"
              />
            </span>
            <span className="z-[-1] -mt-20 absolute">
              {/* <img src={EvolveText.src} alt="" /> */}

            </span>
            <span className="text-slate-100 font-regular text-4xl flex items-center md:px-10">It's all possible.</span>
            <span className="text-slate-100 font-regular text-xl flex items-center md:p-10 py-10">Our gym chain is spreading strength and
              determination all over the world.
              Build your body in our space and always be prepared with the help <br />
              of our highly trained professionals who are
              100% available exclusively for you.
            </span>
          </div>
          <div className="md:px-10">
          <ActionButton setSelectedPage={setSelectedPage}>
            Join Now
          </ActionButton>
          <AnchorLink
            className="text-sm font-bold text-white underline hover:text-red-500"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
            >
            <span className="sm:px-8 px-2">
              Learn More
            </span>
          </AnchorLink>
            </div>
        </div>
      </div>


      {/* SPONSORS */}
      <div className="relative">
        <div>
          <div>
            <img src={SponsorRedBull.src} alt="" />
            <img src={SponsorForbes.src} alt="" />
            <img src={SponsorFortune.src} alt="Fortune" />
          </div>
        </div>
      </div>
      {/* <div className="pt-96 ">
        <img src={MainWorkout.src} alt="" className="w-auto h-96" />
      </div> */}
    </section>

  )
}

export function HomePage() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  return (
    <div>
      <Home
        setSelectedPage={setSelectedPage}
      />
    </div>
  )
}