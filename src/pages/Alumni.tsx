import PageBanner from "@/components/PageBanner";

const highlights = [
  "Mentorship programs for current students",
  "Career guidance sessions from alumni officers",
  "Annual networking and homecoming meetups",
  "Achievement wall and legacy archive",
];

const Alumni = () => {
  return (
    <div className="page-block">
      <PageBanner title="Alumni" subtitle="Alumni success stories, network, and engagement opportunities." />
      <section className="py-14 bg-cch-light-gray">
        <div className="cch-container space-y-8">
          <div className="page-surface p-6 md:p-8">
            <h2 className="text-2xl font-bold text-cch-dark-text mb-4">Alumni Network</h2>
            <ul className="space-y-2 text-cch-body-text list-disc list-inside">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="page-surface p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-cch-body-text">Want to join alumni activities or submit your achievement profile?</p>
            <a href="/contact" className="cch-btn-primary whitespace-nowrap">Register Interest</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Alumni;
