import Header from "@/components/header";
import "./globals.css";
import { Nunito } from "next/font/google";
import { ActiveSectionContextProvider } from "@/context/activeSectionContext";
import { Toaster } from "react-hot-toast";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Walid | Personal Portfolio",
  description: "Walid is a full-stack developer based in Germany.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${font.className} bg-[#131313] text-[#bbb] relative`}
      >
        <ActiveSectionContextProvider>
          
          {children}

          <Toaster
            position="top-right"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: { duration: 3000 },
              error: { duration: 5000 },
              style: {
                fontSize: "14px",
                maxWidth: "400px",
                padding: "14px 20px",
                backgroundColor: "#10121b92",
                color: "#fff",
              },
            }}
          />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
