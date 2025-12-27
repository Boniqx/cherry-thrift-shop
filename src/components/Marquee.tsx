"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Marquee.module.css";
import Link from "next/link";

// Knitted tops images for the marquee
const knittedImages = [
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
];

export default function Marquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".marquee-track", {
        xPercent: -50,
        repeat: -1,
        duration: 25,
        ease: "linear",
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  const images = [...knittedImages, ...knittedImages];

  return (
    <Link href="/knitted" className={styles.marqueeLink}>
      <div className={styles.marqueeWrapper} ref={marqueeRef}>
        <div className={styles.marqueeContainer}>
          <div className={`${styles.marqueeTrack} marquee-track`}>
            {images.map((image, index) => (
              <div key={index} className={styles.marqueeItem}>
                <img src={image} alt={`Knitted ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
