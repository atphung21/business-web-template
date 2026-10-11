import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";
import "../components/contact/contact.css";
import ContactModal from "../components/contact/ContactModal";
import { Nav } from "../components/nav/Nav";
import { PageBackLink } from "../components/nav/PageBackLink";
import { blogPosts, formatBlogDate } from "../content/blogPosts";
import { business } from "../content/siteContent";
import { applyPageSeo, blogPostJsonLd, businessJsonLd, SITE_NAME } from "../content/seo";

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

const RichText = ({ value }) => {
  const parts = Array.isArray(value) ? value : [value];
  return parts.map((part, index) => {
    if (typeof part === "string") {
      return <React.Fragment key={index}>{part}</React.Fragment>;
    }
    return (
      <Link key={index} to={part.href}>
        {part.text}
      </Link>
    );
  });
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const consultRef = useRef(null);
  const post = blogPosts.find((item) => item.slug === slug);
  const closeRef = useRef(null);
  const [floatOpen, setFloatOpen] = useState(false);
  const [floatDismissed, setFloatDismissed] = useState(false);

  useEffect(() => {
    if (!post) {
      applyPageSeo({
        title: `Article not found | ${SITE_NAME}`,
        description: "That article is not published on the ATP Consulting Services blog.",
        path: `/blog/${slug || ""}`,
        robots: "noindex, follow",
      });
    } else {
      applyPageSeo({
        title: `${post.seoTitle || post.title} | ${SITE_NAME}`,
        description: post.description,
        path: `/blog/${post.slug}`,
        ogType: "article",
        published: post.date,
      });
    }
    window.scrollTo(0, 0);
  }, [post, slug]);

  useEffect(() => {
    if (!post || floatDismissed) return undefined;
    const onScroll = () => {
      const closeTop = closeRef.current?.getBoundingClientRect().top ?? Infinity;
      const pastHero = window.scrollY > 520;
      const bannerVisible = closeTop < window.innerHeight - 80;
      setFloatOpen(pastHero && !bannerVisible);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [post, floatDismissed]);

  if (!post) {
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
            <h1>That article is not on the site yet.</h1>
            <p className="blog-offer__lead">
              The notes that are published live on the blog. Services, packages,
              and a free consultation are available now.
            </p>
            <div className="blog-offer__actions">
              <Link to="/blog" className="btn btn--primary">
                Back to the Blog
              </Link>
              <Link to="/services" className="btn btn--secondary">
                See All Services
              </Link>
            </div>
          </div>
        </header>
        <Footer />
        <ContactModal ref={consultRef} />
      </div>
    );
  }

  const jsonLd = businessJsonLd({
    path: `/blog/${post.slug}`,
    title: post.title,
    description: post.description,
    published: post.date,
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
          <p className="blog-offer__kicker">
            <time dateTime={`${post.date}T08:00:00-07:00`}>{formatBlogDate(post.date)}</time>
          </p>
          <h1>{post.title}</h1>
          <p className="blog-offer__lead">{post.description}</p>
          <div className="blog-offer__actions">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => consultRef.current?.open()}
            >
              Request a Free Consultation
            </button>
            <Link to="/blog" className="btn btn--secondary">
              All Articles
            </Link>
          </div>
        </div>
      </header>
      <article className="blog-post">
        <div className="blog-post__inner">
          {(post.sections || []).map((section) => (
            <section key={section.heading || "intro"}>
              {section.heading ? <h2>{section.heading}</h2> : null}
              {(section.paragraphs || []).map((paragraph, index) => (
                <p key={`${section.heading || "intro"}-${index}`}>
                  <RichText value={paragraph} />
                </p>
              ))}
              {section.list?.length ? (
                <ul>
                  {section.list.map((item, index) => (
                    <li key={`${section.heading}-item-${index}`}>
                      <RichText value={item} />
                    </li>
                  ))}
                </ul>
              ) : null}
              {(section.paragraphsAfter || []).map((paragraph, index) => (
                <p key={`${section.heading || "after"}-after-${index}`}>
                  <RichText value={paragraph} />
                </p>
              ))}
            </section>
          ))}
          {post.author?.bio ? <p className="blog-post__byline">{post.author.bio}</p> : null}
          {post.upcoming?.length ? (
            <section className="blog-post__next">
              <h2>{post.relatedHeading || "Next on the blog"}</h2>
              <p>
                {post.relatedIntro ||
                  "This article is the base. The notes below go deeper on the same ideas."}
              </p>
              <ul>
                {post.upcoming.map((item) => {
                  const title = typeof item === "string" ? item : item.title;
                  const href = typeof item === "string" ? null : item.href;
                  return (
                    <li key={title}>
                      {href ? <Link to={href}>{title}</Link> : title}
                    </li>
                  );
                })}
              </ul>
            </section>
          ) : null}
        </div>
      </article>
      <section className="blog-offer__close" ref={closeRef}>
        <div className="blog-offer__close-inner">
          <p>{post.cta}</p>
          <div className="blog-offer__actions">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => consultRef.current?.open()}
            >
              Request a Free Audit
            </button>
            <Link to="/services" className="btn btn--navy">
              See All Services
            </Link>
          </div>
        </div>
      </section>
      {floatOpen ? (
        <div className="blog-float" role="region" aria-label="Free site audit">
          <p>{post.cta}</p>
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => consultRef.current?.open()}
          >
            Request a Free Audit
          </button>
          <button
            type="button"
            className="blog-float__dismiss"
            onClick={() => setFloatDismissed(true)}
          >
            Dismiss
          </button>
        </div>
      ) : null}
      <Footer />
      <ContactModal ref={consultRef} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostJsonLd(post)) }}
      />
    </div>
  );
};

export default BlogPostPage;
