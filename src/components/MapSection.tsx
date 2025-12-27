"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./MapSection.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function MapSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".map-title", {
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

      gsap.from(".map-container", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".map-info-item", {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="find-us" ref={sectionRef} className={styles.mapSection}>
      <h2 className={`${styles.mapHeadline} map-title`}>
        📍 Come Find Us!
      </h2>
      
      <div className={`${styles.mapContainer} map-container`}>
        <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d368.19165046685316!2d124.64946346822185!3d8.477542664154404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fff2d05f118f0f%3A0xcf69f9d202453449!2sUk%20Is%20Ok!5e0!3m2!1sen!2sph!4v1766844333246!5m2!1sen!2sph" 
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Cherry Thrift Shop Location"
        />
      </div>

      <div className={styles.mapInfo}>
        <div className={`${styles.mapInfoCard} map-info-item`}>
          <span className={styles.infoEmoji}>🏪</span>
          <p className={styles.mapAddress}>
            <strong>UK IS OK</strong><br />
            Located in the heart of Cagayan de Oro<br />
            Walk-ins welcome. Cherry finds daily! 🍒
          </p>
        </div>
        
        <div className={`${styles.mapHoursCard} map-info-item`}>
          <span className={styles.infoEmoji}>🕐</span>
          <div className={styles.mapHours}>
            <p><strong>STORE HOURS</strong></p>
            <p>Monday - Saturday: 10AM - 8PM</p>
            <p>Sunday: 12PM - 6PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}
