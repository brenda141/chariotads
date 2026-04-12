import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adult Ad Networks For Publishers | Monetize Adult Website",
  description: "Maximize revenue with our adult ad publisher network platform. Monetize your website using high CPM banner ads, pop-unders, and exclusive placements.",
  openGraph: {
    title: "Adult Ad Networks For Publishers | Monetize Adult Website",
    description: "Maximize revenue with our adult ad publisher network platform. Monetize your website using high CPM banner ads, pop-unders, and exclusive placements.",
  },
  twitter: {
    title: "Adult Ad Networks For Publishers | Monetize Adult Website",
    description: "Maximize revenue with our adult ad publisher network platform. Monetize your website using high CPM banner ads, pop-unders, and exclusive placements.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
