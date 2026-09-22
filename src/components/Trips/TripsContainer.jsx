
import { useLanguage } from "../../hook/useLanguage";
import IMG1 from "../../assets/group/IMG1.png";
import IMG2 from "../../assets/group/IMG2.png";
import IMG3 from "../../assets/group/IMG3.png";

const tripImages = [IMG1, IMG2, IMG3];

const TripsContainer = () => {
  const { t } = useLanguage();
  const tripsData = t?.trips;

  // '--' ba '—' theke title ke duita line-e split kora
  const titleParts = tripsData?.title
    ? tripsData.title.split(/\s*[-—]+\s*/)
    : [];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-24">
      {/* Title with dash break */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-10" data-aos="fade-up"
     data-aos-anchor-placement="center-center">
        {titleParts.length > 1 ? (
          <>
            <span>{titleParts[0]} —</span>
            <br />
            <span>{titleParts[1]}</span>
          </>
        ) : (
          tripsData?.title
        )}
      </h2>

      {/* 1:1 Square Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {tripsData?.trip?.map((item, index) => (
          <div
            key={index}
            className="relative aspect-square w-full rounded-3xl overflow-hidden shadow-sm group select-none"
            data-aos="fade-up" data-aos-duration="1000"
          >
            {/* Background Image */}
            <img
              src={tripImages[index]}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Top Gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* Top-Left Card Title */}
            <div className="absolute top-6 left-6 z-10">
              <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight drop-shadow-sm">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TripsContainer;