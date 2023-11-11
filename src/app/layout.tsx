'use client'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Layout/Header'
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";
import { useState } from "react";

const poppins = Poppins({ weight: ['400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [client] = useState(
    new QueryClient({ defaultOptions: { queries: { staleTime: 20000 } } })
  );


  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={poppins.className}>
        <QueryClientProvider client={client}>
          <Header />
          {children}
        </QueryClientProvider>
      </body>
    </html>
  )
}
