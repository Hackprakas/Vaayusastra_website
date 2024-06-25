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

interface ImageFile extends File {
  preview: string; // To store a preview URL for display purposes
}

export default function Page() {
  const [choice, setChoice] = useState<string>("Product1");
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState<boolean>(true);
  const [mainImage, setMainImage] = useState<ImageFile | null>(null);
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
      const imageFile: ImageFile = {
        ...file,
        preview: URL.createObjectURL(file), // Create a preview URL for the main image
      };
      setMainImage(imageFile);
    }
  };

  const handleAdditionalImagesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const selectedImages = Array.from(files).slice(0, 5); // Limit to 5 images
      const imageFiles: ImageFile[] = selectedImages.map((file) => ({
        ...file,
        preview: URL.createObjectURL(file), // Create a preview URL for each image
      }));
      setAdditionalImages((prevImages) => [...prevImages, ...imageFiles]);
    }
  };

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

        <div className="flex justify-center items-center h-[calc(100vh-1rem)]  overflow-auto w-full">
          <div className="flex justify-center mt-52 items-center w-[500px] md:w-full lg:w-[750px] px-9 md:px-32 xl:px-48 lg:px-72 py-32 md:py-12 lg:py-14">
            <div className="bg-conic-gradient p-0.25 rounded-2xl flex-1">
              <div className="flex flex-col p-12 h-full lg:p-8 border border-n-6 bg-n-8 rounded-2xl">
                <div>
                  <h4 className="h4 mb-4 font-extrabold text-center">
                    Add Product
                  </h4>
                  <div className="flex flex-col space-y-2">
                    <form className="space-y-10" encType="multipart/form-data">
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
                        <label
                          htmlFor="mainImage"
                          className="block mb-2 text-sm font-medium text-white"
                        >
                          Upload Main Image
                        </label>
                        <div className="flex items-center justify-center w-20 h-20 bg-gray-700 text-white rounded-lg cursor-pointer">
                          <label className="cursor-pointer">
                            {mainImage ? (
                              <div className="relative">
                                <img
                                  src={mainImage.preview}
                                  alt="Main Product"
                                  className="w-20 h-20 object-cover rounded-lg mb-2"
                                />
                                <button
                                  type="button"
                                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                                  onClick={() => handleRemoveImage(0, 'main')}
                                >
                                  X
                                </button>
                              </div>
                            ) : (
                              <>
                                <span className="flex items-center justify-center h-full text-gray-400 text-2xl">
                                  +
                                </span>
                                <input
                                  type="file"
                                  name="mainImage"
                                  className="hidden"
                                  accept="image/*"
                                  onChange={handleMainImageChange}
                                />
                              </>
                            )}
                          </label>
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="additionalImages"
                          className="block mb-2 text-sm font-medium text-white"
                        >
                          Upload Additional Images (4 to 5)
                        </label>
                        <div className="flex flex-wrap space-x-2 mb-2">
                          {additionalImages.map((image, index) => (
                            <div key={index} className="relative">
                              <img
                                src={image.preview}
                                alt={`Additional ${index}`}
                                className="w-20 h-20 object-cover rounded-lg mb-2"
                              />
                              <button
                                type="button"
                                className="absolute top-0 right-0 bg-gray-0 text-red-600 rounded-full p-1"
                                onClick={() => handleRemoveImage(index, 'additional')}
                              >
                                X
                              </button>
                            </div>
                          ))}
                          {additionalImages.length < 5 && (
                            <div className="flex items-center justify-center w-20 h-20 bg-gray-700 text-white rounded-lg cursor-pointer">
                              <label className="cursor-pointer">
                                <span className="flex items-center justify-center h-full text-gray-400 text-2xl">
                                  +
                                </span>
                                <input
                                  type="file"
                                  name="additionalImages"
                                  className="hidden"
                                  accept="image/*"
                                  multiple
                                  onChange={handleAdditionalImagesChange}
                                />
                              </label>
                            </div>
                          )}
                        </div>
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
