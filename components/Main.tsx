"use client"
import React, { useState } from 'react';
import { NavBar } from "@/components/NavBar";
import useMediaQuery from './hooks/useMediaQuery';
import { SelectedPage } from './shared/types';
import MainWorkout from "./img/MainWorkout.png";
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
      className=""
    >
      <div>
        <NavBar />
      </div>
      {/* IMAGE OVERLAY */}
      <div
        style={{ backgroundImage: `url(${WomanHoldingWeights.src})`, backgroundSize: "cover" }}
        className="absolute inset-0 filter brightness-50">
      </div>
      {/* CONTENT */}
      <div className="">
        {/* MAIN HEADER */}
        <div className="container relative p-10">
          {/* HEADING */}
          <div className="">
            <span className="muscle-mate text-slate-100 font-regular sm:text-6xl text-4xl flex items-center pt-40 gap-1">MuscleMate
              <img className="
              sm:h-auto 
              sm:w-11
              h-auto 
              w-7 
              sm:pt-4 
              pt-2"
                src={BarbellLogo.src} alt="Logo" />
            </span>
            <span className="text-slate-100 font-regular text-4xl flex items-center py-1">It's all possible.</span>
            <span className="text-slate-100 font-regular text-xl flex items-center py-10">Our gym chain is spreading strength and
              determination all over the world.
              Build your body in our space and always be prepared with the help <br />
              of our highly trained professionals who are
              100% available exclusively for you.
            </span>
          </div>
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
      <img src={MainWorkout.src} alt="" />
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