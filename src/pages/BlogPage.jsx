import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../components/contact/contact.css";
import ContactModal from "../components/contact/ContactModal";
import { Nav } from "../components/nav/Nav";
import { PageBackLink } from "../components/nav/PageBackLink";
import { blogPosts, blogTopics, formatBlogDate } from "../content/blogPosts";
import { business } from "../content/siteContent";
import { applyPageSeo, blogIndexJsonLd, businessJsonLd, PAGE_SEO } from "../content/seo";
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

const BlogPage = () => {
  const consultRef = useRef(null);
  const sectionRef = useRef(null);
  const seo = PAGE_SEO.blog;
  const posts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
  useRevealOnScroll(sectionRef);

  useEffect(() => {
    applyPageSeo({ ...seo, path: "/blog" });
    window.scrollTo(0, 0);
  }, [seo]);

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
              {posts.length ? (
                <ul className="blog-offer__posts">
                  {posts.map((post) => (
                    <li key={post.slug}>
                      <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      <p>{post.description}</p>
                    </li>
                  ))}
                </ul>
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
