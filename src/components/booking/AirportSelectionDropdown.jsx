import { useState, useRef, useEffect } from "react";
import { FaMapMarkerAlt, FaChevronDown } from "react-icons/fa";
import { airportsData } from "../../data/airportData";


const AirportSelectDropdown = ({ 
  label = "Drop-off Airport", 
  selectedAirport = null, 
  onSelectAirport 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // বাইরে ক্লিক করলে ড্রপডাউন বন্ধ হবে
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (airport) => {
    onSelectAirport(airport);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative flex flex-col gap-1 w-full max-w-[320px]">
      {/* Label */}
      <label className="text-xs md:text-lg font-semibold text-gray-800 flex items-center gap-1.5">
        <FaMapMarkerAlt className="text-blue-600 text-sm" /> 
        {label} <span className="text-red-500">*</span>
      </label>

      {/* Select Box Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between  rounded-lg px-3 py-2 cursor-pointer bg-white transition-all ${
          isOpen ? "border-slate-300 ring-1 ring-slate-300" : ""
        }`}
      >
        <span className={`text-sm truncate pr-2 ${selectedAirport ? "text-gray-900 font-medium" : "text-gray-400"}`}>
          {selectedAirport ? selectedAirport.name : "Select Airport"}
        </span>
        <div className="flex items-center pl-2 border-l border-gray-200">
          <FaChevronDown
            className={`text-gray-500 text-xs transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      {/* Dropdown Options List */}
      {isOpen && (
        <div className="absolute left-0 top-full mt-1.5 w-full max-h-72 overflow-y-auto bg-white rounded-xl shadow-2xl border border-gray-200 z-50 divide-y divide-gray-100">
          {airportsData.map((airport) => {
            const isSelected = selectedAirport?.id === airport.id;
            return (
              <div
                key={airport.id}
                onClick={() => handleSelect(airport)}
                className={`p-3 text-xs md:text-sm leading-relaxed cursor-pointer transition-colors ${
                  isSelected
                    ? "bg-blue-600 text-white font-medium"
                    : "text-gray-800 hover:bg-blue-50"
                }`}
              >
                {airport.name}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AirportSelectDropdown;