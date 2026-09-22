import { ArrowRight } from "lucide-react";
import IMG from "../../assets/service/club.png";

export default function BusinessTab({ data }) {
  if (!data) return null;

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 py-8">
      {/* Left text section */}
      <div className="w-full lg:w-1/2 flex flex-col items-start">
        <h2 className="text-2xl lg:text-5xl font-bold text-slate-900 leading-tight">
          {data.title}
        </h2>
        <p className="mt-6 text-lg text-gray-500 leading-relaxed">
          {data.des}
        </p>
        <button className="bg-brand-primary text-white mt-3 flex items-center justify-between px-6 py-3.5 gap-4 rounded-xl text-sm font-semibold hover:opacity-95 transition cursor-pointer">
          <span>Learn More</span>
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Right image section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <img
          src={IMG}
          alt={data.title}
          className="w-full max-w-xl h-auto object-contain select-none pointer-events-none"
        />
      </div>
    </div>
  );
}