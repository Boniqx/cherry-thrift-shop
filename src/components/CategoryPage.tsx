"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import styles from "./CategoryPage.module.css";

gsap.registerPlugin(ScrollTrigger);

interface CategoryPageProps {
  title: string;
  emoji: string;
  images: string[];
  color: string;
}

export default function CategoryPage({ title, emoji, images, color }: CategoryPageProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".category-image", {
        scale: 0.8,
        opacity: 0,
        stagger: 0.05,
        duration: 0.5,
        ease: "back.out(1.3)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <main className={styles.categoryPage} ref={sectionRef}>
        <header className={styles.header} style={{ background: color }}>
          <Link href="/" className={styles.backLink}>
            ← Back to Shop
          </Link>
          <h1 className={styles.title}>
            <a></a>{emoji} {title}
          </h1>
          <p className={styles.subtitle}>
            {images.length} cherry-picked finds just for you! 🍒
          </p>
        </header>

        <section className={styles.gallery}>
          <div className={styles.grid}>
            {images.map((image, index) => (
              <div 
                key={index} 
                className={`${styles.imageCard} category-image`}
                onClick={() => setLightboxImage(image)}
              >
                <img src={image} alt={`${title} ${index + 1}`} />
                <div className={styles.imageOverlay}>
                  <span>Tap to view 👀</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className={styles.ctaSection}>
          <h2>Love what you see? 💕</h2>
          <p>Message us to reserve your favorites!</p>
          <a 
            href="https://m.me/cherrythriftshop"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Message Us 💌
          </a>
        </footer>
      </main>

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
