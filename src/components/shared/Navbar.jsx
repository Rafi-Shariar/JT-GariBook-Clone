import { useState, useEffect } from "react";
import { useLanguage } from "../../hook/useLanguage";
import { Menu, X, Languages } from "lucide-react";
import Logo from "./../../assets/logo.png";

export default function Navbar() {
  const { lang, toggleLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showTopToggle, setShowTopToggle] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowTopToggle(false);
      } else {
        setShowTopToggle(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!t || !t.nav) return null;

  return (
    <div className="bg-white p-2 sticky top-0 z-50">
      {/* Top language toggle - hides on scroll */}
      <div
        className={`hidden lg:flex justify-end transition-all duration-300 ease-in-out overflow-hidden ${
          showTopToggle ? "max-h-12 opacity-100 mb-1" : "max-h-0 opacity-0 mb-0 pointer-events-none"
        }`}
      >
        <button
          onClick={toggleLanguage}
          className="bg-brand-primary px-2 py-2 flex gap-2 rounded-lg text-white text-sm cursor-pointer"
        >
          <Languages size={14} />
          {lang === "en" ? "বাংলা" : "English"}
        </button>
      </div>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={Logo} alt="garibook logo" className="w-14 h-14" />
          <h1 className="text-2xl">{t.nav.title}</h1>
        </div>

        <div className="flex gap-6 items-center">
          <ul className="hidden lg:flex items-center gap-6 text-lg font-medium">
            <li className="relative group cursor-pointer hover:text-blue-600 transition">
              {t.nav.aboutUs}
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </li>
            <li className="relative group cursor-pointer hover:text-blue-600 transition">
              {t.nav.earnWithGaribook}
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </li>
            <li className="relative group cursor-pointer hover:text-blue-600 transition">
              {t.nav.garibookBussiness}
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </li>
            <li className="relative group cursor-pointer hover:text-blue-600 transition">
              {t.nav.garibookClub}
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </li>
            <li className="relative group cursor-pointer hover:text-blue-600 transition">
              {t.nav.compaign}
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </li>
            <li className="relative group cursor-pointer hover:text-blue-600 transition">
              {t.nav.blogs}
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </li>
          </ul>

          <div>
            <button className="bg-brand-primary py-2 px-4 text-sm text-white rounded-lg">
              {t.nav.login}
            </button>
          </div>

          {/* Hamburger for mobile and tablet */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-1 text-slate-800 cursor-pointer"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile & Tablet Fullscreen Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#0052FF] flex flex-col justify-between p-6 lg:hidden">
          <div className="flex items-center justify-end gap-6 text-white">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-base font-medium cursor-pointer"
            >
              <Languages size={18} />
              {lang === "en" ? "English" : "বাংলা"}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 cursor-pointer"
            >
              <X size={28} />
            </button>
          </div>

          <ul className="flex flex-col items-center justify-center gap-7 text-white text-lg font-medium">
            <li onClick={() => setIsOpen(false)} className="cursor-pointer">
              {t.nav.aboutUs}
            </li>
            <li onClick={() => setIsOpen(false)} className="cursor-pointer">
              {t.nav.earnWithGaribook}
            </li>
            <li onClick={() => setIsOpen(false)} className="cursor-pointer">
              {t.nav.garibookBussiness}
            </li>
            <li onClick={() => setIsOpen(false)} className="cursor-pointer">
              {t.nav.garibookClub}
            </li>
            <li onClick={() => setIsOpen(false)} className="cursor-pointer">
              {t.nav.compaign}
            </li>
            <li onClick={() => setIsOpen(false)} className="cursor-pointer">
              {t.nav.blogs}
            </li>
          </ul>

          <div />
        </div>
      )}
    </div>
  );
}
