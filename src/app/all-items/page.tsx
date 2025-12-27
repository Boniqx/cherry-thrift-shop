"use client";

import Link from "next/link";
import styles from "@/components/CategoryPage.module.css";

const categories = [
  { name: "Knitted Tops", path: "knitted", count: 23 },
  { name: "Fashion Blouses", path: "fb", count: 21 },
  { name: "Hoodies & Jackets", path: "hoodie", count: 8 },
  { name: "Jeans", path: "jeans", count: 4 },
  { name: "Skirts", path: "skirt", count: 12 },
  { name: "Sandals", path: "sandals", count: 4 },
  { name: "Plates & Mugs", path: "plates-and-mugs", count: 3 },
];

export default function AllItemsPage() {
  const allImages: string[] = [];
  
  categories.forEach(cat => {
    // We'll manually list common patterns since we can't dynamic import at runtime easily without a server-side list
    // Most follow folder-name[1-count].extension pattern or similar
    // For simplicity, we'll use a representative set or simulate the aggregation
    for (let i = 1; i <= cat.count; i++) {
        // Special mapping for different folder conventions if they exist
        let fileName = `${cat.path}${i}.jpg`;
        if (cat.path === 'knitted') fileName = `kn${i === 1 ? '' : i}.jpg`;
        if (cat.path === 'fb') fileName = `fb${i}.jpg`;
        if (cat.path === 'hoodie') fileName = `hoodie${i}.jpg`;
        if (cat.path === 'jeans') fileName = `jeans${i}.jpg`;
        if (cat.path === 'skirt') fileName = `skirt${i}.jpg`;
        if (cat.path === 'sandals') fileName = `sandals${i}.jpg`;
        if (cat.path === 'plates-and-mugs') fileName = `pm${i}.jpg`;

        allImages.push(`/actual-images/${cat.path}/${fileName}`);
    }
  });

  // Adding stuff from skirts folder which had different names in Offerings.tsx
  allImages.push("/actual-images/skirt/stuff1.jpg");
  allImages.push("/actual-images/skirt/stuff2.jpg");
  allImages.push("/actual-images/skirt/stuff3.jpg");

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <Link href="/" className={styles.backLink}>
          ← Back to Shop
        </Link>
        <h1 className={styles.title}>All Thrift Finds ✨</h1>
        <p className={styles.description}>
          Everything currently in our cherry-picked collection.
        </p>
      </header>

      <div className={styles.grid}>
        {allImages.map((src, index) => (
          <div key={index} className={styles.card}>
            <img 
              src={src} 
              alt={`Cherry find ${index + 1}`} 
              onError={(e) => (e.currentTarget.parentElement!.style.display = 'none')}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
