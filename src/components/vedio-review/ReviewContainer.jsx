import React, { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import TestimonialCard from "./TestimonialCard";
import VideoModal from "./VedioModal";
import { reviewsData } from "../../data/reviewData";



export default function ReviewContainer() {
  const [activeVideoId, setActiveVideoId] = useState(null);
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollOffset = direction === "left" ? -390 : 390;
      scrollRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
    }
  };

  return (
   <section className="bg-sky-50 py-6">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Our Passengers Speak For Us
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed mt-4">
            Our journey was seamless and enjoyable from start to finish. The booking process was straightforward, and the staff were incredibly attentive,
            ensuring we felt comfortable throughout the trip.
          </p>
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
          <button
            onClick={() => handleScroll("left")}
            aria-label="Previous"
            className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition cursor-pointer shadow-2xs"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={() => handleScroll("right")}
            aria-label="Next"
            className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition cursor-pointer shadow-2xs"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Cards Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {reviewsData.map((item) => (
          <TestimonialCard
            key={item.id}
            item={item}
            onPlay={(id) => setActiveVideoId(id)}
          />
        ))}
      </div>

      {/* In-app Video Modal Player */}
      <VideoModal
        videoId={activeVideoId}
        onClose={() => setActiveVideoId(null)}
      />
    </div>
   </section>
  );
}