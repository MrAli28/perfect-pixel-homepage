import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import PageBanner from "@/components/PageBanner";
import PageQuickLinks from "@/components/PageQuickLinks";
import { infoPages } from "@/data/infoPages";
import { navMegaMenus } from "@/data/siteContent";

const buildAdminNote = (title: string) =>
  `${title} section is maintained for official information flow, institutional clarity, and timely guidance for cadets, parents, alumni, and stakeholders.`;

const courseOfferings = [
  {
    stream: "Pre-Engineering",
    core: "Mathematics, Physics, Chemistry",
    support: "English Language, Urdu, Global Perspectives, Computer Science, Biology",
  },
  {
    stream: "A-Level - Computer Science & Information Technology",
    core: "Mathematics, Physics, Computer Science",
    support: "Chemistry, Biology, English Language, Urdu, Global Perspectives",
  },
  {
    stream: "Pre-Medical",
    core: "Biology, Physics, Chemistry",
    support: "Mathematics, English Language, Urdu, Global Perspectives, Computer Science",
  },
  {
    stream: "A-Level - Social Sciences & Humanities",
    core: "English Language, Urdu, Global Perspectives",
    support: "Mathematics, Physics, Chemistry, Computer Science, Biology",
  },
];

const buildRelatedLinks = (pageId?: string) => {
  const activeMenu = navMegaMenus.find((menu) =>
    menu.links.some(
      (link) =>
        link.href === `/info/${pageId}` ||
        link.children?.some((child) => child.href === `/info/${pageId}`),
    ),
  );

  if (!activeMenu) {
    return Object.entries(infoPages)
      .filter(([slug]) => slug !== pageId)
      .slice(0, 6)
      .map(([slug, content]) => ({ label: content.title, href: `/info/${slug}` }));
  }

  return activeMenu.links.flatMap((link) => {
    const links = [{ label: link.label, href: link.href }];

    if (link.children) {
      links.push(...link.children.map((child) => ({ label: child.label, href: child.href })));
    }

    return links;
  });
};

