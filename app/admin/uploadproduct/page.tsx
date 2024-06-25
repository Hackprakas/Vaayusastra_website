"use client"
import { useState, useEffect, ChangeEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Notfound from '@/app/components/notfound';
import Loader from '@/app/components/Loader';
import Sidebar from '@/app/components/sidebar';
import Button from '@/app/components/Button';
import Navbar from '@/app/components/navbar';
import { adminNavigation } from '@/app/constants';
import { uploadproduct } from '@/actions/route7';

interface ImageFile extends File {
  preview: string; // To store a preview URL for display purposes
}

export default function Page() {
  const [choice, setChoice] = useState<string>("Product1");
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState<boolean>(true);
  const [mainImage, setMainImage] = useState<File | null>(null);
  const [additionalImages, setAdditionalImages] = useState<ImageFile[]>([]);

  useEffect(() => {
    if (status === "authenticated") {
      setLoading(false);
    } else if (!session) {
      setLoading(false);
    }
  }, [session, status]);

  const handleMainImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setMainImage(file);
    }
  };

  // const handleAdditionalImagesChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const files = e.target.files;
  //   if (files && files.length > 0) {
  //     const selectedImages = Array.from(files).slice(0, 5); // Limit to 5 images
  //     const imageFiles: ImageFile[] = selectedImages.map((file) => ({
  //       ...file,
  //       preview: URL.createObjectURL(file), // Create a preview URL for each image
  //     }));
  //     setAdditionalImages((prevImages) => [...prevImages, ...imageFiles]);
  //   }
  // };

  const handleRemoveImage = (index: number, type: string) => {
    if (type === 'main') {
      setMainImage(null);
    } else {
      setAdditionalImages((prevImages) =>
        prevImages.filter((_, i) => i !== index)
      );
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (!session) {
    return <Notfound />;
  }

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="block md:hidden lg:hidden">
          <Navbar data={adminNavigation} position={true} hide={true} admin={false} />
        </div>

        <div className="flex justify-center items-center h-[calc(100vh-1rem)] overflow-auto w-full">
          <div className="flex justify-center mt-52 items-center w-[500px] md:w-full lg:w-[750px] px-9 md:px-32 xl:px-48 lg:px-72 py-32 md:py-12 lg:py-14">
            <div className="bg-conic-gradient p-0.25 rounded-2xl flex-1">
              <div className="flex flex-col p-12 h-full lg:p-8 border border-n-6 bg-n-8 rounded-2xl">
                <div>
                  <h4 className="h4 mb-4 font-extrabold text-center">
                    Add Product
                  </h4>
                  <div className="flex flex-col space-y-2">
                    <form className="space-y-10" action={uploadproduct}>
                      <div>
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-white"
                        >
                          Product Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="bg-gray-800 text-white sm:text-sm rounded-lg block w-full p-3"
                          placeholder="Enter Product Name"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="description"
                          className="block mb-2 text-sm font-medium text-white"
                        >
                          Description
                        </label>
                        <input
                          type="text"
                          name="description"
                          id="description"
                          className="bg-gray-800 text-white sm:text-sm rounded-lg block w-full p-2.5"
                          placeholder="Enter Description"
                          required
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-white" htmlFor="multiple_files">
                          Upload Main Image
                        </label>
                        <input className="block w-full text-sm text-white  rounded-lg cursor-pointer bg-gray-800 p-2.5" id="multiple_files" type="file" name="main" />
                      </div>
                      <div>

                        <label className="block mb-2 text-sm font-medium text-white" htmlFor="multiple_files">Upload Additional Images</label>
                        <input className="block w-full text-sm text-gray-white p-2.5 bg-gray-800 rounded-lg" id="multiple_files" type="file" multiple name="additionalImages" />

                      </div>
                      <Button white className="w-full text-black">
                        <div className="flex justify-center items-center">
                          Add Product <ArrowRight size={20} className="ml-2" />
                        </div>
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
