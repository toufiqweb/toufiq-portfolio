import { Inter, Space_Grotesk, Great_Vibes } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import AmbientGlow from "@/components/AmbientGlow";
import BackToTop from "@/components/BackToTop";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "TOUFIQ — Frontend Web-Developer Portfolio",
  description: "Portfolio of Toufiq, a Frontend Web-Developer specializing in React and Design Systems.",
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
        className={`${inter.variable} ${spaceGrotesk.variable} ${greatVibes.variable} font-sans text-on-surface selection:bg-primary-container selection:text-on-primary-container relative overflow-x-hidden bg-background`}
      >
        <ThemeProvider>
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
