import { pageMetadata } from "@/lib/metadata";
import "./globals.css";
import { Roboto, Montserrat } from "next/font/google";
import Footer from "@/component/shared/footer/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: pageMetadata.home.title,
  description: pageMetadata.home.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${montserrat.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
