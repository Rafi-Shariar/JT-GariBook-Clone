import { ArrowRight } from "lucide-react";
import AVA from "../assets/gallery/appIMG.png";

const AppDisplaySection = () => {
  return (
   <section className="max-w-7xl mx-auto">
    <div>
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">Be a Smart Driver</h1>
    </div>
     <div
      className=" my-12"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
    >
      <div className="relative bg-[#F2B705] rounded-3xl overflow-hidden flex flex-col md:flex-row items-center justify-between min-h-[380px] lg:min-h-[440px] px-8 sm:px-14 lg:px-20 pt-10 md:pt-0">
        {/* Left Text & CTA */}
        <div className="w-full md:w-1/2 z-10 py-6 md:py-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[54px] font-extrabold text-[#0052FF] leading-tight tracking-tight">
            0% Commission <br />
            100% Freedom
          </h2>

          <div className="mt-8 sm:mt-10">
            <button className="bg-[#0052FF] hover:bg-blue-700 text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl inline-flex items-center gap-4 transition-colors cursor-pointer shadow-sm">
              <span>Download Smart Driver App</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Right Person Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-end h-full self-end">
          <img
            src={AVA}
            alt="Smart Driver App"
            className="w-auto h-[320px] sm:h-[380px] lg:h-[420px] object-contain object-bottom select-none pointer-events-none"
          />
        </div>
      </div>
    </div>
   </section>
  );
};

export default AppDisplaySection;
