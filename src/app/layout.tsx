import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import ReactQueryClientProvider from "@/components/query-client-provider";
import ReduxProvider from "@/components/redux-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-dvh">
      <body className={inter.className}>
        <ReduxProvider>
          <ReactQueryClientProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </ReactQueryClientProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
