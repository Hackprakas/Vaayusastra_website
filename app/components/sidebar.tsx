
import React from 'react';
import Image from 'next/image';
import { LogOut, Gauge, LogIn, Users, UserPlus } from 'lucide-react';
import vslogo from "../../public/VS Logo New 1_edited_edited.webp";
import { signOut } from 'next-auth/react';




function Sidebar() {

  function signouts() {
    signOut({
      callbackUrl: "/signup"
    })

  }
  return (
    <div className=" bg-purple text-white p-6 px-2 w-56 h-screen border flex justify-between flex-col border-r-[0.5px] border-n-6">
      <div>
        <div className='flex  items-center'>
          <Image src={vslogo} className='w-16 h-16 ' alt="logo" />
          <div className=" font-bold text-lg rounded ml-2">Vaayusastra Aerospace</div>
        </div>
        <div className='h-[0.3px] bg-n-6 mt-6 w-full' />
        <div>


          <nav className=" flex flex-col items-start ml-3 py-8 ">
            <ul>
              <li className="py-2  flex items-center">
                <UserPlus className="mr-2" />
                Add Admin
              </li>
              <li className="py-2  flex items-center">
                <Users className="mr-2" />
                Stats
              </li>
            </ul>
          </nav>
        </div>

      </div>
      <div >
      <div className='h-[0.3px] bg-n-6 mt-6 w-full mb-4' />

      <button className="mt-auto mb-4" onClick={() => signouts()}> {/* Added margin bottom here */}
        <ul>
          <li className="py-4 ml-3 flex items-center">
            <LogOut className="mr-2" />
            Signout
          </li>
        </ul>
      </button>
      </div>

    </div>
  );
};

export default Sidebar;
