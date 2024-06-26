
"use client"
import React, { useState } from "react";
import Button from "./Button";
import MenuSvg from "./assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import Image from "next/image";
import logo from "../components/assets/logo.webp"
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

interface NavbarProps {
  data: any;
  position: boolean;
  hide: boolean;
  admin: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ data, position, hide, admin }) => {
  const { data: session } = useSession();

  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);

    } else {
      setOpenNavigation(true);

    }
  };

  const handleClick = () => {
    if (!openNavigation) return;


    setOpenNavigation(false);
  };

  return (
    <div
      className={`${position ? "fixed" : "sticky"} top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm  ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
        }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 ">
        <a className="block  xl:mr-8" href="/">
          <Image src={logo} width={70} height={70} alt="Vaayusastra" />
        </a>
        <Link href="/">
          <p className=" h5 font-bold">Vaayusastra Aerospace</p>
        </Link>
        <nav
          className={`${openNavigation ? "flex" : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {data.map((item: any) => (
              < div key={item.id}>
                {!admin ? (
                  
                    (item.link == null && item.url) ? (
                      <a

                        href={item.url}
                        onClick={item.onclick ? item.onclick : handleClick}
                        className={`block ${hide ? "hidden" : "block"} relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""
                          } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:text-n-1/50 lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                      >
                        {item.title}
                      </a>
                    ) : (
                      <Link key={item.id} href={item.link} className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""
                        } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:text-n-1/50 lg:leading-5 lg:hover:text-n-1 xl:px-12`} >{item.title}</Link>
                    )
                  
                ) : ((item.link == null && item.url) ? (
                  <a

                    href={item.url}
                    onClick={item.onClick}
                    className={`block ${hide ? "hidden" : "block"} relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""
                      } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:text-n-1/50 lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link key={item.id} href={item.link} className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""
                    } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:text-n-1/50 lg:leading-5 lg:hover:text-n-1 xl:px-12`} >{item.title}</Link>
                ))}

              </div>
            ))}
            {session ? (
              <a onClick={()=>signOut()} className="block md:hidden lg:hidden relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1">Signout</a>):(<Link href="/signup" className="block md:hidden lg:hidden relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1">Signin</Link>)}
          </div>


          <HamburgerMenu />
        </nav>

        <Link
          href="/hindu"
          className="button hidden mr-8 text-n-1/50 transition-colors bg hover:text-n-1 lg:block"
        >
          Hindu-Young-world
        </Link>
        {session ? (

          <Button white={false} className=" sim-card-button hidden md:flex lg:flex " onClick={() => signOut()}>
            Sign out
          </Button>


        ) : (<Link href="/signup">
          <Button white={false} className="sim-card-button hidden md:flex lg:flex " >
            Sign in
          </Button>
        </Link>)}


        <Button white={false}
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;