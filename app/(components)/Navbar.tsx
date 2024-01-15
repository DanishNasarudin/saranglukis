"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import { useScrollListener } from "../(hooks)/useScrollListener";
import logo from "../saranglukis-logo.svg";

type Props = {};

function Navbar({}: Props) {
  const [toggle, setToggle] = useState(true);
  const [offerToggle, setOfferToggle] = useState(false);
  const [careToggle, setCareToggle] = useState(false);
  const scroll = useScrollListener();
  const [hideNavbar, setHideNavbar] = useState(false);
  // console.log(toggle);

  useEffect(() => {
    if (scroll.checkY > 0) {
      setHideNavbar(true);
    } else if (scroll.checkY < 0) {
      setHideNavbar(false);
    }
  }, [scroll.y, scroll.lastY]);
  return (
    <>
      <nav
        className={`
      top-0 h-full left-0 w-full
      z-[1] sticky transition-all bg-primary/80 border-b-[1px] border-[#cccccc]
        
      before:absolute before:w-full before:h-full before:content-[''] before:backdrop-blur-md before:top-0 before:-z-10`}
      >
        <div className="max-w-[1060px] mx-auto ">
          <div className="relative w-full sm:w-4/5 mx-auto px-4 sm:px-0 py-4 flex justify-between items-center">
            <div className="z-[1] h-[20px] aspect-[100/23]">
              <a href={"/"}>
                <Image src={logo} alt={"saranglukis"} objectFit="contain" />
              </a>
            </div>
            <ul
              className={`${
                toggle
                  ? `translate-y-[-100%] sm:translate-y-0`
                  : `translate-y-0
                    `
              } 
                z-[0] absolute sm:static top-0 sm:top-auto left-[50%] sm:left-auto translate-x-[-50%] sm:translate-x-0 transition-all
                flex flex-col sm:flex-row gap-4 sm:gap-8
                w-full sm:w-min text-center py-20 sm:py-0
                sm:flex
                before:absolute before:w-full before:h-full before:content-[''] before:backdrop-blur-md before:top-0 before:-z-10
                border-b-[1px] border-[#cccccc] sm:border-none`}
            >
              <li>
                <a href="#enroll" onClick={() => setToggle(true)}>
                  <p>How?</p>
                </a>
              </li>
              <li>
                <a href="#explore" onClick={() => setToggle(true)}>
                  <p>Explore</p>
                </a>
              </li>
              <li>
                <a href="#studio" onClick={() => setToggle(true)}>
                  <p>Studio</p>
                </a>
              </li>
            </ul>
            <RiMenuLine
              color="black"
              size={20}
              className={`z-[1] sm:hidden ${toggle ? "block" : "hidden"}`}
              onClick={() => {
                setToggle(!toggle);
              }}
            />
            <RiCloseLine
              color="black"
              size={20}
              className={`z-[1] sm:hidden ${toggle ? "hidden" : "block"}`}
              onClick={() => {
                setToggle(!toggle);
              }}
            />
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
