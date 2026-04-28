import PageBanner from "@/components/PageBanner";

const supportAreas = [
  "Merit scholarships for deserving cadets",
  "Academic resource development",
  "Training facilities and student welfare",
  "Long-term institutional sustainability",
];

const EndowmentFund = () => {
  return (
    <div className="page-block">
      <PageBanner title="Endowment Fund" subtitle="Institutional support and contribution framework placeholder." />
      <section className="py-14 bg-background">
        <div className="cch-container space-y-8">
          <div className="page-surface p-6 md:p-8">
            <h2 className="text-2xl font-bold text-cch-dark-text mb-4">Support the Institution</h2>
            <ul className="space-y-2 text-cch-body-text list-disc list-inside">
              {supportAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          <div className="page-surface p-6 md:p-8">
            <h3 className="text-xl font-bold text-cch-dark-text mb-3">Governance and Transparency</h3>
            <p className="text-cch-body-text">
              Add trustee details, audited reporting links, and contribution channels when your official data is ready.
            </p>
            <a href="/contact" className="cch-btn-primary mt-5">Get Contribution Details</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EndowmentFund;
