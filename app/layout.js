import "./globals.css";

export const metadata = {
  title: "v01d.dev",
  description: "v01d's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
