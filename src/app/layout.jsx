import "./globals.css";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./providers.jsx";

import { Providers } from "./redux/provider";
import { store } from "./redux/store.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amazon",
  description: "Amazon Simple",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers store={store}>
          <NextAuthProvider>{children}</NextAuthProvider>
        </Providers>
      </body>
    </html>
  );
}
