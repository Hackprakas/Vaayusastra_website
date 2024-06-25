'use client';

import Navbar from '@/app/components/navbar';
import Sidebar from '@/app/components/sidebar';
import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { adminNavigation } from '@/app/constants';
import Button from '@/app/components/Button'; // Import Button component

const UploadPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleFileUpload = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      const data = event.target?.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

      const formattedData = worksheet.map((record: any) => ({
        name: record.name,
        email: record.email,
        courseenrolled: record.courseenrolled,
        courseenrolleddate: new Date(record.courseenrolleddate).toISOString(),
        coursecompleted: record.coursecompleted,
        coursecompleteddate: record.coursecompleteddate ? new Date(record.coursecompleteddate).toISOString() : null,
        coursecompletedgrade: record.coursecompletedgrade || null,
      }));

      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      });

      if (response.ok) {
        console.log('Data uploaded successfully');
      } else {
        console.error('Failed to upload data');
      }
    };

    reader.readAsBinaryString(file);
  };


  return (
    <>
      <div className="overflow-auto flex">
        <Sidebar />
        <div className='block md:hidden lg:hidden'>
          <Navbar data={adminNavigation} position={true} hide={true} admin={false} />
        </div>
        <div className='flex justify-center items-center w-full'>
          <div className="flex justify-center items-center w-[500px] md:w-full lg:w-[750px] px-9 md:px-32 xl:px-48 lg:px-72 py-32 md:py-12 lg:py-14">
            <div className="bg-conic-gradient p-0.25 rounded-2xl flex-1">
              <div className="flex flex-col p-12 h-full lg:p-8 border border-n-6 bg-n-8 rounded-2xl">
                <div>
                  <div className="flex items-center justify-center w-full mb-6">
                    <h4 className="h4 mb-4 font-extrabold text-center">Upload Excel File</h4>
                  </div>
                  <form className="flex flex-col space-y-4" onSubmit={handleFileUpload}>
                    {/* <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} /> */}
                    <div className="flex items-center justify-center w-full">
                      <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-transparent">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg className="w-8 h-8 mb-4 text-n-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                          </svg>
                          <p className="mb-2 text-sm text-n-3"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                          <p className="text-xs text-n-3">XLSX</p>
                        </div>
                        <input id="dropzone-file" type="file" accept='.xlsx, .xls' className="hidden" onChange={handleFileChange} />
                      </label>
                    </div>
                    <Button white >Upload</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>);
};

export default UploadPage;