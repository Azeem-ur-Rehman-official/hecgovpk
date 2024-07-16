import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "hecgovpk",
  icons:{icon:['/favicon.ico?v4'],
    apple:['apple-touch-icon.png?v4'],
    shortcut:['apple-touch-icon.png?v4']
  }
 
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
    <head>
      <link rel="shorcut icon" href="https://iconape.com/wp-content/files/ts/195929/svg/195929.svg"/>
      <link rel="icon" type="image/svg" href="https://iconape.com/wp-content/files/ts/195929/svg/195929.svg"/>
    </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
