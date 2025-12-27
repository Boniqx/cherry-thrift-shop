import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Offerings from "@/components/Offerings";
import Sukis from "@/components/Sukis";
import MapSection from "@/components/MapSection";
export const dynamic = "force-static";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Offerings />
      <Sukis />
      <MapSection />
      
      <footer className="footer" >
        <div className="footer-content">
          <p className="footer-brand">CHERRY THRIFT SHOP</p>
          <p className="footer-tagline">Cherry-picked finds since 2024</p>
          <div className="footer-social">
            <a 
              href="https://facebook.com/cherrythriftshop" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a 
              href="https://instagram.com/cherrythriftshop" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
          <p className="footer-copyright">© 2024 Cherry Thrift Shop. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
