import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

import tmtBars from "@/assets/tmt-bars.jpg";
import steelRods from "@/assets/steel-rods.jpg";
import steelPipes from "@/assets/steel-pipes.jpg";
import steelSheets from "@/assets/steel-sheets.jpg";
import structuralSteel from "@/assets/structural-steel.jpg";

export const products = [
  {
    name: "TMT Bars",
    description: "High-strength thermo-mechanically treated bars for reinforced concrete construction.",
    image: tmtBars,
  },
  {
    name: "Steel Rods",
    description: "Premium quality round steel rods for industrial and construction applications.",
    image: steelRods,
  },
  {
    name: "Steel Pipes",
    description: "Durable galvanized and mild steel pipes for plumbing and structural use.",
    image: steelPipes,
  },
  {
    name: "Steel Sheets",
    description: "Flat steel sheets in various gauges for roofing, fabrication, and industrial use.",
    image: steelSheets,
  },
  {
    name: "Structural Steel",
    description: "I-beams, H-beams, and channels for heavy-duty structural projects.",
    image: structuralSteel,
  },
];

const ProductCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <button
        onClick={() => scroll("left")}
        className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-accent p-2 text-accent-foreground shadow-lg transition-transform hover:scale-110 hidden md:flex"
        aria-label="Scroll left"
      >
        <ChevronLeft size={20} />
      </button>
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
        style={{ scrollbarWidth: "none" }}
      >
        {products.map((product, i) => (
          <ProductCard key={product.name} {...product} index={i} />
        ))}
      </div>
      <button
        onClick={() => scroll("right")}
        className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-accent p-2 text-accent-foreground shadow-lg transition-transform hover:scale-110 hidden md:flex"
        aria-label="Scroll right"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default ProductCarousel;
