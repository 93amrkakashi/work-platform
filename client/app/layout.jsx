import "./globals.css";
import { Cairo } from "next/font/google";

// components
import Navbar from "./components/Navbar";
// import { ThemeProvider, useTheme } from "./context/ThemeContext";

const rubik = Cairo({ subsets: ["latin"] });

export const metadata = {
  title: "Scripto Code",
  description: "شركة سكربتو كود للحلول البرمجية, وانشاء المتاجر والمواقع الاليكترونية وتطبيقات الموبايل والديسك توب.",
};

export default function RootLayout({ children }) {

  
  return (
    <html lang="en">
      {/* <ThemeProvider> */}
          <Navbar />
        <body dir="rtl" className={rubik.className}>
          {children}
        </body>
      {/* </ThemeProvider> */}
    </html>
  );
}
