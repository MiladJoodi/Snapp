import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "سوپر اپلیکیشن اسنپ | سامانه هوشمند حمل‌ونقل | تاکسی اینترنتی",
  description: "اسنپ، سوپراپلیکیشن ایرانی - درخواست تاکسی، سفارش غذا، خرید سوپرمارکتی، رزرو بلیط و...",
  generator: "v0.app",
  icons: {
    icon: "/Untitled.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-sans antialiased">
        <Navbar />
        <main className="mt-[70px] md:mt-[90px]">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
