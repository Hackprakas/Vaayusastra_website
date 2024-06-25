"use client"
import { uploadFile } from '@/actions/route7'
import Image from 'next/image'
import React from 'react'


export default function page() {
  return (<>
    <div>page</div>
    <Image src="https://joflcovvhpaafbadqsmo.supabase.co/storage/v1/object/public/vaayusastra2//vaayusastra/WIN_20240618_11_41_01_Pro.jpg" alt="nextjs" width={200} height={200} />
  </>
  )
}
