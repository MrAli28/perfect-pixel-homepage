const JoinCTA = () => {
  return (
    <section
      className="relative py-24 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/images/group-picture.jpg')" }}
    >
      <div className="cch-overlay" />
      <div className="relative z-10 cch-container text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground font-roboto mb-6">
          Join the <span className="text-cch-gold">World Class</span>
        </h2>
        <a href="#" className="cch-btn-outline">
          Apply Now
        </a>
      </div>
    </section>
  );
};

export default JoinCTA;
