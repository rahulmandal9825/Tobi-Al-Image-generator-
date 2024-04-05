import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { Variable } from "lucide-react";


const IBMPlex = IBM_Plex_Sans({ subsets: ["latin"] ,
   weight:['400','500','600','700'],
   variable: '--font-ibm-plex'});

export const metadata: Metadata = {
  title: "GeniusImageAI",
  description: "AI-powered image Genrator and Ai-Image Assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <ClerkProvider appearance={{ variables: { colorPrimary: '#FF8C00'}}}>
       <html lang="en">
      <body className={cn("antialiased" , IBMPlex.variable)}>{children}</body>
    </html>
    </ClerkProvider>
   
  );
}
