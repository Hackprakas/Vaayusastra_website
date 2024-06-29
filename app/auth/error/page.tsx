"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Link from 'next/link'
import Button from '@/app/components/Button'

 function Page() {
  const searchParams = useSearchParams()
  const message=searchParams.get('error')
  return (
    

    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-10 text-red-500">{message}</h1>
        <Link href="/signup">
          <Button white>Go Back</Button>
        </Link>
      </div>
    </div>
   
  )
}
function Error() {
  return (
    <Suspense>
      <Page />
    </Suspense>
  )
}
export default Error
