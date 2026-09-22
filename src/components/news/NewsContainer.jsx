import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import NewsCard from './NewsCard';

import BannerPlaceholder from '../../assets/gallery/newsIMG.png';
import LogoPlaceholder from '../../assets/gallery/newsLogo.png';
import { newsData } from '../../data/newsData';



export default function NewsContainer() {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -360 : 360;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20" data-aos="fade-up" data-aos-duration="700">
      {/* Top Header: Title & Navigation Controls */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight max-w-xl">
          We Featured by Top news Platforms
        </h2>

        {/* Move controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleScroll("left")}
            aria-label="Scroll left"
            className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition cursor-pointer"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={() => handleScroll("right")}
            aria-label="Scroll right"
            className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition cursor-pointer"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Area */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {newsData.map((item) => (
          <NewsCard
            key={item.id}
            item={item}
            bannerImg={BannerPlaceholder}
            logoImg={LogoPlaceholder}
          />
        ))}
      </div>
    </section>
  );
}