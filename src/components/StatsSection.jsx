import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLanguage } from "../hook/useLanguage";


export default function StatsSection() {
  const { t, lang } = useLanguage();

  const cityTrackRef = useRef(null);
  const titleRef = useRef(null);
  const statsContainerRef = useRef(null);

  const cityBg = "https://garibook.com/_next/static/media/frame_1.312c65e3.png";
  const carGif = "https://garibook.com/_next/static/media/Sedan_GiF.9efd9ae4.gif";

  const statsData = [
    {
      count: t?.Stats?.tripRequestsCount ? `${t.Stats.tripRequestsCount.toLocaleString()}+` : "300,000+",
      label: t?.Stats?.tripRequests || "Trip Requests",
    },
    {
      count: t?.Stats?.totalCustomersCount ? `${t.Stats.totalCustomersCount.toLocaleString()}+` : "850,000+",
      label: t?.Stats?.totalCustomers || "Total Customers",
    },
    {
      count: t?.Stats?.activeDriversCount ? `${t.Stats.activeDriversCount.toLocaleString()}+` : "35,000+",
      label: t?.Stats?.activeDrivers || "Active Drivers",
    },
    {
      count: t?.Stats?.districtCoveredCount || "64",
      label: t?.Stats?.districtCovered || "District Covered",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Infinite city track loop
      gsap.to(cityTrackRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 22,
        repeat: -1,
      });

      // 2. Title slide up entrance
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      );

      // 3. Stats animated pop-out stagger
      if (statsContainerRef.current) {
        gsap.fromTo(
          statsContainerRef.current.children,
          { scale: 0.6, y: 30, opacity: 0 },
          {
            scale: 1,
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.15,
            delay: 0.4,
          }
        );
      }
    });

    return () => ctx.revert();
  }, [lang, t]);

  return (
    <section className="relative w-full bg-[#0052FF] text-white pt-52 md:pt-64 lg:pt-72 pb-16 overflow-hidden">
      {/* Content wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          {/* Section Title */}
          <div className="max-w-xl">
            <h2
              ref={titleRef}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight"
            >
              {t?.Stats?.title || "From Everyday Rides to Meaningful Journeys"}
            </h2>
          </div>

          {/* Stats Metrics Grid */}
          <div
            ref={statsContainerRef}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
          >
            {statsData.map((item, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
                  {item.count}
                </span>
                <span className="text-sm sm:text-base text-blue-100 font-medium mt-1">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Infinite City Skyline Loop */}
      <div className="absolute bottom-0 left-0 w-full h-24 sm:h-28 overflow-hidden pointer-events-none z-10 flex items-end">
        <div
          ref={cityTrackRef}
          className="flex w-[200%] h-full items-end shrink-0"
        >
          <div
            className="w-1/2 h-full bg-repeat-x bg-bottom bg-contain"
            style={{ backgroundImage: `url(${cityBg})` }}
          />
          <div
            className="w-1/2 h-full bg-repeat-x bg-bottom bg-contain"
            style={{ backgroundImage: `url(${cityBg})` }}
          />
        </div>
      </div>

      {/* Fixed Car in the bottom-left corner */}
      <div className="absolute bottom-0 left-4 sm:left-10 md:left-16 z-30 w-32 sm:w-44 md:w-52 pointer-events-none select-none">
        <img
          src={carGif}
          alt="Moving car"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}