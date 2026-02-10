// src/app/sitemap.ts
import { websiteURL } from "@/data/website-data";
import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();
  return [
    {
      url: `${websiteURL}/`,
      lastModified: currentDate,
    },
    {
      url: `${websiteURL}/help/`,
      lastModified: currentDate,
    },
    {
      url: `${websiteURL}/batch-tiff-pdf-conversion/`,
      lastModified: currentDate,
    },
    {
      url: `${websiteURL}/how-to-merge-tiff-to-pdf/`,
      lastModified: currentDate,
    },
    {
      url: `${websiteURL}/how-to-split-tiff-into-pdf/`,
      lastModified: currentDate,
    },
  ];
}
