import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Chariotads Adult Advertising Network",
  description: "Read the terms of service for Chariotads. Understand our guidelines for digital marketing for adult websites and rules for our adult traffic platform.",
  openGraph: {
    title: "Terms of Service | Chariotads Adult Advertising Network",
    description: "Read the terms of service for Chariotads. Understand our guidelines for digital marketing for adult websites and rules for our adult traffic platform.",
  },
  twitter: {
    title: "Terms of Service | Chariotads Adult Advertising Network",
    description: "Read the terms of service for Chariotads. Understand our guidelines for digital marketing for adult websites and rules for our adult traffic platform.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
