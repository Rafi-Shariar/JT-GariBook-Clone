
import { useLanguage } from "../../hook/useLanguage";

import { useState } from "react";
import RidesTab from "./RidesTab";
import BusinessTab from "./BussinessTab";
import ClubTab from "./ClubTab";
import VmsTab from "./VmsTab";

export default function ServiceContainer() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const services = t?.services;
  if (!services) return null;

  return (
    <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <h1 className="font-extrabold text-3xl sm:text-4xl text-gray-900 mb-6" data-aos="fade-up" data-aos-duration="500">
        {services.title}
      </h1>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 mb-10" data-aos="fade-up" data-aos-duration="500">
        {services.options?.map((label, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-2.5 rounded-xl font-semibold text-sm sm:text-base transition cursor-pointer ${
              activeTab === index
                ? "bg-[#0052FF] text-white"
                : "bg-[#EAEAEA] text-slate-700 hover:bg-slate-200"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Tab Contents */}
      <div>
        {activeTab === 0 && <RidesTab rides={services.rides} />}
        {activeTab === 1 && <BusinessTab data={services.garibookBussiness} />}
        {activeTab === 2 && <ClubTab data={services.garibookClub} />}
        {activeTab === 3 && <VmsTab data={services.vms} />}
      </div>
    </div>
  );
}