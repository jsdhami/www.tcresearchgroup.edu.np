import Certificate from '@/components/certificate/certificate'
import React from 'react'

const page = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen py-3 z-1">
        <h1 className="text-2xl font-bold pt-4">Get Your Certificate</h1>
        <Certificate/>
    </div>
    </>
  )
}

export default page


