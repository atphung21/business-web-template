/** Remove hash from the URL without reloading the page. */
export const clearUrlHash = () => {
  const { pathname, search } = window.location;
  window.history.replaceState(null, "", pathname + search);
};

/** Scroll to page top without adding a hash to the URL. */
export const scrollToTop = (event) => {
  if (event) {
    event.preventDefault();
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
  clearUrlHash();
};

/** Scroll to a section by id without leaving a hash in the URL. */
export const scrollToSection = (sectionId, event) => {
  if (event) {
    event.preventDefault();
  }
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  clearUrlHash();
};

/**
 * If someone opens an old link like /#contact, scroll there once then clean the URL.
 */
export const handleInitialHash = () => {
  const { hash } = window.location;
  if (!hash || hash.length < 2) return;

  const sectionId = hash.slice(1);
  requestAnimationFrame(() => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "auto", block: "start" });
    }
    clearUrlHash();
  });
};
