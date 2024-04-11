"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  
} from "@nextui-org/react";
import { ThemeToggle } from "./themetoggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "../../public/VS Logo New 1_edited_edited.webp"

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className=" bg-transparent p-2 "
      isBlurred={true}
      isBordered
      

    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden "
        />
         <Image
         src={logo}
         width={66}
         height={66}
         alt="logo"
         
         />
        <p className="font-medium text-inherit">VAAYUSASTRA AEROSPACE</p>
      </NavbarContent>

      <NavbarContent className="hidden md:hidden lg:flex  gap-4" justify="end">
        <NavbarItem >
          <Link color="primary" href="#">
            About us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground">
            Courses
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Admin
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeToggle />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex ml-4">
            <Button className="">

          <Link href="#" className="text-white">Register</Link>
            </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
