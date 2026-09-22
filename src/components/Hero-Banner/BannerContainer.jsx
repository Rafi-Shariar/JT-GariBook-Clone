import BannerAction from './BannerAction';
import HeroTitle from './HeroTitle';

const BannerContainer = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16">
        <div className="flex items-center">
          <HeroTitle />
        </div>
        <div className="flex flex-col items-start justify-center">
          <BannerAction />
        </div>
      </div>
    </div>
  );
};

export default BannerContainer;