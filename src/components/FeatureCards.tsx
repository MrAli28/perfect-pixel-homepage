import { Mountain, Users, FileText } from "lucide-react";

const features = [
  {
    icon: Mountain,
    title: "Activities",
    description: "See Activities at CCH",
  },
  {
    icon: Users,
    title: "Our Skilled Instructors",
    description: "See Faculty Profiles at CCH",
  },
  {
    icon: FileText,
    title: "Digital Abdalian",
    description: "Digital Editions 1961-2024",
  },
];

const FeatureCards = () => {
  return (
    <div className="relative -mt-16 z-20">
      <div className="cch-container">
        <div className="grid grid-cols-1 md:grid-cols-3 bg-cch-navy rounded-sm overflow-hidden shadow-xl">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`cch-feature-card text-primary-foreground group ${
                index < features.length - 1 ? "md:border-r border-primary-foreground/10" : ""
              }`}
            >
              <div>
                <h3 className="text-lg font-bold font-roboto mb-1">{feature.title}</h3>
                <p className="text-sm text-primary-foreground/70">{feature.description}</p>
              </div>
              <feature.icon className="w-10 h-10 text-cch-green group-hover:text-primary-foreground transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
