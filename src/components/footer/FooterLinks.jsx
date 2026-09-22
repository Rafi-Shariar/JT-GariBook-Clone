
export default function FooterLinks() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 pb-16 ">
      {/* Col 1: Garibook */}
      <div>
        <h4 className="text-white text-lg font-bold mb-5">garibook</h4>
        <ul className="space-y-3 text-base text-zinc-400">
          <li className="hover:text-white transition cursor-pointer">About Us</li>
          <li className="hover:text-white transition cursor-pointer">Customer Reviews</li>
          <li className="hover:text-white transition cursor-pointer">Career</li>
          <li className="hover:text-white transition cursor-pointer">Newsroom</li>
          <li className="hover:text-white transition cursor-pointer">Garibook Map</li>
        </ul>
      </div>

      {/* Col 2: Services */}
      <div>
        <h4 className="text-white text-lg font-bold mb-5">Services</h4>
        <ul className="space-y-3 text-base text-zinc-400">
          <li className="hover:text-white transition cursor-pointer">Intercity Rental</li>
          <li className="hover:text-white transition cursor-pointer">Airport Pick and Drop</li>
          <li className="hover:text-white transition cursor-pointer">Hourly Rental</li>
          <li className="hover:text-white transition cursor-pointer">Vehicle Management System (VMS)</li>
        </ul>
      </div>

      {/* Col 3: Become Our Partner */}
      <div>
        <h4 className="text-white text-lg font-bold mb-5">Become Our Partner</h4>
        <ul className="space-y-3 text-base text-zinc-400">
          <li className="hover:text-white transition cursor-pointer">Become a Smart Driver</li>
          <li className="hover:text-white transition cursor-pointer">Become a member of Garibook Club</li>
          <li className="hover:text-white transition cursor-pointer">Garibook Business for Corporate Travel</li>
        </ul>
      </div>

      {/* Col 4: Contacts */}
      <div>
        <h4 className="text-white text-lg font-bold mb-5">Contacts</h4>
        <div className="space-y-3 text-base text-zinc-400 leading-relaxed">
          <p className="hover:text-white transition cursor-pointer">support@garibook.com</p>
          <p>
            Police Plaza Concord Tower-01, 13th Floor, Plot-02, Road-144, Gulshan, Dhaka-1212
          </p>
          <p className="text-white font-medium">+88 09 678 11 22 33</p>
        </div>
      </div>
    </div>
  );
}