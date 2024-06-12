import React from 'react'
import Sidebar from '../components/sidebar'

export default function () {
  return (
    <div>
        <Sidebar />
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
  )
}
