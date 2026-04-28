import PageBanner from "@/components/PageBanner";

const roles = [
  "Subject Teacher",
  "Physical Training Instructor",
  "Student Mentor",
  "Administrative Support",
];

const recruitmentFlow = ["Application Submission", "Shortlisting", "Interview", "Demo or Practical Assessment", "Final Selection"];

const Career = () => {
  return (
    <div className="page-block">
      <PageBanner title="Career" subtitle="Open positions, hiring criteria, and application instructions." />
      <section className="py-14 bg-cch-light-gray">
        <div className="cch-container space-y-8">
          <div className="page-surface p-6 md:p-8">
            <h2 className="text-2xl font-bold text-cch-dark-text mb-4">Open Roles</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {roles.map((role) => (
                <div key={role} className="bg-background border rounded-sm px-4 py-3 text-sm font-semibold text-cch-dark-text">
                  {role}
                </div>
              ))}
            </div>
          </div>

          <div className="page-surface p-6 md:p-8">
            <h3 className="text-xl font-bold text-cch-dark-text mb-4">Recruitment Process</h3>
            <ol className="space-y-2 text-cch-body-text list-decimal list-inside">
              {recruitmentFlow.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <a href="/contact" className="cch-btn-primary mt-5">Apply or Inquire</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
