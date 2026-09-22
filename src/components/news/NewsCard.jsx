import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsCard({ item, bannerImg, logoImg }) {
  return (
    <div className="shrink-0 w-[320px] sm:w-[380px] flex flex-col justify-between select-none" data-aos="fade-up" data-aos-duration="1000">
      <div>
        {/* Banner Image */}
        <div className="w-full h-56 rounded-2xl overflow-hidden bg-slate-100">
          <img
            src={bannerImg}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Date */}
        <p className="text-xs text-gray-500 font-medium mt-4">
          {item.date}
        </p>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 mt-2 line-clamp-2 leading-snug">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-2 line-clamp-3 leading-relaxed">
          {item.des}
        </p>
      </div>

      {/* Footer / News Logo & Read Link */}
      <div className="flex items-center justify-between pt-6 mt-4 border-t border-slate-100">
        <img
          src={logoImg}
          alt="News source"
          className="h-9 w-auto object-contain"
        />
        <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer">
          Read Article <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}