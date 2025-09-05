import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "SNX Dashboard",
  description: "Современный dashboard для управления проектами",
};

export default function HomePage() {
  // Перенаправляем на dashboard
  redirect("/dashboard");
}