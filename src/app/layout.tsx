import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import "./globals.css";

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Psalm Eleazar - Software Engineer & Technology Research Analyst",
  description: "Co-op Software Engineering Student at University of Guelph and Technology Research Analyst at BMO. Passionate about full-stack development and creating innovative digital solutions.",
  keywords: ["Software Engineer", "Full Stack Developer", "Next.js", "React", "TypeScript", "Psalm Eleazar"],
  authors: [{ name: "Psalm Eleazar" }],
  creator: "Psalm Eleazar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://psalmeleazar.com",
    title: "Psalm Eleazar - Software Engineer & Technology Research Analyst",
    description: "Co-op Software Engineering Student at University of Guelph and Technology Research Analyst at BMO. Passionate about full-stack development and creating innovative digital solutions.",
    siteName: "Psalm Eleazar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Psalm Eleazar - Software Engineer & Technology Research Analyst",
    description: "Co-op Software Engineering Student at University of Guelph and Technology Research Analyst at BMO. Passionate about full-stack development and creating innovative digital solutions.",
    creator: "@psalmeleazar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inconsolata.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Navigation />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}