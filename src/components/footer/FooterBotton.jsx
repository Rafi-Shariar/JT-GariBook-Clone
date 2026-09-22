
import Logo from "../../assets/logo.png";

export default function FooterBottom() {
  return (
    <div className="pt-8 pb-10 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-zinc-400">
      {/* Brand Logo & Links */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-white font-bold text-xl">
          <img src={Logo} alt="garibook" className="h-9 w-auto object-contain rounded-full" />
          <span>garibook</span>
        </div>
        <span className="hover:text-white cursor-pointer transition text-sm">Terms & Conditions</span>
        <span className="hover:text-white cursor-pointer transition text-sm">Privacy Policy</span>
      </div>

      {/* Trade License */}
      <div className="text-center md:text-left text-base">
        Trade license number: <br className="sm:hidden" />
        <span className="text-zinc-300">TRAD/DNCC/013806/2024</span>
      </div>

      {/* Copyright */}
      <div className="text-base">
        &copy; 2026 Garibook.com
      </div>
    </div>
  );
}