import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./globals.css";
import ScrollToTop from "./home/components/ScrollToTop";

export const metadata = {
  title: "StackMSP | Run IT operations from one stack",
  description:
    "The modern, unified operations workspace for service providers. Integrated RMM, CRM, and PSA software.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col justify-between bg-slate-50 text-brand-dark">
        <ScrollToTop /> 
        <div>
          <Navbar />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}