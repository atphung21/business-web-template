export const archiveAuthor = {
  name: "Andy Trinh Phung",
  jobTitle: "Lead Full-Stack Software Engineer",
  locality: "Santa Ana",
  bio: "Andy Trinh Phung is a Lead Full-Stack Software Engineer and technology consultant based in Santa Ana, CA. Through ATP Consulting Services, he helps local businesses bridge the gap between their operations and modern web technologies to drive measurable growth.",
};

export function withAuthor(post) {
  return { ...post, author: archiveAuthor };
}
