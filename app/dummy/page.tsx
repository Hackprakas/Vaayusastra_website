"use client"
import React from 'react'
import { getsession } from '@/actions/route2'

export default function page() {
  return (<>
    <div>page</div>
    <button onClick={()=>getsession()}>hi </button>
  </>
  )
}
