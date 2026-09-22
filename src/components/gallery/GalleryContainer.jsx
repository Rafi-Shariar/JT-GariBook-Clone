
import { ArrowRight } from "lucide-react";
import IMG1 from '../../assets/gallery/img1.png';
import IMG2 from '../../assets/gallery/img2.png';
import IMG3 from '../../assets/gallery/img3.png';
import IMG4 from '../../assets/gallery/img4.png';
import IMG5 from '../../assets/gallery/img5.png';

const GalleryContainer = () => {
    return (
        <div className='bg-black my-16 py-12 sm:py-16'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Header Section */}
                <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6'>
                    <h1 className='max-w-2xl font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight'>
                        From Booking to Arrival It’s All in Your Hands
                    </h1>
                    <button className='bg-brand-primary hover:opacity-95 transition text-white flex items-center gap-6 sm:gap-9 py-3.5 sm:py-4 px-6 sm:px-7 rounded-xl text-base sm:text-lg font-bold shrink-0 cursor-pointer'>
                        <span>Download App</span>
                        <ArrowRight size={22} />
                    </button>
                </div>

                {/* Gallery Grid - Mobile-e single column, MD screen theke 3-column alignment */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12'>
                    <div className='md:col-span-2 rounded-2xl overflow-hidden'>
                        <img 
                            src={IMG1} 
                            alt="Gallery preview" 
                            className='w-full h-full object-cover select-none'
                        />
                    </div>
                    <div className='rounded-2xl overflow-hidden'>
                        <img 
                            src={IMG2} 
                            alt="Gallery preview" 
                            className='w-full h-full object-cover select-none'
                        />
                    </div>
                    <div className='rounded-2xl overflow-hidden'>
                        <img 
                            src={IMG3} 
                            alt="Gallery preview" 
                            className='w-full h-full object-cover select-none'
                        />
                    </div>
                    <div className='rounded-2xl overflow-hidden'>
                        <img 
                            src={IMG4} 
                            alt="Gallery preview" 
                            className='w-full h-full object-cover select-none'
                        />
                    </div>
                    <div className='rounded-2xl overflow-hidden'>
                        <img 
                            src={IMG5} 
                            alt="Gallery preview" 
                            className='w-full h-full object-cover select-none'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryContainer;