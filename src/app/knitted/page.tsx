import CategoryPage from "@/components/CategoryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knitted Tops | Cherry Thrift Shop",
  description: "Browse our curated collection of knitted tops. Cherry-picked style at thrift prices!",
};

const knittedImages = [
  "/actual-images/knitted/KN1.jpg",
  "/actual-images/knitted/kn.jpg",
  "/actual-images/knitted/kn3.jpg",
  "/actual-images/knitted/kn4.jpg",
  "/actual-images/knitted/kn5.jpg",
  "/actual-images/knitted/kn6.jpg",
  "/actual-images/knitted/kn7.jpg",
  "/actual-images/knitted/kn8.jpg",
  "/actual-images/knitted/kn9.jpg",
  "/actual-images/knitted/kn10.jpg",
  "/actual-images/knitted/kn11.jpg",
  "/actual-images/knitted/kn12.jpg",
  "/actual-images/knitted/kn13.jpg",
  "/actual-images/knitted/kn14.jpg",
  "/actual-images/knitted/kn18.jpg",
  "/actual-images/knitted/kn20.jpg",
  "/actual-images/knitted/kn21.jpg",
  "/actual-images/knitted/kn22.jpg",
  "/actual-images/knitted/kn23.jpg",
  "/actual-images/knitted/kn24.jpg",
  "/actual-images/knitted/kn25.jpg",
  "/actual-images/knitted/kn26.jpg",
];

export default function KnittedPage() {
  return (
    <CategoryPage 
      title="Knitted Tops"
      emoji="🧶"
      images={knittedImages}
      color="linear-gradient(135deg, #FFF0F3 0%, #F6B6C8 100%)"
    />
  );
}
