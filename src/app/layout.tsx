'use client'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Layout/Header'
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";
import { useState,useEffect } from "react";
import Footer from "@/components/Layout/Footer";
import { ContextProvider } from "@/utils/AppContext";
const poppins = Poppins({ weight: ['400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [client] = useState(
    new QueryClient({ defaultOptions: { queries: { staleTime: 20000 } } })
  );

  useEffect(() => {
    (function (w: Window, d: Document, s: string, l: string, i: string) {
      // @ts-ignore
      w[l] = w[l] || [];
      // @ts-ignore
      w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != 'dataLayer' ? '&l=' + l : '';
      // @ts-ignore
      j.async = true;
      // @ts-ignore
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      // @ts-ignore
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'G-M7D9QJQ1NT');
  }, []);

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={poppins.className}>
        <QueryClientProvider client={client}>
          <ContextProvider>
          <Header />
          {children}
          <Footer />
          </ContextProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
