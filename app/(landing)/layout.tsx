import React from 'react'
import Navbar from '@/components/layout/navbar'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}

export default layout