import React from 'react';
import Image from 'next/image';
import { LogOut, Gauge, LogIn, Users, UserPlus } from 'lucide-react';
import vslogo from "../../public/VS Logo New 1_edited_edited.webp";

function Sidebar () {
  return (
    <div className="bg-purple text-white w-64 min-h-screen">
      <div className='flex p-4'>

      <Image src={vslogo} width={60} height={60} alt="logo"/>
      <div className="p-4 font-bold text-lg rounded">Vaayusastra Aerospace</div>
      </div>
      <nav className="p-4">
        <ul>
          <li className="py-2 px-4 flex items-center"> 
            <Gauge className="mr-2" /> 
            Dashboard
          </li>
          <li className="py-2 px-4 flex items-center"> 
            <UserPlus className="mr-2" /> 
            Add Admin
          </li>
          <li className="py-2 px-4 flex items-center"> 
            <Users className="mr-2" /> 
            Stats
          </li>
        </ul>
      </nav>
      <div className="p-4 absolute bottom-0 left-0 right-0">
        <ul>
          <li className="py-2 px-4 flex items-center">
            <LogOut className="mr-2" /> 
            Signout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
