"use server"


import { createClient } from '@supabase/supabase-js'
import prisma from "@/app/lib/db";
import { getServerSession } from 'next-auth';

async function getsession() {
  const session = await getServerSession();
  return session;
}

 async function getusers() {
  const user = await getsession();
  const currentuser = user?.user?.email as string;
  try {
    if (!currentuser) {
      return {
        error: "No user found.",
      };
    }
    const check = await prisma.allowlist.findUnique({
      where: {
        email: currentuser,
      },
    });
    if (!check) {
      return {
        error: "You are not authorized to add users.",
      };
    } else if (check && check.read && check.write) {
      
      return {
        users: "users",
      };
    } else if (check && check.read && !check.write) {
      return {
        error: "You do not have write access.",
      };
    } else if (check && !check.read && check.write) {
      return {
        error: "You do not have read access.",
      };
    }
  } catch (e) {
    return {
      error: e,
    };
  }
}

// Create Supabase client
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_API_KEY!)

// Upload file using standard upload
export async function uploadFile(file: File) {
  const check=await getusers();
  if(check?.users){
    const blob = new Blob([file], { type: "image/jpg" });
    
    const buffer = Buffer.from(await blob.arrayBuffer());
 const { data, error } = await supabase.storage.from('vaayusastra2').upload(`/vaayusastra/${file.name}`, buffer,{
    contentType: 'image/jpg',
   })
   const res = supabase.storage.from('vaayusastra2').getPublicUrl(`/vaayusastra/${file.name}`);

    
   if (res) {
     return{
        message:res
     }
   } else if(error) {
     return {
      error: error
     };
     
  }
}
else if(check?.error){
  return{
    error:check.error
  }
}
}

export async function uploadproduct(formdata:FormData){
  const session=await getusers();
  if(session?.users){
    const productname=formdata.get("name") as string;
  
    const description=formdata.get("description") as string;
    const mainimage=formdata.get("main") as File;
    const stock=formdata.get("stock") as string;
    const price=formdata.get("price") as string;
    const additionalimages=formdata.getAll("additionalImages") as File[];
    const additionalimageurls:any=[];

    try{
        
      
      
      const mainimageurl=await uploadFile(mainimage);
      if(mainimageurl?.error){
        return{
          error:mainimageurl.error
        }
      }
      await Promise.all(additionalimages.map(async (image) => {
        const url = await uploadFile(image);
        additionalimageurls.push(url?.message?.data.publicUrl); 
      }));
      await prisma.product.create({
        data:{
          name:productname,
          description:description,
          image:mainimageurl?.message?.data.publicUrl as string,
          addtionalimg:additionalimageurls,
          price:parseFloat(price),
          Stock:parseInt(stock),
        }
      });
      return{
        message:"product added successfully"
      }
    }
    catch(error){
      return{
        error:error
      }
    }

}
}

