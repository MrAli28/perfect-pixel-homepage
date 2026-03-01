import { Play } from "lucide-react";

const tours = [
  { img: "/images/tour-01.png" },
  { img: "/images/tour-02.png" },
  { img: "/images/tour-03.png" },
  { img: "/images/tour-04.png" },
  { img: "/images/tour-05.png" },
  { img: "/images/tour-06.png" },
];

const VirtualTour = () => {
  return (
    <section className="py-20 bg-background">
      <div className="cch-container">
        <h2 className="cch-section-title text-center mb-12">
          <span className="font-bold">Campus Virtual Tour</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {tours.map((tour, i) => (
            <div key={i} className="relative group cursor-pointer overflow-hidden rounded-sm">
              <img
                src={tour.img}
                alt={`Campus tour ${i + 1}`}
                className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-cch-overlay/40 group-hover:bg-cch-overlay/60 transition-colors flex items-center justify-center">
                <Play className="w-10 h-10 text-primary-foreground opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold text-cch-dark-text mb-4">Balance Life At CCH</h3>
          <div className="relative group cursor-pointer overflow-hidden rounded-sm max-w-lg mx-auto">
            <img
              src="/images/tour-07.png"
              alt="Balance Life at CCH"
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-cch-overlay/40 group-hover:bg-cch-overlay/60 transition-colors flex items-center justify-center">
              <Play className="w-12 h-12 text-primary-foreground opacity-80 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
