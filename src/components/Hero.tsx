"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Hero.module.css";

export default function Hero() {
  const headlineRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const collageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-word-inner", {
        y: 40,
        opacity: 0,
        stagger: 0.05,
        duration: 0.5,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(subtextRef.current, {
        opacity: 0,
        y: 15,
        duration: 0.4,
        delay: 0.6,
        ease: "power2.out",
      });

      gsap.from(ctaRef.current?.children ?? [], {
        opacity: 0,
        y: 10,
        stagger: 0.08,
        duration: 0.4,
        delay: 0.8,
        ease: "power2.out",
      });

      gsap.from(".collage-img", {
        scale: 0.8,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        delay: 0.3,
        ease: "back.out(1.5)",
      });
    }, headlineRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero} ref={headlineRef}>
      {/* Left side - Image Collage */}
      <div className={styles.collageSection} ref={collageRef}>
        <div className={styles.collageGrid}>
          <div className={`${styles.collageItem} ${styles.collageItem1} collage-img`}>
            <img src="/actual-images/main-bg.jpg" alt="Cherry Thrift" />
          </div>
          <div className={`${styles.collageItem} ${styles.collageItem2} collage-img`}>
            <img src="/actual-images/main-bg-2.jpg" alt="Cherry Thrift" />
          </div>
          <div className={`${styles.collageItem} ${styles.collageItem3} collage-img`}>
            <img src="/actual-images/main-bg-3.jpg" alt="Cherry Thrift" />
          </div>
        </div>
      </div>

      {/* Right side - Content */}
      <div className={styles.heroContent}>
        <h1 className={styles.heroHeadline}>
          <span className={styles.heroLine}>
            <span className="hero-word">
              <span className="hero-word-inner">HOTTEST</span>
            </span>
          </span>
          <span className={styles.heroLine}>
            <span className="hero-word">
              <span className="hero-word-inner">THRIFT</span>
            </span>{" "}
            <span className="hero-word">
              <span className="hero-word-inner">SHOP</span>
            </span>
          </span>
          <span className={styles.heroLine}>
            <span className="hero-word">
              <span className="hero-word-inner">IN CDO</span>
            </span>
          </span>
        </h1>
        
        <p ref={subtextRef} className={styles.heroSubtext}>
          Curated girlswear. Washed to perfection. Daily steals. Cherry-picked finds. 🍒
        </p>

        <div ref={ctaRef} className={styles.heroCta}>
          <a href="#find-us" className="btn btn-primary">
            Visit Us ✨
          </a>
          <a 
            href="https://m.me/cherrythriftshop" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Message 💌
          </a>
        </div>
      </div>
    </section>
  );
}
