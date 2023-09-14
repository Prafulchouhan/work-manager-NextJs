import { ToastContainer } from "react-toastify";
import CustomNavbar from "./components/CustomNavbar";
import Footer from "./components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import UserProvider from "@/context/userProvider";
import { connectDb } from "./helper/db";

connectDb()


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <ToastContainer />
          <CustomNavbar />
          <div className="mt-2 mb-2">{children}</div>
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
