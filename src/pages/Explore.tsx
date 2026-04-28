import PageBanner from "@/components/PageBanner";
import PageQuickLinks from "@/components/PageQuickLinks";

const spotlightCards = [
  {
    title: "Admission Window",
    text: "Track upcoming entry cycles, eligibility, and required documents in one place.",
  },
  {
    title: "Academic Preparation",
    text: "Structured learning tracks focused on military college entry success and confidence.",
  },
  {
    title: "Student Development",
    text: "Balanced growth through discipline, leadership activities, and physical readiness.",
  },
  {
    title: "Announcements",
    text: "Stay updated with test schedules, notices, and important campus communications.",
  },
];

const Explore = () => {
  return (
    <div className="page-block">
      <PageBanner
        title="Explore"
        subtitle="Central hub for institutional highlights, programs, announcements, and student opportunities."
      />

      <section className="py-14 bg-cch-light-gray">
        <div className="cch-container space-y-8">
          <PageQuickLinks
            links={[
              { label: "Foreword by the Principal", href: "/info/foreword-by-principal" },
              { label: "About", href: "/about" },
              { label: "Admissions", href: "/admissions" },
              { label: "Academics", href: "/academics" },
              { label: "Campus Life", href: "/campus-life" },
              { label: "Faculty", href: "/faculty" },
            ]}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {spotlightCards.map((card) => (
              <article key={card.title} className="page-surface p-6">
                <h2 className="text-xl font-bold text-cch-dark-text mb-2">{card.title}</h2>
                <p className="text-cch-body-text text-sm md:text-base">{card.text}</p>
              </article>
            ))}
          </div>

          <div className="page-surface p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-cch-dark-text mb-2">Ready to Update Final Content?</h3>
              <p className="text-cch-body-text text-sm md:text-base">
                All major sections are now structured so you can quickly replace text and visuals without redesigning
                layout blocks.
              </p>
            </div>
            <a href="/contact" className="cch-btn-primary whitespace-nowrap">
              Contact Office
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
