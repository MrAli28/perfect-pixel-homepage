const posts = [
  {
    img: "/images/post-1.jpg",
    title: "73rd Entry Test Result",
    date: "February 5, 2026",
    excerpt: "Candidates bearing the following Roll Numbers have been short-listed for Final Assessment i.e.…",
  },
  {
    img: "/images/post-2.jpg",
    title: "Result – Direct Entrant (69th Entry)",
    date: "May 26, 2025",
    excerpt: "The Entrance Test results for Class Direct Entry 1st Year/A-Level 2025 (69th Entry)…",
  },
  {
    img: "/images/post-3.png",
    title: "Leadership Summer Camp 2025",
    date: "April 19, 2025",
    excerpt: "Leadership Summer Camp 2025 Cadet College Hasanabdal invites boys aged 12–18 to an…",
  },
];

const LatestPosts = () => {
  return (
    <section className="py-16 bg-cch-light-gray">
      <div className="cch-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-cch-dark-text font-roboto mb-8">Latest Posts</h2>
            <div className="space-y-6">
              {posts.map((post, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-24 h-20 object-cover rounded-sm flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-base font-bold text-cch-dark-text group-hover:text-cch-green transition-colors font-roboto">
                      {post.title}
                    </h3>
                    <p className="text-xs text-cch-gray mt-1">{post.date}</p>
                    <p className="text-sm text-cch-body-text mt-1 line-clamp-2">{post.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#" className="cch-btn-primary mt-6 inline-block">
              VIEW ALL
            </a>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-cch-dark-text font-roboto mb-8">Dress Rehearsal Examination</h2>
            <div className="bg-background p-6 rounded-sm shadow-sm">
              <div className="text-cch-green text-3xl font-bold font-roboto">28</div>
              <div className="text-cch-body-text text-sm">Feb, 2026</div>
              <a href="#" className="text-cch-green text-sm font-semibold mt-3 inline-block hover:underline">
                Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
