import { Providers } from "./Providers";
import "./globals.css";

export const metadata = {
  title: "Debug Link Tree",
  description: "This is my personal link tree that i created for myslef",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
