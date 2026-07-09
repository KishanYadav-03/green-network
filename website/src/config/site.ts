export const siteConfig = {
  name: "Green Network",
  description: "Corporate website",
  url: "https://example.com",
  ogImage: "/og.png",
  links: {
    linkedin: "",
    twitter: "",
    github: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;

