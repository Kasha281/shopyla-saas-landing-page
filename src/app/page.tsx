import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction"; // Uncommented import

// Commented out other imports
// import { Header } from "@/sections/uHeader";
// import { Hero } from "@/sections/Hero";
// import { LogoTicker } from "@/sections/ulogoticker";
// import { ProductShowcase } from "@/sections/ProductShowcase";
// import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <>
      {/* <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase /> */}
      <Testimonials />
      <CallToAction /> {/* Uncommented component */}
      {/* <Footer /> */}
    </>
  );
}
