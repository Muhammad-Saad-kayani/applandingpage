import {Roboto} from 'next/font/google'
import "./globals.css";
import Resposive from './Components/Home/Navbar/Resposive';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
  const font = Roboto({
    weight : ['100','300','400','500','700','900'],
    subsets : ['latin'],
    display: 'swap',
    preload: false,
  })


export const metadata = {
  title: "App Landing Page",
  description: "Using Next js 15",
  icons: {
    icon: '/image.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}>
          <Resposive />
        {children}
      </body>
    </html>
  );
}
