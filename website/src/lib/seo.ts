import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type BuildMetadataInput = {
  title?: string;
  description?: string;
  path?: `/${string}` | "/";
  noIndex?: boolean;
};

export function buildMetadata(input: BuildMetadataInput = {}): Metadata {
  const title = input.title ? `${input.title} | ${siteConfig.name}` : siteConfig.name;
  const description = input.description ?? siteConfig.description;

  const url = new URL(siteConfig.url);
  const canonical = new URL(input.path ?? "/", url).toString();

  return {
    metadataBase: url,
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title,
      description,
      url: canonical,
      images: [{ url: siteConfig.ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
    robots: input.noIndex ? { index: false, follow: false } : undefined,
  };
}

