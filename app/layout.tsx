import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yvonne Müller | Active Sourcer & Recruiting Specialist",
  description: "Active sourcing, recruiting, and executive search insights — with a practical eye for AI and a bit of gamification when it fits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}