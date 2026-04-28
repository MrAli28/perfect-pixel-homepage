import PageBanner from "@/components/PageBanner";

const tracks = [
  "Leadership Development",
  "Public Speaking and Debate",
  "Character and Ethics Sessions",
  "Team Sports and Competition",
  "Study Mentorship Circles",
  "Community Responsibility Projects",
];

const WiderCurriculum = () => {
  return (
    <div className="page-block">
      <PageBanner title="Wider Curriculum" subtitle="Co-curricular and development pathways beyond classroom learning." />
      <section className="py-14 bg-background">
        <div className="cch-container space-y-8">
          <div className="page-surface p-6 md:p-8">
            <h2 className="text-2xl font-bold text-cch-dark-text mb-4">Beyond Academics</h2>
            <p className="text-cch-body-text mb-4">
              Wider curriculum at BCS supports confident personality growth, teamwork, and disciplined leadership.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {tracks.map((track) => (
                <div key={track} className="bg-cch-light-gray border rounded-sm px-4 py-3 text-sm font-semibold text-cch-dark-text">
                  {track}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WiderCurriculum;
