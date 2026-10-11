import React, { useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../App.css";
import "../components/contact/contact.css";
import ContactModal from "../components/contact/ContactModal";
import { Nav } from "../components/nav/Nav";
import { PageBackLink } from "../components/nav/PageBackLink";
import { blogPosts, blogTopics, formatBlogDate } from "../content/blogPosts";
import { business } from "../content/siteContent";
import { applyPageSeo, blogIndexJsonLd, businessJsonLd, PAGE_SEO, SITE_NAME } from "../content/seo";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

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
        <Link to="/clients">Clients</Link>
        {" · "}
        <Link to="/about">About</Link>
        {" · "}
        <Link to="/packages">Packages</Link>
        {" · "}
        <Link to="/blog">Blog</Link>
        {" · "}
        <Link to="/faq">FAQ</Link>
        {" · "}
        <Link to="/contact">Contact</Link>
        {" · "}
        <Link to="/blackjack">View a Custom Demo</Link>
        {" · "}
        <a href={business.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </p>
    </div>
  </footer>
);

const PAGE_SIZE = 10;

const BlogPage = () => {
  const consultRef = useRef(null);
  const sectionRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const seo = PAGE_SEO.blog;
  const posts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
  const pageCount = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));
  const requested = Number.parseInt(searchParams.get("page") || "1", 10);
  const page = Number.isFinite(requested) && requested > 0 ? Math.min(requested, pageCount) : 1;
  const visiblePosts = posts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  useRevealOnScroll(sectionRef);

  const openedAt = useRef(page);

  useEffect(() => {
    const path = page > 1 ? `/blog?page=${page}` : "/blog";
    applyPageSeo({
      title:
        page > 1
          ? `Small Business Website & SEO Blog, page ${page} | ${SITE_NAME}`
          : seo.title,
      description:
        page > 1
          ? `Page ${page} of practical notes on small-business websites, local SEO, and Google listings. From ATP Consulting Services in Irvine, CA.`
          : seo.description,
      path,
    });
  }, [seo, page]);

  useEffect(() => {
    if (requested === page) return undefined;
    const next = new URLSearchParams(searchParams);
    if (page <= 1) next.delete("page");
    else next.set("page", String(page));
    setSearchParams(next, { replace: true });
    return undefined;
  }, [page, requested, searchParams, setSearchParams]);

  useEffect(() => {
    if (openedAt.current > 1) {
      document.getElementById("articles")?.scrollIntoView({ block: "start" });
    }
  }, []);

  useEffect(() => {
    if (page === openedAt.current) return undefined;
    document.getElementById("articles")?.scrollIntoView({ block: "start" });
    return undefined;
  }, [page]);

  useEffect(() => {
    const chapters = [...document.querySelectorAll(".blog-chapter")];
    if (!chapters.length) return undefined;
    const ratios = new Map();
    const mark = () => {
      let current = null;
      let best = 0;
      chapters.forEach((chapter) => {
        const ratio = ratios.get(chapter) || 0;
        if (ratio > best) {
          best = ratio;
          current = chapter;
        }
      });
      chapters.forEach((chapter) => {
        chapter.classList.toggle("is-current", chapter === current && best > 0.12);
      });
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => ratios.set(entry.target, entry.intersectionRatio));
        mark();
      },
      { threshold: [0.12, 0.28, 0.45, 0.65, 0.85] }
    );
    chapters.forEach((chapter) => observer.observe(chapter));
    return () => observer.disconnect();
  }, []);

  const jsonLd = businessJsonLd({
    path: "/blog",
    title: seo.title,
    description: seo.description,
  });
  const blogLd = blogIndexJsonLd({
    title: seo.title,
    description: seo.description,
    posts,
  });

  return (
    <div className="landing-page blog-offer">
      <Nav
        businessName={business.shortName}
        onConsultClick={() => consultRef.current?.open()}
      />
      <header className="blog-offer__hero">
        <div className="blog-offer__hero-inner">
          <PageBackLink />
          <p className="blog-offer__kicker">Blog</p>
          <h1>Notes on websites, search, and getting found.</h1>
          <p className="blog-offer__lead">
            Short articles for small-business owners who want a clearer site and
            more of the right customers from Google. Written by ATP Consulting
            Services in Irvine, CA, for shops and local services nationwide.
          </p>
          <div className="blog-offer__actions">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => consultRef.current?.open()}
            >
              Request a Free Consultation
            </button>
            <Link to="/services" className="btn btn--secondary">
              See All Services
            </Link>
          </div>
        </div>
      </header>
      <nav className="blog-offer__index" aria-label="Topics on this page">
        <ol>
          {blogTopics.map((topic, index) => (
            <li key={topic.id}>
              <a href={`#${topic.id}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {topic.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <div ref={sectionRef}>
        <article id="articles" className="blog-chapter blog-chapter--plain">
          <div className="blog-chapter__inner">
            <div className="blog-chapter__body">
              <h2>
                Articles
                <span className="blog-chapter__rule" />
              </h2>
              {visiblePosts.length ? (
                <>
                  <ul className="blog-offer__posts">
                    {visiblePosts.map((post) => (
                      <li key={post.slug}>
                        <time dateTime={`${post.date}T08:00:00-07:00`}>{formatBlogDate(post.date)}</time>
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                        <p>{post.description}</p>
                      </li>
                    ))}
                  </ul>
                  <nav className="blog-offer__pager" aria-label="More articles">
                    {page > 1 ? (
                      <Link to={page === 2 ? "/blog" : `/blog?page=${page - 1}`}>Previous</Link>
                    ) : (
                      <span />
                    )}
                    <p>
                      Page {page} of {pageCount}
                    </p>
                    {page < pageCount ? (
                      <Link to={`/blog?page=${page + 1}`}>Next</Link>
                    ) : (
                      <span />
                    )}
                  </nav>
                </>
              ) : (
                <p>
                  The first article is on the way. It will be a practical guide
                  for owners deciding how to improve a website or show up more
                  clearly on Google. The topics below already point to the
                  services, search work, and packages on this site.
                </p>
              )}
            </div>
          </div>
        </article>
        {blogTopics.map((topic, index) => (
          <article
            key={topic.id}
            id={topic.id}
            className={`blog-chapter${index % 2 === 0 ? " blog-chapter--band" : ""}`}
          >
            <div className="blog-chapter__inner">
              <p className="blog-chapter__num" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="blog-chapter__body">
                <h2>
                  {topic.title}
                  <span className="blog-chapter__rule" />
                </h2>
                <p>{topic.text}</p>
                <p className="blog-chapter__more">
                  <Link to={topic.href}>{topic.linkLabel}</Link>
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
      <section className="blog-offer__close">
        <div className="blog-offer__close-inner">
          <p>
            When you want a recommendation for your own business, the first
            consultation is free and there is no obligation.
          </p>
          <div className="blog-offer__actions">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => consultRef.current?.open()}
            >
              Request a Free Consultation
            </button>
            <Link to="/contact" className="btn btn--navy">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <Footer />
      <ContactModal ref={consultRef} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }}
      />
    </div>
  );
};

export default BlogPage;
