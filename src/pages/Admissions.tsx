import PageBanner from "@/components/PageBanner";

const admissionCycles = [
  {
    title: "Spring Intake",
    window: "January - March",
    note: "Best suited for students targeting annual competitive test preparation.",
  },
  {
    title: "Summer Intensive",
    window: "May - July",
    note: "Focused short-track revision and physical readiness support.",
  },
  {
    title: "Autumn Intake",
    window: "August - October",
    note: "Full academic onboarding with long-term mentoring plan.",
  },
];

const processTimeline = [
  {
    stage: "01. Registration",
    detail: "Submit student profile and basic eligibility details.",
  },
  {
    stage: "02. Document Review",
    detail: "Initial screening of academic and identity documents.",
  },
  {
    stage: "03. Written Test",
    detail: "Subject aptitude assessment and analytical performance check.",
  },
  {
    stage: "04. Interview + Fitness",
    detail: "Panel interview with physical readiness observation.",
  },
  {
    stage: "05. Merit Decision",
    detail: "Final evaluation, seat confirmation, and onboarding instructions.",
  },
];

const eligibilityTracks = [
  {
    level: "Junior Track",
    classes: "Class 6 - 8",
    focus: "Foundation in core subjects, discipline routines, and confidence building.",
  },
  {
    level: "Middle Track",
    classes: "Class 9 - 10",
    focus: "Academic rigor, test strategy, and structured interview preparation.",
  },
  {
    level: "Senior Track",
    classes: "Class 11 - 12",
    focus: "Advanced exam readiness, mentoring, and leadership conditioning.",
  },
];

const documents = [
  "Student B-Form or Birth Certificate copy",
  "Parent or Guardian CNIC copy",
  "Recent passport-size photographs",
  "Latest academic result card copy",
  "Medical fitness details (as required)",
];

const faqs = [
  {
    q: "Can I apply online?",
    a: "Yes. You can keep this block connected to your final web form workflow.",
  },
  {
    q: "Do all applicants go through testing?",
    a: "Yes. Written and interview stages are maintained for merit-based screening.",
  },
  {
    q: "Is physical assessment included?",
    a: "Yes. Fitness readiness is assessed according to admission policy requirements.",
  },
];

const Admissions = () => {
  return (
    <div className="page-block">
      <PageBanner title="Online Admissions" subtitle="" />
      <section className="py-14 bg-background">
        <div className="cch-container space-y-8">
          <div className="page-surface p-6">
            <p className="text-cch-body-text">Content cleared. Add new admissions content here.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
