import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink className="rounded-md bg-red-700 px-10 py-2 hover:bg-red-800 text-slate-100 hover:text-white"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
    >
        { children }
    </AnchorLink>
  )
}

export default ActionButton