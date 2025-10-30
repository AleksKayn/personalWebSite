import Header from "@/components/header";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata = {
  title: "Tara Bar | Cosmic Cocktails & High Spirits",
  description:
    "Tara Bar is where neon nights meet golden hour cocktails. Book a table and float through our galaxy of flavor tonight.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} bg-gradient-to-b from-[#0f061b] via-[#1a0f2b] to-[#220f33] text-[rgba(255,255,255,0.92)] relative pt-28 sm:pt-36 antialiased dark:bg-gradient-to-b dark:from-[#040108] dark:via-[#090414] dark:to-[#140923] dark:text-[#f8f4ff]`}
      >
        <div
          className="pointer-events-none absolute -top-40 -left-24 h-[36rem] w-[36rem] -z-10 blur-[12rem] opacity-80 mix-blend-screen"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(255, 180, 103, 0.6), rgba(255, 94, 234, 0) 70%)",
          }}
        ></div>
        <div
          className="pointer-events-none absolute -top-32 right-[-10rem] h-[40rem] w-[40rem] -z-10 blur-[12rem] opacity-70 mix-blend-screen"
          style={{
            background:
              "radial-gradient(circle at 80% 10%, rgba(94, 216, 255, 0.55), rgba(40, 15, 92, 0) 65%)",
          }}
        ></div>
        <div
          className="pointer-events-none absolute bottom-[-18rem] left-1/2 h-[45rem] w-[45rem] -translate-x-1/2 -z-10 blur-[14rem] opacity-60 mix-blend-screen"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(112, 65, 255, 0.58), rgba(255, 201, 123, 0.12))",
          }}
        ></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
