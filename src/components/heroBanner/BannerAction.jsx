
import { useLanguage } from '../../hook/useLanguage';
import {ArrowRight } from "lucide-react";
const BannerAction = () => {

    const { t } = useLanguage();
    
    return (
        <div className='max-w-[600px]'>

            <div>
                <h1 className='text-2xl font-medium text-gray-400'>{t.hero.subtitle}</h1>
            </div>

            <div className='mt-4'>
                <button className='bg-yellow-400 flex items-center justify-between p-6 gap-12 rounded-2xl text-lg font-medium cursor-pointer'>{t.hero.downloadBtn} <ArrowRight/></button>
            </div>
            
        </div>
    );
};

export default BannerAction;