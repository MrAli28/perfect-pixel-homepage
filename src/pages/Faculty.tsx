import PageBanner from "@/components/PageBanner";

const leadership = [
  {
    name: "Syed Alamdar Hussain Shah",
    role: "Founder",
    summary: "Distinguished Pakistan Army veteran with extensive training leadership experience.",
  },
  {
    name: "Syed Amjad Hussain Shah",
    role: "Director",
    summary: "Leads BCS with a strong focus on academic, physical, and mental readiness.",
  },
];

const departments = ["Mathematics", "Science", "English", "General Knowledge", "Interview Preparation", "Physical Training"];

const Faculty = () => {
  return (
    <div className="page-block">
      <PageBanner title="Faculty" subtitle="Faculty profile section for principal, director, and subject experts." />
      <section className="py-14 bg-background">
        <div className="cch-container space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leadership.map((member) => (
              <article key={member.name} className="page-surface p-6 md:p-8">
                <p className="text-xs uppercase tracking-wider text-cch-green font-bold mb-2">{member.role}</p>
                <h2 className="text-2xl font-bold text-cch-dark-text mb-3">{member.name}</h2>
                <p className="text-cch-body-text">{member.summary}</p>
              </article>
            ))}
          </div>

          <div className="page-surface p-6 md:p-8">
            <h3 className="text-xl font-bold text-cch-dark-text mb-4">Academic and Training Departments</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {departments.map((department) => (
                <div key={department} className="bg-cch-light-gray border rounded-sm px-4 py-3 text-sm font-semibold text-cch-dark-text">
                  {department}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;
