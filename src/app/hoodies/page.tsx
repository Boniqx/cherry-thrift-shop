import CategoryPage from "@/components/CategoryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoodies & Jackets | Cherry Thrift Shop",
  description: "Browse our curated collection of hoodies and jackets. Cherry-picked style at thrift prices!",
};

const hoodieImages = [
  "/actual-images/hoodie/hoodie.jpg",
  "/actual-images/hoodie/hoodie1.jpg",
  "/actual-images/hoodie/hoodie3.jpg",
  "/actual-images/hoodie/hoodie4.jpg",
  "/actual-images/hoodie/hoodie5.jpg",
  "/actual-images/hoodie/hoodie6.jpg",
  "/actual-images/hoodie/hoodie7.jpg",
  "/actual-images/hoodie/hoodie8.jpg",
];

export default function HoodiesPage() {
  return (
    <CategoryPage 
      title="Hoodies & Jackets"
      emoji="🧥"
      images={hoodieImages}
      color="linear-gradient(135deg, #FFF0F3 0%, #FFE4EC 100%)"
    />
  );
}
