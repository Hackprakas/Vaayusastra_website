import React from 'react';

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen gap-4">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500">
      </div>
        <div className='flex'>   
        <span className="text-2xl text-n-1">Loading...</span>
        </div>
    </div>
  );
}