const InfoPage = () => {
  const { pageId } = useParams();
  const page = pageId ? infoPages[pageId] : undefined;

  const relatedLinks = useMemo(() => buildRelatedLinks(pageId), [pageId]);

  if (!page) {
    return (
      <div className="page-block">
        <PageBanner title="Page Not Available" subtitle="The requested section is not published yet." />
        <section className="py-14 bg-cch-light-gray">
          <div className="cch-container">
            <div className="page-surface p-8 text-center space-y-4">
              <p className="text-cch-body-text">
                This page could not be found. Please continue from the main information sections.
              </p>
              <div className="flex justify-center gap-3">
                <Link to="/" className="cch-btn-primary">
                  Back to Home
                </Link>
                <Link to="/explore" className="cch-btn-primary bg-cch-gold text-cch-dark-text hover:brightness-95">
                  Explore Sections
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page-block">
      <PageBanner title={page.title} subtitle={page.subtitle} />
      <section className="py-14 bg-cch-light-gray">
        <div className="cch-container space-y-8">
          {pageId !== "courses-offered" && pageId !== "foreword-by-principal" && pageId !== "aim-objective" ? (
            <PageQuickLinks links={relatedLinks} />
          ) : null}

          {pageId === "courses-offered" ? (
            <div className="page-surface p-6 md:p-8 space-y-6">
              <div className="max-w-4xl">
                <p className="text-xs uppercase tracking-[0.22em] font-bold text-cch-green mb-3">Admission</p>
                <h2 className="text-2xl md:text-3xl font-bold text-cch-dark-text mb-3">Academic streams and subject combinations</h2>
                <p className="text-cch-body-text leading-relaxed">
                  Bahar Cadet School (BCS) offers subject combinations that allow cadets to move toward medicine,
                  engineering, computer science, and humanities pathways with the right academic balance.
                </p>
              </div>

              <div className="overflow-hidden rounded-sm border border-black/10">
                <table className="w-full text-sm md:text-base">
                  <thead className="bg-cch-dark-navy text-white">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Programme</th>
                      <th className="px-4 py-3 text-left font-semibold">Core Subjects</th>
                      <th className="px-4 py-3 text-left font-semibold">Supporting Subjects</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-black/10">
                    {courseOfferings.map((row) => (
                      <tr key={row.stream} className="align-top">
                        <td className="px-4 py-4 font-semibold text-cch-dark-text">{row.stream}</td>
                        <td className="px-4 py-4 text-cch-body-text">{row.core}</td>
                        <td className="px-4 py-4 text-cch-body-text">{row.support}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {page.highlights.map((highlight) => (
                  <article key={highlight} className="page-surface p-6 bg-background">
                    <p className="text-xs uppercase tracking-wider font-bold text-cch-green mb-2">Focus Area</p>
                    <h3 className="text-lg font-bold text-cch-dark-text">{highlight}</h3>
                  </article>
                ))}
              </div>

              <div className="page-surface p-6 md:p-8">
                <h2 className="text-2xl font-bold text-cch-dark-text mb-4">Guidance Notes</h2>
                <ul className="space-y-2 list-disc list-inside text-cch-body-text">
                  {page.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="page-surface p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <p className="text-cch-body-text">Need help choosing the right stream for your background and goals?</p>
                <Link to={page.ctaHref} className="cch-btn-primary whitespace-nowrap">
                  {page.ctaLabel}
                </Link>
              </div>
            </div>
          ) : pageId === "foreword-by-principal" ? (
            <div className="page-surface p-6 md:p-8 space-y-6">
              <div className="max-w-4xl">
                <h3 className="text-lg md:text-xl font-bold text-cch-dark-text mb-4">
                  Principal's Message
                </h3>
              </div>

              <div className="space-y-4 max-w-4xl">
                {page.sectionIntro?.split("\n\n").map((paragraph, idx) => (
                  <p key={idx} className="text-cch-body-text leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
                {page.highlights.map((highlight) => (
                  <article key={highlight} className="page-surface p-6">
                    <p className="text-xs uppercase tracking-wider font-bold text-cch-green mb-2">Key Focus</p>
                    <h3 className="text-lg font-bold text-cch-dark-text">{highlight}</h3>
                  </article>
                ))}
              </div>

              <div className="page-surface p-6 md:p-8 mt-6">
                <h2 className="text-2xl font-bold text-cch-dark-text mb-4">Institutional Pillars</h2>
                <ul className="space-y-3 list-disc list-inside text-cch-body-text">
                  {page.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="page-surface p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-6">
                <p className="text-cch-body-text">Explore our academic programs and institutional structure.</p>
                <Link to={page.ctaHref} className="cch-btn-primary whitespace-nowrap">
                  {page.ctaLabel}
                </Link>
              </div>
              {/* Quick links intentionally removed for this page */}
            </div>
          ) : (
            <>
              <div className="page-surface p-6 md:p-8">
                <h2 className="text-2xl font-bold text-cch-dark-text mb-3">Institutional Overview</h2>
                <p className="text-cch-body-text">{page.overview}</p>
              </div>

              <div className="page-surface p-6 md:p-8">
                <h2 className="text-2xl font-bold text-cch-dark-text mb-3">Section Context</h2>
                <p className="text-cch-body-text">
                  {page.sectionIntro ??
                    `This page presents curated information for ${page.title.toLowerCase()} with the same institutional flow used across core sections of the website.`}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {page.highlights.map((highlight) => (
                  <article key={highlight} className="page-surface p-6">
                    <p className="text-xs uppercase tracking-wider font-bold text-cch-green mb-2">Focus Area</p>
                    <h3 className="text-lg font-bold text-cch-dark-text">{highlight}</h3>
                  </article>
                ))}
              </div>

              <div className="page-surface p-6 md:p-8">
                <h2 className="text-2xl font-bold text-cch-dark-text mb-4">Operational Details</h2>
                <ul className="space-y-2 list-disc list-inside text-cch-body-text">
                  {page.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="page-surface p-6 md:p-8">
                <h2 className="text-2xl font-bold text-cch-dark-text mb-3">Administrative Note</h2>
                <p className="text-cch-body-text">{page.adminNote ?? buildAdminNote(page.title)}</p>
              </div>

              <div className="page-surface p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <p className="text-cch-body-text">Need more official information on this section?</p>
                <Link to={page.ctaHref} className="cch-btn-primary whitespace-nowrap">
                  {page.ctaLabel}
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default InfoPage;
