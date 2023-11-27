import "./globals.css";
import { Cairo } from "next/font/google";
import Navbar from "./components/Navbar";
import Loading from "./loading";

const rubik = Cairo({ subsets: ["latin"] });
export const metadata = {
  title: "Scripto Code",
  description:
    "شركة سكربتو كود للحلول البرمجية, وانشاء المتاجر والمواقع الاليكترونية وتطبيقات الموبايل والديسك توب.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={rubik.className}>
      <Navbar />
      <body dir="rtl">{children}</body>
      {/* <Loading text={"جاى تحميل الصفحه"} /> */}
    </html>
  );
}
