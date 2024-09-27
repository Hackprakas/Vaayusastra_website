"use client"
import React from 'react';
import Image from 'next/image';
import { LogOut, Users, UserPlus, CloudUpload, FileUp, UserRoundPlus, PieChart, SquarePen } from 'lucide-react';
import vslogo from "../../public/VS Logo New 1_edited_edited.webp";
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { ReceiptIndianRupee } from 'lucide-react';

function Sidebar() {
  function signouts() {
    signOut({
      callbackUrl: "/signup"
    });
  }

  return (
    <div className="bg-purple text-white p-6 w-72 h-screen border-r border-n-6 hidden md:flex lg:flex flex-col justify-between overflow-auto">
      <div>
        <Link href="/">
        <div className='flex items-center'>
          <Image src={vslogo} className='w-16 h-16' alt="logo" />
          <div className="font-bold text-lg ml-2">Vaayusastra Aerospace</div>
        </div>
        </Link>
        <div className='h-px bg-n-6 mt-6 w-auto' />
        <nav className="flex flex-col mt-6">
          <ul>
            <li>
              <Link href="/admin" className="flex items-center py-3 px-4 hover:bg-purple-700 rounded">
                <PieChart className="mr-2" />
                Stats
              </Link>
            </li>
            <li>
              <Link href="/admin/add" className="flex items-center py-3 px-4 hover:bg-purple-700 rounded">
                <UserRoundPlus className="mr-2" />
                Add Admin
              </Link>
            </li>
            <li>
              <Link href="/admin/upload" className="flex items-center py-3 px-4 hover:bg-purple-700 rounded">
                <CloudUpload className="mr-2" />
                Upload
              </Link>
            </li>
            <li>
              <Link href="/admin/uploadproduct" className="flex items-center py-3 px-4 hover:bg-purple-700 rounded">
                <FileUp className="mr-2" />
                Products
              </Link>
            </li>
              <li>
              <Link href="/admin/table" className="flex items-center py-3 px-4 hover:bg-purple-700 rounded">
                <ReceiptIndianRupee className="mr-2" />
                Orders
              </Link>
            </li>
            <li>
              <Link href="/admin/update" className="flex items-center py-3 px-4 hover:bg-purple-700 rounded">
                <SquarePen className="mr-2" />
                Update
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <div className='h-px bg-n-6 w-full mb-4' />
        <button className="w-full text-left px-4 py-3 flex items-center hover:bg-purple-700 rounded" onClick={signouts}>
          <LogOut className="mr-2" />
          Signout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
