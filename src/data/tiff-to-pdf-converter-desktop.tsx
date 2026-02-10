// src/data/tiff-to-pdf-converter-desktop.tsx

import {
  Categories,
  portfolioItem,
  ProductIDs,
  productImages,
  productSubTitles,
  productTitles,
  productWebsites,
  productDownloadLinks,
} from "@/data/website-data";
import cloudinaryLoader from "@/lib/cloudinary-loader";

/* ---------------------------------------------
 * Constants
 * -------------------------------------------- */

const PRODUCT_ID = ProductIDs.TIFFtoPDFConverterDesktop;
const TITLE = productTitles.TIFFtoPDFConverterDesktop;
const WEBSITE = productWebsites.TIFFtoPDFConverterDesktop;
const IMAGE = productImages.TIFFtoPDFConverterDesktop;

const SEO_DESCRIPTION =
  "Free TIFF to PDF converter for Windows desktop - Convert single or batch TIFF files to PDF offline with advanced compression, drag-and-drop interface, and zero dependencies. No internet required, complete privacy guaranteed.";

const OG_IMAGE = {
  url: cloudinaryLoader({
    src: IMAGE.imgName,
    width: IMAGE.width,
  }),
  width: IMAGE.width,
  height: IMAGE.height,
  alt: `Free ${TITLE} for Windows`,
};

/* ---------------------------------------------
 * Description Sections
 * -------------------------------------------- */

const descriptionSections = [
  {
    title: "The Ultimate TIFF to PDF Converter for Windows",
    content:
      "Convert TIFF files to PDFs securely and efficiently using our powerful Windows desktop application. All processing happens locally on your system, ensuring complete privacy and zero dependency on internet connectivity.",
  },
  {
    title: "High-Speed and Reliable Conversions",
    content:
      "Engineered for performance, the converter delivers fast and consistent results whether you're working at home, in the office, or offline. Convert TIFF images to PDF in seconds without interruptions.",
  },
  {
    title: "Effortless Batch Conversion",
    content:
      "Convert hundreds or thousands of TIFF files in one go. The batch processing engine handles large workloads efficiently, eliminating the need to convert files individually.",
  },
  {
    title: "Intuitive Drag-and-Drop Interface",
    content:
      "Simply drag and drop TIFF files or folders into the application and start converting instantly. The clean, beginner-friendly interface keeps the workflow simple and distraction-free.",
  },
  {
    title: "Flexible Conversion Modes",
    content:
      "Convert each TIFF into a separate PDF, merge multiple TIFF files into a single multi-page PDF, or split TIFF images into individual PDF pages. Choose the workflow that fits your task.",
  },
  {
    title: "Advanced Compression Settings",
    content:
      "Fine-tune PDF output using ZIP, LZW, FAX Group 4, RLE, or no compression at all. Balance file size and image quality based on your requirements.",
  },
  {
    title: "Built for High-Volume Workloads",
    content:
      "Designed for professionals and power users, the converter handles massive TIFF collections with ease. Add files, configure settings, and convert thousands of images in just a few clicks.",
  },
  {
    title: "Simple for Beginners, Powerful for Experts",
    content:
      "While easy to use out of the box, the software also offers advanced configuration options for users who need precise control over output quality and structure.",
  },
  {
    title: "Why Convert TIFF to PDF?",
    content:
      "TIFF files offer excellent image quality but are often inconvenient for sharing and printing. PDFs ensure universal compatibility, consistent formatting, and easy archiving across devices and platforms.",
  },
  {
    title: "Conclusion",
    content:
      "Our TIFF to PDF Converter for Windows combines speed, security, and flexibility in one powerful desktop tool. Whether converting a few files or processing thousands, it delivers professional results every time.",
  },
];

/* ---------------------------------------------
 * Portfolio Item
 * -------------------------------------------- */

export const TIFFtoPDFConverterDesktop: portfolioItem = {
  id: PRODUCT_ID,
  title: TITLE,
  subtitle: productSubTitles.TIFFtoPDFConverterDesktop,

  src: IMAGE.imgName,
  width: IMAGE.width,
  height: IMAGE.height,

  categories: [Categories.All, Categories.DesktopApp, Categories.Converter],

  pageLink: `/${PRODUCT_ID}`,
  productWebsite: WEBSITE,
  downloadLink: productDownloadLinks.TIFFtoPDFConverter,

  features: [
    "Convert Locally with Complete Offline Security",
    "Ultra-Fast TIFF to PDF Conversion",
    "Effortless Batch Processing",
    "Intuitive Drag-and-Drop Interface",
    "Multiple Conversion Modes",
    "Advanced Compression Options",
    "Reorder Images Before Conversion",
  ],

  description: (
    <section className="mt-10 flex flex-col gap-10">
      {descriptionSections.map(({ title, content }) => (
        <div key={title}>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-muted-foreground mt-2">{content}</p>
        </div>
      ))}
    </section>
  ),

  metaData: {
    title: `${TITLE} for Windows | Free Desktop App | Download Now`,
    description: SEO_DESCRIPTION,
    keywords:
      "TIFF to PDF converter Windows, free TIFF to PDF software, batch TIFF to PDF, desktop PDF converter, offline TIFF converter, convert TIFF to PDF free download, image to PDF Windows, TIFF compression utility, bulk TIFF converter, Windows desktop application, TIFF to PDF batch processing, secure PDF conversion",

    alternates: {
      canonical: WEBSITE,
    },

    openGraph: {
      title: `${TITLE} - Free Windows Desktop App for Batch TIFF to PDF Conversion`,
      description:
        "Convert TIFF files to PDF offline with our easy-to-use Windows desktop application. Batch processing, advanced compression settings, and zero privacy concerns. Download free today.",
      url: WEBSITE,
      siteName: `${TITLE} for Windows Desktop`,
      images: [OG_IMAGE],
      locale: "en_US",
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: `${TITLE} - Free Windows Desktop TIFF to PDF Converter`,
      description:
        "Convert TIFF files to PDF offline on Windows. Fast batch processing, advanced compression, drag-and-drop interface. Download free today.",
      images: [OG_IMAGE.url],
      creator: "@YourHandle",
    },
  },
};
