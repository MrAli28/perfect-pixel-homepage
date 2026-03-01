import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cch-dark-navy text-primary-foreground">
      <div className="cch-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/logo.jpg" alt="CCH" className="h-12 w-auto" />
              <div>
                <div className="text-sm font-bold font-roboto">CADET COLLEGE</div>
                <div className="text-sm font-bold font-roboto">HASANABDAL</div>
              </div>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              A Not-for-Profit Boarding High School, providing quality education since 1954.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold font-roboto mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-cch-green transition-colors">Admission</a></li>
              <li><a href="#" className="hover:text-cch-green transition-colors">Academics</a></li>
              <li><a href="#" className="hover:text-cch-green transition-colors">Alumni</a></li>
              <li><a href="#" className="hover:text-cch-green transition-colors">Career</a></li>
              <li><a href="#" className="hover:text-cch-green transition-colors">Donate</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold font-roboto mb-4">Campus Life</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-cch-green transition-colors">Activities</a></li>
              <li><a href="#" className="hover:text-cch-green transition-colors">Facilities</a></li>
              <li><a href="#" className="hover:text-cch-green transition-colors">Digital Abdalian</a></li>
              <li><a href="#" className="hover:text-cch-green transition-colors">Endowment Fund</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold font-roboto mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cch-green flex-shrink-0" />
                <span>0319-555-1-444</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cch-green flex-shrink-0" />
                <span>feedback@cch.edu.pk</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cch-green flex-shrink-0 mt-0.5" />
                <span>Cadet College Hasanabdal, Attock, Punjab, Pakistan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-4">
        <div className="cch-container text-center text-xs text-primary-foreground/50">
          © 2026 Cadet College Hasanabdal. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
