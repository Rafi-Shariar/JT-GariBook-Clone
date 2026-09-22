
import { ArrowRight } from "lucide-react";
import NRBLogo from "../../assets/footer/NRB.png"
import Link3Logo from "../../assets/footer/LINK3.png";

export default function FooterPartner() {
  return (
    <div className="py-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
      {/* App Download CTA */}
      <div className="lg:col-span-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <h3 className="text-white text-2xl sm:text-3xl font-extrabold tracking-tight max-w-xs leading-tight">
          Download Our <br /> Garibook Mobile App
        </h3>
        <button className="bg-[#0052FF] hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3.5 rounded-xl inline-flex items-center gap-4 transition cursor-pointer shrink-0">
          <span>Download App</span>
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Partner: A Product By */}
      <div className="lg:col-span-3 flex flex-col">
        <span className="text-white font-bold text-2xl mb-3">A Product By</span>
        <div className="flex items-center gap-3">
          <img src={NRBLogo} alt="NRB Solution" className="h-9 w-auto object-contain" />
          <div>
            <h5 className="text-white text-base font-semibold">NRB Solution Ltd.</h5>
            <a href="#" className="text-yellow-400 hover:text-white text-xs inline-flex items-center gap-1 transition">
              Visit Website &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* Partner: Powered By */}
      <div className="lg:col-span-3 flex flex-col">
        <span className="text-white font-bold text-2xl mb-3">Powered By</span>
        <div className="flex items-center gap-3">
          <img src={Link3Logo} alt="Link 3" className="h-9 w-auto object-contain" />
          <div>
            <h5 className="text-white text-base font-semibold">Link 3 Technologies</h5>
            <a href="#" className="text-yellow-400 hover:text-white text-xs inline-flex items-center gap-1 transition">
              Visit Website &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}