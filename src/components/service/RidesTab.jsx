import { useState } from "react";


export default function RidesTab({ rides }) {
  const [selectedCard, setSelectedCard] = useState(0);
  const carImage = "https://garibook.com/assets/images/cars/intercity_car_rental.svg";

  if (!rides?.length) return null;

  return (
    <div>
      <h1 className="text-4xl font-extrabold max-w-[280px] mb-8 leading-tight text-slate-900">
        Every Ride One Platform
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {rides.map((item, index) => {
          const isSelected = selectedCard === index;

          return (
            <div
              key={index}
              onMouseEnter={() => setSelectedCard(index)}
              className={`rounded-3xl p-8 flex flex-col justify-center gap-6 transition-all duration-300 min-h-[360px] cursor-pointer group ${
                isSelected
                  ? "bg-[#0052FF] text-white shadow-lg"
                  : "bg-[#F8FAFC] text-slate-900 hover:bg-[#0052FF] hover:text-white"
              }`}
            >
              {/* Image Container */}
              <div
                className={`w-28 h-20 flex items-center justify-center rounded-2xl transition-all duration-300 ${
                  isSelected
                    ? "bg-white shadow-sm"
                    : "bg-transparent group-hover:bg-white group-hover:shadow-sm"
                }`}
              >
                <img
                  src={carImage}
                  alt={item.title}
                  className="w-20 h-auto object-contain select-none pointer-events-none"
                />
              </div>

              {/* Text Area */}
              <div>
                <h3
                  className={`text-2xl font-bold mb-3 transition-colors duration-200 ${
                    isSelected ? "text-white" : "text-slate-900 group-hover:text-white"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed transition-colors duration-200 ${
                    isSelected ? "text-blue-100" : "text-slate-500 group-hover:text-blue-100"
                  }`}
                >
                  {item.des}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}