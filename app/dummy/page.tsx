"use client"
import { uploadFile } from '@/actions/route7'
import React from 'react'


export default function page() {
  return (<>
    <div>page</div>
    <form action={uploadFile}>

  <input type="file" name="file" />
  <button type="submit">Submit</button>
    </form>
  </>
  )
}
