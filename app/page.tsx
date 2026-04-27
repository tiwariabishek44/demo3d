import Navbar from "@/components/Navbar";
import SequenceCanvas from "@/components/SequenceCanvas";
import ScrollTextLayers from "@/components/ScrollTextLayers";
import ProductListing from "@/components/ProductListing";

export default function Home() {
  return (
    <main className="relative bg-[#FFFFFF] min-h-screen">
      <Navbar />

      {/* 
        This container is 400vh tall to allow for a long, buttery smooth scroll experience.
        The SequenceCanvas is position: sticky, so it stays fixed to the viewport as we scroll 
        through this tall container.
      */}
      <div className="relative h-[400vh] w-full">
        {/* Sticky Canvas rendering the animation */}
        <SequenceCanvas />

        {/* Scroll-linked text layers that fade in and out based on overall scroll progress */}
        <ScrollTextLayers />
      </div>

      <ProductListing />

      {/* Optional: Add a footer or next section below the 660vh container if desired 
          For now, ending with the CTA is perfect. */}
    </main>
  );
}
