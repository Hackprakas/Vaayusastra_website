"use client"
import React from 'react'
import { getsession } from '@/actions/route2'
import { getlist } from '@/actions/route5'

export default function page() {
  return (<>
    <div>page</div>
    <button onClick={()=>getlist()}>hi </button>
  </>
  )
}
