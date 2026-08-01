import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";


const Josefinsans = Josefin_Sans({
  subsets: ["latin"],
});


export const metadata = {
  title: "Dr. Arnab Basu",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${Josefinsans.className} h-full antialiased`}
    >
      <body className="min-h-full bg-[#18242f] flex flex-col">
        <Navbar></Navbar>
        <main className="grow">
        {children}
        </main>
          <Toaster />
        <Footer></Footer>
        </body>
    </html>
  );
}
