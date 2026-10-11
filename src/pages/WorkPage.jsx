import React, { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";
import "../components/contact/contact.css";
import ContactModal from "../components/contact/ContactModal";
import { Nav } from "../components/nav/Nav";
import { PageBackLink } from "../components/nav/PageBackLink";
import { business } from "../content/siteContent";
import { workProjects } from "../content/workProjects";
import { applyPageSeo, businessJsonLd, SITE_NAME } from "../content/seo";

const Footer = () => (
  <footer className="site-footer">
    <div className="site-footer__inner">
      <p>
        &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
        {" · "}
        <Link to="/">Home</Link>
        {" · "}
        <Link to="/services">Services</Link>
        {" · "}
        <Link to="/work">Work</Link>
        {" · "}
        <Link to="/blog">Blog</Link>
        {" · "}
        <Link to="/contact">Contact</Link>
      </p>
    </div>
  </footer>
);

const WorkPage = () => {
  const { slug } = useParams();
  const consultRef = useRef(null);
  const project = slug ? workProjects.find((item) => item.slug === slug) : null;
  const missing = Boolean(slug) && !project;

  useEffect(() => {
    if (missing) {
      applyPageSeo({
        title: `Project not found | ${SITE_NAME}`,
        description: "That project is not published on the ATP Consulting Services site.",
        path: `/work/${slug}`,
        robots: "noindex, follow",
      });
    } else if (project) {
      applyPageSeo({
        title: `${project.title} | ${SITE_NAME}`,
        description: project.description,
        path: `/work/${project.slug}`,
      });
    } else {
      applyPageSeo({
        title: `Client Work | ${SITE_NAME}`,
        description:
          "Client notes from the ATP Consulting Services homepage: I.T.O. Insurance Agency, Total Garage HTX, and Starstruck Nails & Spa.",
        path: "/work",
      });
    }
    window.scrollTo(0, 0);
  }, [missing, project, slug]);

  const path = project ? `/work/${project.slug}` : "/work";
  const jsonLd = !missing
    ? businessJsonLd({
        path,
        title: project ? project.title : "Client Work",
        description: project
          ? project.description
          : "Websites for the clients quoted on the homepage.",
      })
    : null;
  const related = project?.related
    ? workProjects.find((item) => item.slug === project.related)
    : null;

  return (
    <div className="landing-page blog-offer">
      <Nav
        businessName={business.shortName}
        onConsultClick={() => consultRef.current?.open()}
      />
      <header className="blog-offer__hero">
        <div className="blog-offer__hero-inner">
          <PageBackLink />
          <p className="blog-offer__kicker">{project ? project.kind : "Selected work"}</p>
          <h1>
            {missing
              ? "That project is not on the site."
              : project
                ? project.name
                : "The three clients quoted on the homepage."}
          </h1>
          <p className="blog-offer__lead">
            {missing
              ? "The published projects are listed on the work page."
              : project
                ? project.description
                : "A short look at the three clients quoted on the homepage."}
          </p>
          <div className="blog-offer__actions">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => consultRef.current?.open()}
            >
              Request a Free Consultation
            </button>
            <Link to="/blog/how-modern-web-infrastructure-drives-local-growth" className="btn btn--secondary">
              Read the Article
            </Link>
          </div>
        </div>
      </header>
      {!missing && !project ? (
        <div className="blog-post">
          <div className="blog-post__inner">
            <ul className="blog-offer__posts">
              {workProjects.map((item) => (
                <li key={item.slug}>
                  <time>{item.kind}</time>
                  <Link to={`/work/${item.slug}`}>{item.name}</Link>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
      {project ? (
        <article className="blog-post">
          <div className="blog-post__inner">
            {project.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            <blockquote className="work-quote">
              <p>{project.quote}</p>
            </blockquote>
            <p className="blog-chapter__more">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                Visit {project.name}
              </a>
            </p>
            {related ? (
              <p className="blog-chapter__more">
                <Link to={`/work/${related.slug}`}>See {related.name}</Link>
              </p>
            ) : (
              <p className="blog-chapter__more">
                <Link to="/work">All client work</Link>
              </p>
            )}
          </div>
        </article>
      ) : null}
      <Footer />
      <ContactModal ref={consultRef} />
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
    </div>
  );
};

export default WorkPage;
