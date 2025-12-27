"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Sukis.module.css";

gsap.registerPlugin(ScrollTrigger);

const sukiImages = [
  "/actual-images/suki-winners/suki1.jpg",
  "/actual-images/suki-winners/suki2.jpg",
  "/actual-images/suki-winners/suki3.jpg",
  "/actual-images/suki-winners/suki4.jpg",
  "/actual-images/suki-winners/suki5.jpg",
  "/actual-images/suki-winners/suki6.jpg",
];

export default function Sukis() {
  const sectionRef = useRef<HTMLElement>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".sukis-title", {
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

      gsap.from(".sukis-subtitle", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".suki-image", {
        scale: 0.8,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "back.out(1.5)",
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
      <section ref={sectionRef} className={styles.sukis}>
        <h2 className={`${styles.sukisHeadline} sukis-title`}>
          🎉 Our Lucky Suki Winners!
        </h2>
        <p className={`${styles.sukisSubtitle} sukis-subtitle`}>
          You could be next just by purchasing daily! 🍒✨
        </p>
        
        <div className={styles.sukisGrid}>
          {sukiImages.map((image, index) => (
            <div 
              key={index} 
              className={`${styles.sukiCard} suki-image`}
              onClick={() => setLightboxImage(image)}
            >
              <img src={image} alt={`Lucky Suki Winner ${index + 1}`} />
              <div className={styles.sukiOverlay}>
                <span className={styles.sukiBadge}>Winner #{index + 1} 🏆</span>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.sukisCta}>
          💖 Tap to see our happy winners!
        </p>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="lightbox"
          onClick={() => setLightboxImage(null)}
        >
          <img src={lightboxImage} alt="Lucky Suki Winner" />
        </div>
      )}
    </>
  );
}
