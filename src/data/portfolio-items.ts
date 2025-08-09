// src/data/portfolio-items.ts

// Internal imports
import { portfolioItem } from "@/data/website-data";
import { TIFFtoPDFConverterDesktop } from "./tiff-to-pdf-converter-desktop";
import { TIFFtoPDFConverterWeb } from "./tiff-to-pdf-converter-web";

export const portfolioItems: portfolioItem[] = [
  TIFFtoPDFConverterWeb,
  TIFFtoPDFConverterDesktop,
];
