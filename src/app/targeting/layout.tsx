import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Targeted Adult Mobile Ad Network | Global Traffic Segments",
  description: "Reach global audiences via our targeted adult mobile advertising network. Filter by GEO, device, OS, or carrier for high-quality adult traffic sources.",
  openGraph: {
    title: "Targeted Adult Mobile Ad Network | Global Traffic Segments",
    description: "Reach global audiences via our targeted adult mobile advertising network. Filter by GEO, device, OS, or carrier for high-quality adult traffic sources.",
  },
  twitter: {
    title: "Targeted Adult Mobile Ad Network | Global Traffic Segments",
    description: "Reach global audiences via our targeted adult mobile advertising network. Filter by GEO, device, OS, or carrier for high-quality adult traffic sources.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
