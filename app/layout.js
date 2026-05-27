import { Inter, Space_Grotesk, Great_Vibes } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import AmbientGlow from "@/components/AmbientGlow";
import BackToTop from "@/components/BackToTop";
import { ThemeProvider } from "@/components/ThemeProvider";
import Preloader from "@/components/Preloader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: 'swap',
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
  display: 'swap',
});

export const metadata = {
  title: "Toufiq Alahe - Frontend Developer | Building Modern Web Experiences",
  description: "Frontend Developer skilled in React, Next.js, and modern UI development, focused on building fast, responsive, and user-friendly web applications."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme');
                  if (savedTheme === 'light') {
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${greatVibes.variable} font-sans text-on-surface selection:bg-primary-container selection:text-on-primary-container relative bg-background`}
      >
        <ThemeProvider>
          <Preloader />
          <SmoothScroll>
            <AmbientGlow />
            <CustomCursor />
            <BackToTop />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
