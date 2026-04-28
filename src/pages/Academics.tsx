import PageBanner from "@/components/PageBanner";

const programs = ["Foundation Classes", "Middle School Track", "Senior Preparation Program", "Exam Intensive Modules"];

const focusAreas = [
  "Conceptual clarity in core subjects",
  "Structured mock testing and analysis",
  "Communication and interview readiness",
  "Discipline-based study habits",
  "Psychological and confidence development",
  "Physical fitness integration",
];

const Academics = () => {
  return (
    <div className="page-block">
      <PageBanner title="Academics" subtitle="Curriculum tracks, academic standards, and exam preparation framework." />
      <section className="py-14 bg-cch-light-gray">
        <div className="cch-container space-y-8">
          <div className="page-surface p-6 md:p-8">
            <h2 className="text-2xl font-bold text-cch-dark-text mb-4">Academic Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {programs.map((program) => (
                <div key={program} className="bg-background border rounded-sm p-4 text-sm font-semibold text-cch-dark-text">
                  {program}
                </div>
              ))}
            </div>
          </div>

          <div className="page-surface p-6 md:p-8">
            <h3 className="text-xl font-bold text-cch-dark-text mb-4">Academic Focus Areas</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-cch-body-text list-disc list-inside">
              {focusAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          <div className="page-surface p-6 md:p-8">
            <h3 className="text-xl font-bold text-cch-dark-text mb-4">Evaluation Framework</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-cch-body-text">
              <div className="bg-background border rounded-sm p-4">
                <p className="font-semibold text-cch-dark-text mb-1">Weekly Assessments</p>
                <p>Topic-based class tests to reinforce consistency and retention.</p>
              </div>
              <div className="bg-background border rounded-sm p-4">
                <p className="font-semibold text-cch-dark-text mb-1">Monthly Mock Series</p>
                <p>Exam-condition papers with performance review and mentoring feedback.</p>
              </div>
              <div className="bg-background border rounded-sm p-4">
                <p className="font-semibold text-cch-dark-text mb-1">Progress Meetings</p>
                <p>Regular parent-student meetings to keep planning aligned and transparent.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
