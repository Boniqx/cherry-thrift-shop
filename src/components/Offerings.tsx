"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Offerings.module.css";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface Category {
  name: string;
  page: string;
  images: string[];
  emoji: string;
}

const categories: Category[] = [
  {
    name: "Knitted Tops",
    page: "/knitted",
    emoji: "🧶",
    images: [
      "/actual-images/knitted/kn10.jpg",
      "/actual-images/knitted/kn11.jpg",
      "/actual-images/knitted/kn12.jpg",
      "/actual-images/knitted/kn13.jpg",
      "/actual-images/knitted/kn14.jpg",
    ],
  },
  {
    name: "Fashion Blouses",
    page: "/blouses",
    emoji: "👚",
    images: [
      "/actual-images/fb/fb7.jpg",
      "/actual-images/fb/fb8.jpg",
      "/actual-images/fb/fb10.jpg",
      "/actual-images/fb/fb13.jpg",
      "/actual-images/fb/fb14.jpg",
    ],
  },
  {
    name: "Hoodies & Jackets",
    page: "/hoodies",
    emoji: "🧥",
    images: [
      "/actual-images/hoodie/hoodie4.jpg",
      "/actual-images/hoodie/hoodie5.jpg",
      "/actual-images/hoodie/hoodie6.jpg",
      "/actual-images/hoodie/hoodie7.jpg",
      "/actual-images/hoodie/hoodie8.jpg",
    ],
  },
  {
    name: "Skirts & More",
    page: "/skirts",
    emoji: "👗",
    images: [
      "/actual-images/skirt/skirt4.jpg",
      "/actual-images/skirt/skirt5.jpg",
      "/actual-images/skirt/stuff1.jpg",
      "/actual-images/skirt/stuff2.jpg",
      "/actual-images/skirt/stuff3.jpg",
    ],
  },
];

export default function Offerings() {
  const sectionRef = useRef<HTMLElement>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section on scroll
      gsap.from(".offerings-title", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".category-section", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={sectionRef} className={styles.offerings}>
        <Link href="/all-items" className={styles.sectionLink}>
          <h2 className={`${styles.offeringsHeadline} offerings-title`}>
            What We Sell ✨
          </h2>
        </Link>
        
        <div className={styles.categoriesContainer}>
          {categories.map((category, catIndex) => (
            <div key={catIndex} className={`${styles.categorySection} category-section`}>
              <h3 className={styles.categoryTitle}>
                 <Link href={category.page}>{category.emoji} {category.name}</Link>
              </h3>
              <div className={styles.imageGrid}>
                {category.images.map((image, imgIndex) => (
                  <div 
                    key={imgIndex} 
                    className={styles.imageCard}
                    onClick={() => setLightboxImage(image)}
                  >
                    <img src={image} alt={`${category.name} ${imgIndex + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="lightbox"
          onClick={() => setLightboxImage(null)}
        >
          <img src={lightboxImage} alt="Product detail" />
        </div>
      )}
    </>
  );
}
