import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adish Hussain | AI/ML & Full Stack Developer",
  description:
    "Portfolio of Adish Hussain — Final year B.Tech student specializing in AI/ML and full stack development. Open to full-time opportunities.",
  keywords: ["Adish Hussain", "portfolio", "AI/ML", "full stack developer", "machine learning", "Python", "VIT Bhopal"],
  openGraph: {
    title: "Adish Hussain | AI/ML & Full Stack Developer",
    description: "Portfolio of Adish Hussain — AI/ML & Full Stack Developer. Open to full-time opportunities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${firaCode.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
