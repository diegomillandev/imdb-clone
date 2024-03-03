import { HeaderPage } from "@/components";
import "./globals.css";

export const metadata = {
  title: "IMDB Clone",
  description: "A clone of the IMDB website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-800">
        <HeaderPage />
        {children}
      </body>
    </html>
  );
}
