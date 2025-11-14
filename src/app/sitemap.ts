import { portfolioItems } from "@/data/portfolio-items";
import { ProductIDs, websiteURL } from "@/data/website-data";
import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${websiteURL}/`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${websiteURL}/help`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${websiteURL}/batch-tiff-pdf-conversion`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${websiteURL}/how-to-merge-tiff-to-pdf`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${websiteURL}/how-to-split-tiff-into-pdf`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
