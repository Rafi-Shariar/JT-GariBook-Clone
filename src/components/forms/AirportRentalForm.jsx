import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaMapMarkerAlt, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

import CarSelectDropdown from "../booking/CarSelectionDropdown";

import { carsData } from "../../data/carData";
import AirportSelectDropdown from "../booking/AirportSelectionDropdown";

const AirportRentalForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      tripType: "from_airport",
      car: carsData[1] || null,
      pickupAirport: null,
      dropoffAirport: null,
      pickupLocation: "",
      dropoffLocation: "",
      pickupDateTime: "",
    },
  });

  // Car ebong dynamic Airport field gulo register kora
  useEffect(() => {
    register("car", { required: "Please choose a car" });
    register("pickupAirport");
    register("dropoffAirport");
  }, [register]);

  const tripType = watch("tripType");
  const selectedCar = watch("car");
  const selectedPickupAirport = watch("pickupAirport");
  const selectedDropoffAirport = watch("dropoffAirport");

  const onSubmit = (data) => {
    // Validation check custom dropdown er jonno
    if (tripType === "from_airport" && !data.pickupAirport) {
      alert("Please select a pickup airport");
      return;
    }
    if (tripType === "from_home" && !data.dropoffAirport) {
      alert("Please select a drop-off airport");
      return;
    }

    console.log("Complete Form Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-b-2xl rounded-tr-2xl p-6 shadow-lg"
    >
      {/* Top Input Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-6 items-start">
        
        {/* 1. Custom Car Select Dropdown */}
        <div>
          <CarSelectDropdown
            selectedCar={selectedCar}
            onSelectCar={(car) =>
              setValue("car", car, { shouldValidate: true })
            }
          />
          {errors.car && (
            <span className="text-[11px] text-red-500 mt-1 block">
              {errors.car.message}
            </span>
          )}
        </div>

        {/* 2. Pickup Field (Conditional: Airport vs Regular Input) */}
        <div className="md:border-l md:pl-6 border-gray-200">
          {tripType === "from_airport" ? (
            <AirportSelectDropdown
              label="Pickup Airport"
              selectedAirport={selectedPickupAirport}
              onSelectAirport={(airport) =>
                setValue("pickupAirport", airport, { shouldValidate: true })
              }
            />
          ) : (
            <div className="flex flex-col gap-1">
              <label className="text-xs md:text-lg font-semibold text-gray-800 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span>
                Pickup Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Pickup Location"
                {...register("pickupLocation", {
                  required: "Pickup location is required",
                })}
                className="w-full text-xs md:text-sm text-gray-700 placeholder-gray-400 outline-none mt-2"
              />
              {errors.pickupLocation && (
                <span className="text-[11px] text-red-500">
                  {errors.pickupLocation.message}
                </span>
              )}
            </div>
          )}
        </div>

        {/* 3. Drop-off Field (Conditional: Regular Input vs Airport) */}
        <div className="md:border-l md:pl-6 border-gray-200">
          {tripType === "from_airport" ? (
            <div className="flex flex-col gap-1">
              <label className="text-xs md:text-lg font-semibold text-gray-800 flex items-center gap-1.5">
                <FaMapMarkerAlt className="text-blue-600 text-xs" />
                Drop-off Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Drop-off Location"
                {...register("dropoffLocation", {
                  required: "Drop-off location is required",
                })}
                className="w-full text-xs md:text-sm text-gray-700 placeholder-gray-400 outline-none mt-2"
              />
              {errors.dropoffLocation && (
                <span className="text-[11px] text-red-500">
                  {errors.dropoffLocation.message}
                </span>
              )}
            </div>
          ) : (
            <AirportSelectDropdown
              label="Drop-off Airport"
              selectedAirport={selectedDropoffAirport}
              onSelectAirport={(airport) =>
                setValue("dropoffAirport", airport, { shouldValidate: true })
              }
            />
          )}
        </div>

        {/* 4. Pickup Date & Time */}
        <div className="flex flex-col gap-1 md:border-l md:pl-6 border-gray-200">
          <label className="text-xs md:text-lg font-semibold text-gray-800 flex items-center gap-1.5">
            <FaCalendarAlt className="text-gray-700 text-xs" />
            Pickup Date & Time <span className="text-red-500">*</span>
          </label>
          <input
            type="datetime-local"
            {...register("pickupDateTime", {
              required: "Date & time is required",
            })}
            className="w-full text-xs md:text-sm text-gray-700 outline-none mt-2"
          />
          {errors.pickupDateTime && (
            <span className="text-[11px] text-red-500">
              {errors.pickupDateTime.message}
            </span>
          )}
        </div>
      </div>

      {/* Bottom Area: Trip Type Radios & Submit */}
      <div className="flex flex-wrap items-center justify-between pt-6 border-t border-gray-100 gap-4">
        <div className="flex items-center gap-4">
          {[
            { label: "From Airport", value: "from_airport" },
            { label: "From Home", value: "from_home" },
          ].map((type) => {
            const isChecked = tripType === type.value;
            return (
              <label
                key={type.value}
                className={`flex items-center gap-2 text-sm md:text-base font-semibold cursor-pointer px-4 py-2 rounded-xl transition-all ${
                  isChecked
                    ? "bg-blue-50/80 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <input
                  type="radio"
                  value={type.value}
                  {...register("tripType")}
                  className="accent-blue-600 w-4 h-4 cursor-pointer"
                />
                {type.label}
              </label>
            );
          })}
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-12 py-5 rounded-xl flex items-center gap-12 transition-all shadow-md cursor-pointer"
        >
          Continue <FaArrowRight />
        </button>
      </div>
    </form>
  );
};

export default AirportRentalForm;