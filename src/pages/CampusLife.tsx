import PageBanner from "@/components/PageBanner";

const routine = [
  "Morning physical training and discipline roll call",
  "Academic sessions with supervised prep periods",
  "Sports and team-building activities",
  "Evening revision and mentorship support",
];

const activities = ["Debates", "Sports Day", "Drill Practice", "Leadership Workshops", "Study Circles", "House Competitions"];

const CampusLife = () => {
  return (
    <div className="page-block">
      <PageBanner title="Campus Life" subtitle="Sports, activities, discipline routines, and student development environment." />
      <section className="py-14 bg-cch-light-gray">
        <div className="cch-container space-y-8">
          <div className="page-surface p-6 md:p-8">
            <h2 className="text-2xl font-bold text-cch-dark-text mb-4">Daily Campus Rhythm</h2>
            <ul className="space-y-2 text-cch-body-text list-disc list-inside">
              {routine.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="page-surface p-6 md:p-8">
            <h3 className="text-xl font-bold text-cch-dark-text mb-4">Student Activities</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {activities.map((activity) => (
                <span key={activity} className="bg-background border rounded-sm px-4 py-3 text-sm font-semibold text-cch-dark-text">
                  {activity}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampusLife;
