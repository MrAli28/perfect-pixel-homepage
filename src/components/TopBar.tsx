import { Phone, Mail } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-cch-dark-navy text-primary-foreground py-2.5 text-sm">
      <div className="cch-container flex items-center justify-between">
        <div className="flex items-center gap-5">
          <a href="tel:0319-555-1-444" className="flex items-center gap-1.5 hover:text-cch-gold transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span>0319-555-1-444</span>
          </a>
          <a href="mailto:feedback@cch.edu.pk" className="flex items-center gap-1.5 hover:text-cch-gold transition-colors">
            <Mail className="w-3.5 h-3.5" />
            <span>feedback@cch.edu.pk</span>
          </a>
        </div>
        <div className="hidden md:flex items-center gap-5 text-sm">
          <a href="#" className="hover:text-cch-gold transition-colors">Admission Portal</a>
          <a href="#" className="hover:text-cch-gold transition-colors">Alumni Registration</a>
          <a href="#" className="hover:text-cch-gold transition-colors">Donate</a>
          <a href="#" className="hover:text-cch-gold transition-colors">73rd Entry Test Result</a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
