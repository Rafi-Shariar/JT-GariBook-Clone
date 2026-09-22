
import BannerImg from "../assets/steps/stepIMG.png"; // Replace with your actual banner asset path
import { useLanguage } from "../hook/useLanguage";
import { Car, ShipWheel, Banknote } from "lucide-react";
export default function StepSection() {
  const { t } = useLanguage();
  const stepData = t?.step;

  // Icon background colors matching the design (Blue, Yellow, Green)[cite: 12]
  const iconBgColors = [
    "bg-[#0052FF]", 
    "bg-[#FFB800]", 
    "bg-[#00C269]"
  ];

  const stepIcons = [Car, ShipWheel, Banknote];


  if (!stepData) return null;

  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-xl lg:text-3xl font-extrabold mb-12" data-aos="fade-up">{t.step.title}</h1>
        {/* Rounded Top Banner Image[cite: 12] */}
        <div className="w-full rounded-3xl overflow-hidden mb-12 sm:mb-16" data-aos="zoom-in">
          <img
            src={BannerImg}
            alt="Garibook journey"
            className="w-full h-auto max-h-[500px] object-cover object-center select-none"
          />
        </div>

        {/* 3 Step Features[cite: 12] */}
       <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
  {stepData.step?.map((item, index) => {
    const IconComponent = stepIcons[index] || Car;

    return (
      <div
        key={index}
        className={`flex flex-col items-start ${
          index === 0 ? "md:col-start-2" : ""
        }`}
        data-aos="fade-up"
      >
        {/* সার্কুলার আইকন কন্টেইনার[cite: 12] */}
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 shrink-0 text-white ${
            iconBgColors[index] || "bg-blue-600"
          }`}
        >
          <IconComponent size={24} strokeWidth={2.2} />
        </div>

        {/* টাইটেল[cite: 12] */}
        <h3 className="text-xl sm:text-xl font-bold tracking-tight mb-2 text-white">
          {item.title}
        </h3>

        {/* বিবরণ[cite: 12] */}
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          {item.des}
        </p>
      </div>
    );
  })}
</div>
      </div>
    </section>
  );
}