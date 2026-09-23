import { useState, useRef, useEffect } from "react";
import { FaCar, FaChevronDown } from "react-icons/fa";
import { carsData } from "../../data/carData";
import { useLanguage } from "../../hook/useLanguage";


const CarSelectDropdown = ({ selectedCar, onSelectCar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { t } = useLanguage();

  // বাইরে ক্লিক করলে যাতে মেনু বন্ধ হয়ে যায়
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (car) => {
    onSelectCar(car);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative flex flex-col gap-1 w-full">
      {/* Label */}
      <label className="text-xs md:text-lg font-semibold text-gray-800 flex items-center gap-1.5">
        <FaCar className="text-gray-700 text-sm" /> {t.bookings.form.chooseCar} <span className="text-red-500">*</span>
      </label>

      {/* Selector Trigger */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between cursor-pointer py-1 select-none pr-3"
      >
        {selectedCar ? (
          <div className="flex items-center gap-3">
            <img
              src={selectedCar.image}
              alt={selectedCar.name}
              className="w-12 h-8 object-contain"
            />
            <div>
              <p className="text-sm font-bold text-gray-900 leading-none">{selectedCar.name}</p>
              <p className="text-[11px] text-gray-500 mt-1">{selectedCar.seats}</p>
            </div>
          </div>
        ) : (
          <span className="text-sm text-gray-400">Select Car Type</span>
        )}

        <FaChevronDown
          className={`text-gray-500 text-xs transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Popover List */}
      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-[280px] max-h-72 overflow-y-auto bg-white rounded-lg p-2.5 shadow-2xl border border-gray-100 z-50 flex flex-col gap-2">
          {carsData.map((car) => {
            const isSelected = selectedCar?.id === car.id;
            return (
              <div
                key={car.id}
                onClick={() => handleSelect(car)}
                className={`flex items-center gap-3 p-2.5 rounded-xl cursor-pointer transition-all ${
                  isSelected ? "bg-blue-50/80 border border-blue-200" : "bg-blue-50/30 hover:bg-blue-50/60"
                }`}
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-14 h-9 object-contain"
                />
                <div>
                  <h4 className="text-sm font-bold text-gray-900 leading-tight">{car.name}</h4>
                  <p className="text-xs text-gray-500 font-medium">{car.seats}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CarSelectDropdown;