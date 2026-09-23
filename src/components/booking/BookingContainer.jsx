import { useState } from "react";
import CarRentalForm from "../forms/CarRentalForm";
import AirportRentalForm from "../forms/AirportRentalForm";

const BookingContainer = () => {
  const [id, setId] = useState(1);

  return (
    <div className="max-w-7xl mx-auto">
      <div className=" shadow-lg flex gap-4 p-6 rounded-t-xl w-fit">
        <button
          onClick={() => setId(1)}
          className={`border border-transparent hover:border-slate-300 py-3 px-8 text-xl font-semibold rounded-lg cursor-pointer  whitespace-nowrap 
                        ${
                          id === 1
                            ? "bg-black text-white"
                            : "bg-white text-gray-800"
                        }`}
        >
          Car Rental
        </button>

        <button
          onClick={() => setId(2)}
          className={`border border-transparent hover:border-slate-300 py-3 px-8 text-xl font-semibold rounded-lg cursor-pointer  whitespace-nowrap 
                        ${
                          id === 2
                            ? "bg-black text-white"
                            : "bg-white text-gray-800"
                        }`}
        >
          Airport Rental
        </button>
      </div>

      {/* Card er content */}
      <div className="">
        {id === 1 && <CarRentalForm />}
        {id === 2 && <AirportRentalForm />}
      </div>
    </div>
  );
};

export default BookingContainer;
