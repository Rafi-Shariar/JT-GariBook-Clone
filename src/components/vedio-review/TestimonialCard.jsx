import React from "react";
import { Play } from "lucide-react";

export default function TestimonialCard({ item, onPlay }) {
  // YouTube standard high-quality thumbnail
  const thumbUrl = `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`;

  return (
    <div className="shrink-0 w-[300px] sm:w-[360px] md:w-[380px] flex flex-col select-none">
      {/* Thumbnail with Play Button */}
      <div
        onClick={() => onPlay(item.videoId)}
        className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-900 cursor-pointer group shadow-sm"
      >
        <img
          src={thumbUrl}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

        {/* Circular Red Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-[#E50914] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
            <Play size={24} fill="currentColor" className="ml-1" />
          </div>
        </div>
      </div>

      {/* Passenger Info */}
      <div className="mt-4">
        <h4 className="text-lg font-bold text-slate-900 leading-snug">
          {item.name}
        </h4>
        <p className="text-sm text-slate-500 font-normal mt-0.5">
          {item.role}
        </p>
      </div>
    </div>
  );
}