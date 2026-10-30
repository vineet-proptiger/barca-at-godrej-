import './globals.css'
import { Poppins, Open_Sans, Montserrat } from 'next/font/google'
import { CITY_DISPLAY, SITE_URL } from '../lib/config'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(SITE_URL || 'https://barcaatgodrejmsrcity.co.in'),
  title: 'Barca at Godrej MSR City | 2 & 3 BHK Luxury Apartments Bangalore',
  description: 'Barca at Godrej MSR City in Shettigere, Devanahalli, North Bangalore offers premium 2 & 3 BHK apartments across 14 acres within a 62-acre township. Starting from ₹1.59 Cr*.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Barca at Godrej MSR City | 2 & 3 BHK Luxury Apartments Bangalore',
    description: 'Barca at Godrej MSR City in Shettigere, Devanahalli, North Bangalore offers premium 2 & 3 BHK apartments across 14 acres within a 62-acre township. Starting from ₹1.59 Cr*.',
    url: SITE_URL || 'https://barcaatgodrejmsrcity.co.in',
    siteName: 'Barca at Godrej MSR City',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barca at Godrej MSR City | 2 & 3 BHK Luxury Apartments Bangalore',
    description: 'Barca at Godrej MSR City in Shettigere, Devanahalli, North Bangalore offers premium 2 & 3 BHK apartments across 14 acres within a 62-acre township. Starting from ₹1.59 Cr*.',
  },
  icons: {
    icon: '/favicon/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className={`${poppins.variable} ${openSans.variable} ${montserrat.variable} font-sans text-dark antialiased`}>
        <Script id="gtag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
        </Script>
        {children}
      </body>
    </html>
  )
}
