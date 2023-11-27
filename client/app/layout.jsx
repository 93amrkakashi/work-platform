import "./globals.css";
import { Cairo } from "next/font/google";
import Navbar from "./components/Navbar";

const rubik = Cairo({ subsets: ["latin"] });
export const url ="https://work-platform-server.vercel.app/api"
export const metadata = {
  title: "Scripto Code",
  description: "شركة سكربتو كود للحلول البرمجية, وانشاء المتاجر والمواقع الاليكترونية وتطبيقات الموبايل والديسك توب.",
};

export default function RootLayout({ children }) {

  
  return (
    <html lang="en">
          <Navbar />
        <body dir="rtl" className={rubik.className}>
          {children}
        </body>
    </html>
  );
}
