// src/data/tiff-to-pdf-converter-web.tsx
import {
  Categories,
  portfolioItem,
  ProductIDs,
  productImages,
  productSubTitles,
  productTitles,
  productWebsites,
} from "@/data/website-data";
import cloudinaryLoader from "@/lib/cloudinary-loader";

const PRODUCT_ID = ProductIDs.TIFFtoPDFConverterWeb;
const TITLE = productTitles.TIFFtoPDFConverterWeb;
const WEBSITE = productWebsites.TIFFtoPDFConverterWeb;
const IMAGE = productImages.TIFFtoPDFConverterWeb;

const SEO_DESCRIPTION =
  "Convert TIFF images to PDF securely with our free web app. Process files locally in your browser with no uploads, drag-and-drop support, and full PDF layout control.";

const OG_IMAGE = {
  url: cloudinaryLoader({
    src: IMAGE.imgName,
    width: IMAGE.width,
  }),
  width: IMAGE.width,
  height: IMAGE.height,
  alt: `Free ${TITLE} Online`,
};

/* ---------------------------------------------
 * Description sections (content-driven)
 * -------------------------------------------- */

const descriptionSections = [
  {
    title: "Local and Private Conversion in Your Browser",
    content:
      "Our TIFF to PDF converter works entirely within your browser, keeping your files safe and secure on your device. There are no uploads or external server processing, ensuring your sensitive files stay private and under your control.",
  },
  {
    title: "100% Offline – No Uploads or Internet Required",
    content:
      "Unlike many web apps that rely on cloud servers, our converter performs all operations locally. Enjoy fast, secure, and offline conversions without worrying about data breaches or internet connectivity.",
  },
  {
    title: "Supports Multi-Page and Single TIFF Files",
    content:
      "Easily convert both multi-page TIFF documents and individual TIFF images to PDFs. Whether you're working with scanned documents or high-quality image sequences, our tool handles all TIFF formats seamlessly.",
  },
  {
    title: "Combine or Split TIFF Pages in PDF",
    content:
      "Choose to combine all pages of a multi-page TIFF into one PDF or create separate PDFs for each image. Ideal for archiving, organizing, or sharing documents your way.",
  },
  {
    title: "Custom Page Settings for a Perfect Output",
    content:
      "Control orientation, page size (A4, US Letter, auto-fit), and margins to ensure accurate scaling and professional-looking PDFs.",
  },
  {
    title: "Ready for Print or Sharing",
    content:
      "Generate high-quality PDFs suitable for printing, submissions, or sharing. Your documents remain sharp and consistent.",
  },
  {
    title: "Intuitive Drag-and-Drop UI",
    content:
      "Add TIFF files instantly with a clean drag-and-drop interface—no confusing menus or unnecessary steps.",
  },
  {
    title: "Fast, Efficient TIFF to PDF Conversion",
    content:
      "Optimized for performance, the converter processes even large TIFF files quickly without compromising output quality.",
  },
  {
    title: "Accessible on Any Device",
    content:
      "Use the converter on desktop, tablet, or mobile. No installation required—just open your browser and convert.",
  },
];

/* ---------------------------------------------
 * Portfolio Item
 * -------------------------------------------- */

export const TIFFtoPDFConverterWeb: portfolioItem = {
  id: PRODUCT_ID,
  title: TITLE,
  subtitle: productSubTitles.TIFFtoPDFConverterWeb,
  src: IMAGE.imgName,
  width: IMAGE.width,
  height: IMAGE.height,

  categories: [Categories.All, Categories.WebApp, Categories.Converter],

  pageLink: `/${PRODUCT_ID}`,
  productWebsite: WEBSITE,

  features: [
    "Secure Web App for TIFF to PDF Conversion",
    "Offline Processing – Files Never Leave Your Device",
    "Convert Multi-Page or Single TIFF Files Easily",
    "Custom Orientation, Page Size, and Margins",
    "User-Friendly Interface with Drag-and-Drop Support",
  ],

  description: (
    <section className="flex flex-col gap-10">
      {descriptionSections.map(({ title, content }) => (
        <div key={title}>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-muted-foreground mt-2">{content}</p>
        </div>
      ))}
    </section>
  ),

  metaData: {
    title: `Free ${TITLE} Online | Secure TIFF to PDF Tool`,
    description: SEO_DESCRIPTION,
    keywords:
      "TIFF to PDF Converter Online, Convert TIFF to PDF Free, Multi-Page TIFF to PDF, Offline TIFF to PDF Tool, Image to PDF Web App, Secure File Converter",

    alternates: {
      canonical: WEBSITE,
    },

    openGraph: {
      title: `Free ${TITLE} Online | Secure TIFF to PDF Tool`,
      description: SEO_DESCRIPTION,
      url: WEBSITE,
      siteName: `${TITLE} Online`,
      images: [OG_IMAGE],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `Free ${TITLE} Online | Secure TIFF to PDF Tool`,
      description: SEO_DESCRIPTION,
      images: [OG_IMAGE.url],
    },
  },
};
