"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'

export default function page() {
  const searchParams = useSearchParams()
  const message=searchParams.get('error')
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500">{message}</h1>
        <p className="text-lg mt-4">Please try again</p>
      </div>
    </div>
  )
}
