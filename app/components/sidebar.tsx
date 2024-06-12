import React from 'react';
import Image from 'next/image';
import vslogo from "../../public/VS Logo New 1_edited_edited.webp";
import { LogOut, Gauge, LogIn, Users, UserPlus } from 'lucide-react';

export default function Sidebar() {
  return (
    <div>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-white rounded-lg sm:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full flex flex-col px-3 py-4 overflow-y-auto bg-n-6">
          <div>
            <a href="https://flowbite.com/" className="flex items-center ps-2.5 mb-5">
              <Image src={vslogo} width={60} height={60} alt="logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap">
                Vaayusastra<br />Aerospace
              </span>
            </a>
            <ul className="space-y-2 font-medium">
              <li>
                <a href="#" className="flex items-center p-2 text-white rounded-lg">
                  <Gauge />
                  <span className="ms-3">Dashboard</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 text-white rounded-lg">
                  <UserPlus />
                  <span className="flex-1 ms-3 whitespace-nowrap">Add Admin</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 text-white rounded-lg">
                  <Users />
                  <span className="flex-1 ms-3 whitespace-nowrap">Stats</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 text-white rounded-lg">
                  <LogIn />
                  <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <ul className="space-y-2 font-medium">
              <li>
                <a href="#" className="flex items-center p-2 text-white rounded-lg">
                  <LogOut />
                  <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      <div className="p-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 w-full">
        {Array(4).fill(0).map((_, index) => (
          <div key={index} className="rounded-lg">
            <div className="relative border border-n-6 rounded-lg mb-14 px-2">
              <div className="flex flex-col items-center">
                <div className="p-6 font-extrabold text-center">Card Title</div>
                <div className="mb-10 text-center p-4 text-n-4">Card Content</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
