
import { ArrowUp } from "lucide-react";
import FooterPartner from "../footer/FooterPartner";
import FooterBottom from "../footer/FooterBotton";
import FooterLinks from "../footer/FooterLinks";


export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black text-white pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <FooterLinks />
        <FooterPartner />
        <FooterBottom />
      </div>

      {/* Floating Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-40 bg-[#0052FF] hover:bg-blue-700 text-white p-2.5 rounded-lg shadow-lg transition cursor-pointer"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}