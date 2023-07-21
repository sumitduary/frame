import React from 'react'
import dynamic from 'next/dynamic';
import { AuthGuard } from '@/pages/context'
export default dynamic(() => Promise.resolve(Layout), { ssr: false });

function Layout({children}) {
    return (
      <html lang="en">
        {/*
          <head /> will contain the components returned by the nearest parent
          head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
        */}
        <head />
        <body>
          <AuthGuard>{children}</AuthGuard>
        </body>
      </html>
    )
  }