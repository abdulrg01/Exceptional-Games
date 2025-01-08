import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Game | Online Gaming Platform",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, laborum culpa. Cum numquam accusantium laboriosam dignissimos molestias! Sequi, ex nostrum!",
  keywords:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, laborum culpa.",
  // openGraph: {
  //   title: 'K5Win | Premium Online Gaming & Betting Platform',
  //   description: 'Experience the thrill of premium online gaming with K5Win.',
  //   images: [
  //     {
  //       url: 'https://images.unsplash.com/photo-1460472178825-e5240623afd5?q=80&w=2069&auto=format&fit=crop',
  //       width: 1200,
  //       height: 630,
  //       alt: 'K5Win Gaming Platform',
  //     },
  //   ],
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'K5Win | Premium Online Gaming & Betting Platform',
  //   description: 'Experience the thrill of premium online gaming with K5Win.',
  //   images: ['https://images.unsplash.com/photo-1460472178825-e5240623afd5?q=80&w=2069&auto=format&fit=crop'],
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
