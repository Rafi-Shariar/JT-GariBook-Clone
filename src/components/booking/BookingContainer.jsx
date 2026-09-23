import { useState } from "react";
import CarRentalForm from "../forms/CarRentalForm";



const BookingContainer = () => {
    
    const [id, setId] = useState(1);

    return (
        <div className="max-w-7xl mx-auto">
            <div className=" shadow-lg flex gap-4 p-6 rounded-t-xl w-fit">
               
                <button 
                    onClick={() => setId(1)} 
                    className="border border-transparent hover:border-slate-300 py-3 px-8 text-xl font-semibold rounded-lg cursor-pointer bg-white whitespace-nowrap"
                >
                    Car Rental
                </button>

                <button 
                    onClick={() => setId(2)} 
                    className="border border-transparent hover:border-slate-300 py-3 px-8 text-xl font-semibold rounded-lg cursor-pointer bg-white whitespace-nowrap"
                >
                    Airport Rental
                </button>
            </div>

            {/* Card er content */}
            <div className="">
                {id === 1 && <CarRentalForm/>}
                {id === 2 && <CarRentalForm/>}
            </div>
        </div>
    );
};

export default BookingContainer;