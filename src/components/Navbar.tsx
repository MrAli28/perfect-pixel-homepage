import { useState } from "react";
import { Search, Menu, X } from "lucide-react";

const navItems = [
  "EXPLORE",
  "ADMISSION",
  "ACADEMICS",
  "WIDER CURRICULUM",
  "ALUMNI",
  "ENDOWMENT FUND",
  "CADET LIFE",
  "CAREER",
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-background shadow-md sticky top-0 z-50">
      <div className="cch-container flex items-center justify-between py-3">
        <a href="/" className="flex items-center gap-3">
          <img src="/images/logo.jpg" alt="Cadet College Hasanabdal" className="h-14 w-auto" />
          <div className="hidden sm:block">
            <div className="text-sm font-bold text-cch-green font-roboto leading-tight">CADET COLLEGE</div>
            <div className="text-sm font-bold text-cch-green font-roboto leading-tight">HASANABDAL</div>
            <div className="text-[10px] text-cch-gray italic">A Not-for-Profit Boarding High School</div>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-xs font-semibold text-foreground tracking-wide hover:text-cch-green transition-colors uppercase"
            >
              {item}
            </a>
          ))}
          <button className="text-foreground hover:text-cch-green transition-colors">
            <Search className="w-4 h-4" />
          </button>
          <button className="text-foreground hover:text-cch-green transition-colors">
            <Menu className="w-5 h-5" />
          </button>
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border px-4 pb-4">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="block py-2.5 text-sm font-semibold text-foreground hover:text-cch-green transition-colors uppercase"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
