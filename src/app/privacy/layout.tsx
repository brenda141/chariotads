import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Chariotads Adult Web Traffic Platform",
  description: "Review the privacy policy for the Chariotads network. Learn how we securely handle data while you advertise adult websites or monetize adult traffic.",
  openGraph: {
    title: "Privacy Policy | Chariotads Adult Web Traffic Platform",
    description: "Review the privacy policy for the Chariotads network. Learn how we securely handle data while you advertise adult websites or monetize adult traffic.",
  },
  twitter: {
    title: "Privacy Policy | Chariotads Adult Web Traffic Platform",
    description: "Review the privacy policy for the Chariotads network. Learn how we securely handle data while you advertise adult websites or monetize adult traffic.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
