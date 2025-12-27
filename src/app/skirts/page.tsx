import CategoryPage from "@/components/CategoryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skirts & More | Cherry Thrift Shop",
  description: "Browse our curated collection of skirts and accessories. Cherry-picked style at thrift prices!",
};

const skirtImages = [
  "/actual-images/skirt/skirt1.jpg",
  "/actual-images/skirt/skirt2.jpg",
  "/actual-images/skirt/skirt3.jpg",
  "/actual-images/skirt/skirt4.jpg",
  "/actual-images/skirt/skirt5.jpg",
  "/actual-images/skirt/stuff1.jpg",
  "/actual-images/skirt/stuff2.jpg",
  "/actual-images/skirt/stuff3.jpg",
  "/actual-images/skirt/stuff4.jpg",
  "/actual-images/skirt/stuff5.jpg",
  "/actual-images/skirt/stuff6.jpg",
  "/actual-images/skirt/stuff7.jpg",
];

export default function SkirtsPage() {
  return (
    <CategoryPage 
      title="Skirts & More"
      emoji="👗"
      images={skirtImages}
      color="linear-gradient(135deg, #F6B6C8 0%, #FFE4EC 100%)"
    />
  );
}
