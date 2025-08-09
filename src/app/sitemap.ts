import { portfolioItems } from "@/data/portfolio-items";
import { ProductIDs } from "@/data/website-data";
import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const portfolioItemDesktop = portfolioItems.find(
    (item) => item.id === ProductIDs.TIFFtoPDFConverterDesktop,
  );
  return [
    {
      url: `${portfolioItemDesktop?.productWebsite}`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${portfolioItemDesktop?.productWebsite}/index.html`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${portfolioItemDesktop?.productWebsite}/help.html`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${portfolioItemDesktop?.productWebsite}/batch-tiff-pdf-conversion.html`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${portfolioItemDesktop?.productWebsite}/how-to-merge-tiff-to-pdf.html`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${portfolioItemDesktop?.productWebsite}/how-to-split-tiff-into-pdf.html`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
