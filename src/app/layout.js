import { HeaderPage } from "@/components";
import "./globals.css";
import Providers from "./Providers";

export const metadata = {
  title: "IMDB Clone",
  description: "A clone of the IMDB website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body>
            <Providers>
                <HeaderPage />
                {children}
            </Providers>
        </body>
    </html>
  );
}
