const instructors = [
  { name: "Amjad Mahmood Janjua", role: "DVP Academic / HOD Mathematics", img: "https://cch.edu.pk/wp-content/uploads/2021/03/Kaleem-Mustafa-Grey.jpg" },
  { name: "Ahmd Nadeem Anwar", role: "DVP Student Affairs", img: "https://cch.edu.pk/wp-content/uploads/2021/03/Ahmed.jpg" },
  { name: "Shaukat Mehmood", role: "Vice Principal/DOS", img: "https://cch.edu.pk/wp-content/uploads/2022/04/Mr.Shaukat-Mahmood-1-700x700.jpg" },
  { name: "Ali Sikander Khan", role: "Master in Mathematics", img: "https://cch.edu.pk/wp-content/uploads/2022/03/002-700x700.jpg" },
];

const InstructorsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="cch-container">
        <h2 className="cch-section-title text-center mb-12">
          <span className="font-bold">Our Skilled Instructors</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {instructors.map((inst, i) => (
            <div key={i} className="text-center group cursor-pointer">
              <div className="overflow-hidden rounded-sm mb-4">
                <img
                  src={inst.img}
                  alt={inst.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-sm font-bold text-cch-dark-text font-roboto">{inst.name}</h3>
              <p className="text-xs text-cch-body-text mt-1">{inst.role}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="#" className="cch-btn-primary">
            View All Instructors
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
