"use server"


import { createClient } from '@supabase/supabase-js'

// Create Supabase client
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_API_KEY!)

// Upload file using standard upload
export async function uploadFile(formdata:FormData) {
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

    console.log(res)
   if (error) {
     console.log(error)
   } else {
     // Handle success
     console.log("data is sucess")
     
  }
}

