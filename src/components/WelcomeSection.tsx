const WelcomeSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="cch-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="cch-section-title mb-6">
              <span className="font-bold">Welcome to Excellence & Heritage</span>
            </h2>
            <p className="text-cch-body-text leading-relaxed text-[15px] mb-6">
              Cadet College Hasanabdal, being the first institution of its kind in Pakistan, has been a trend-setter in
              the field of quality boarding schools meant for boys. In its history of over sixty years, its graduates
              have not only contributed tremendously in the national mainstream, but many have also moved across
              frontiers, and are now playing their roles at the global level. Above all, being a trailblazer, the
              institution has helped set the blueprints of a milliard of institutions, which have followed in its wake.
            </p>
            <p className="text-cch-dark-text font-semibold text-sm mb-1">
              Brig Nasir Saeed Khattak (Retd), SI(M) – Principal & Alumni
            </p>
            <p className="text-cch-body-text text-sm mb-6">Cadet College Hasanabdal</p>
            <a href="#" className="cch-btn-primary">
              Read More
            </a>
          </div>
          <div>
            <img
              src="/images/our-mission.png"
              alt="Our Mission"
              className="w-full rounded-sm shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
