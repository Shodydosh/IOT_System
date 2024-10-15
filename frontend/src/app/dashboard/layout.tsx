import React from 'react'
import Header from '@/components/core/Header'
// import Footer from '@/components/core/Footer'
import Sidebar from '@/components/core/Sidebar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: '',
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:pb-4 sm:pl-14">
        <div className="flex min-h-screen w-full flex-col">
            <Header />
            {children}
        </div>
      </div>
    </div>
  )
}
