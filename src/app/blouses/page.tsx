import CategoryPage from "@/components/CategoryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fashion Blouses | Cherry Thrift Shop",
  description: "Browse our curated collection of fashion blouses. Cherry-picked style at thrift prices!",
};

const blouseImages = [
  "/actual-images/fb/fb1.jpg",
  "/actual-images/fb/fb2.jpg",
  "/actual-images/fb/fb3.jpg",
  "/actual-images/fb/fb4.jpg",
  "/actual-images/fb/fb5.jpg",
  "/actual-images/fb/fb6.jpg",
  "/actual-images/fb/fb7.jpg",
  "/actual-images/fb/fb8.jpg",
  "/actual-images/fb/fb9.jpg",
  "/actual-images/fb/fb10.jpg",
  "/actual-images/fb/fb13.jpg",
  "/actual-images/fb/fb14.jpg",
  "/actual-images/fb/fb15.jpg",
  "/actual-images/fb/fb16.jpg",
  "/actual-images/fb/fb17.jpg",
  "/actual-images/fb/fb18.jpg",
  "/actual-images/fb/fb19.jpg",
  "/actual-images/fb/fb20.jpg",
  "/actual-images/fb/fb22.jpg",
  "/actual-images/fb/fb23.jpg",
  "/actual-images/fb/fb24.jpg",
];

export default function BlousesPage() {
  return (
    <CategoryPage 
      title="Fashion Blouses"
      emoji="👚"
      images={blouseImages}
      color="linear-gradient(135deg, #E84A73 0%, #F6B6C8 100%)"
    />
  );
}
