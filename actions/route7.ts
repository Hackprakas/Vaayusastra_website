"use server"


import { createClient } from '@supabase/supabase-js'
import prisma from "@/app/lib/db";
import { getsession, getusers } from './route2';

// Create Supabase client
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_API_KEY!)

// Upload file using standard upload
export async function uploadFile(formdata:FormData) {
  const check=await getusers();
  if(check?.users){
    const file = formdata.get('file') as File;
    const blob = new Blob([file], { type: "image/jpg" });
    
    const buffer = Buffer.from(await blob.arrayBuffer());
 const { data, error } = await supabase.storage.from('vaayusastra2').upload(`/vaayusastra/${file.name}`, buffer,{
    contentType: 'image/jpg',
   })
   const res = supabase
  .storage
  .from('vaayusastra2')
  .getPublicUrl(`/vaayusastra/${file.name}`);

    
   if (error) {
     console.log(error)
     return{
        error:"error"
     }
   } else {
     // Handle success
     console.log("data is sucess")
     return res;
     
  }
}
else if(check?.error){
  return{
    error:check.error
  }
}
}

