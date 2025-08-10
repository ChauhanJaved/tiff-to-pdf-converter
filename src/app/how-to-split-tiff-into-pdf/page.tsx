// src/app/how-to-split-tiff-into-pdf/page.tsx

// External imports
import { Download, Slash } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

// Internal imports
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/section-header";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { HeaderNavItems, ProductIDs, productImages } from "@/data/website-data";
import BreadcrumbNextLink from "@/components/breadcrumb-next-link";
import { capitalizeWords } from "@/lib/utils";
import { portfolioItems } from "@/data/portfolio-items";
import ProductImage from "@/components/product-image";

const portfolioItemDesktop = portfolioItems.find(
  (item) => item.id === ProductIDs.TIFFtoPDFConverterDesktop,
);
const portfolioItemWeb = portfolioItems.find(
  (item) => item.id === ProductIDs.TIFFtoPDFConverterWeb,
);
export const metadata: Metadata = portfolioItemDesktop?.metaData ?? {};

export default function Page() {
  return (
    <>
      <div className="px-5 pt-24">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbNextLink
                linkName={capitalizeWords(HeaderNavItems.Home)}
                hrefActiveSection={`/#${HeaderNavItems.Home}`}
                headerActiveSection={HeaderNavItems.Home}
              />
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Split TIFF into PDF</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <section className="container mx-auto px-5 lg:px-10 xl:max-w-screen-xl">
        <SectionHeader
          className="mt-10 lg:mt-16"
          caption="Split TIFF into PDF"
          element="h1"
          desc="Windows 11/10/8/7 | Fully Functional - No Limits - 15 Days Free | Safe & Secure Download"
        />
        <div className="flex flex-col items-center">
          <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 rounded-md border p-10">
            {/* ----- Box-1 ----- */}
            {portfolioItemDesktop?.downloadLink && (
              <Button asChild className="text-base">
                <Link
                  className="flex flex-row items-center justify-center gap-3"
                  href={portfolioItemDesktop.downloadLink}
                >
                  <Download />
                  <span> Download Now</span>
                </Link>
              </Button>
            )}
            {/* ----- Box-2 ----- */}
            {portfolioItemWeb?.productWebsite && (
              <Button asChild variant={"link"}>
                <Link
                  href={portfolioItemWeb.productWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try Online {portfolioItemWeb.title}{" "}
                </Link>
              </Button>
            )}
            {/* ----- Box-3 ----- */}
            <div className="mt-10 flex w-full flex-col items-center">
              <ProductImage
                src={productImages.TIFFtoPDFConverterDesktop.imgName}
                width={productImages.TIFFtoPDFConverterDesktop.width}
                height={productImages.TIFFtoPDFConverterDesktop.height}
                alt={productImages.TIFFtoPDFConverterDesktop.title}
                galleryID="TIFFtoPDFConverterDesktop"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="mt-10 font-semibold">
              <strong>How do I split TIFF into PDF document?</strong>
            </h2>
            <p className="mt-2">
              TIFF is best for any bitmap images that you intend to edit. TIFF
              images do not compress to make for smaller files, because they are
              meant to preserve quality. They offer options to use tags, layers,
              and transparency and are compatible with image manipulation tools.
              If you are looking for a small file or a web friendly format, TIFF
              is not recommended. Using our tool, it’s possible to split
              multipage TIFF and create single page PDF document.
            </p>
            <p className="mt-2">
              Download TIFF to PDF Converter and install it on your computer. A
              full version of the program is available free for 15 days. Run the
              application, you can see the above screen.
            </p>
            <p className="mt-2">
              Click on &quot;Add Files&quot; or &quot;Add Folders&quot; to add
              TIFF files to the conversion list. You can also drag and drop
              files and folders from Windows Explorer.
            </p>
            <div className="my-10 flex justify-center">
              <ProductImage
                src={productImages.TIFFtoPDFConverterFilesSelected.imgName}
                width={productImages.TIFFtoPDFConverterFilesSelected.width}
                height={productImages.TIFFtoPDFConverterFilesSelected.height}
                alt={productImages.TIFFtoPDFConverterFilesSelected.title}
                galleryID="TIFFtoPDFConverterFilesSelected"
              />
            </div>
            <p className="mt-10">
              After adding TIFF images for conversion, change the settings
              &quot;Output Mode&quot; as &quot;Split each TIFF to PDF&quot;.
            </p>
            <div className="my-10 flex justify-center">
              <ProductImage
                src={productImages.TIFFtoPDFConverterSettings.imgName}
                width={productImages.TIFFtoPDFConverterSettings.width}
                height={productImages.TIFFtoPDFConverterSettings.height}
                alt={productImages.TIFFtoPDFConverterSettings.title}
                galleryID="TIFFtoPDFConverterSettings"
              />
            </div>
            <p className="mt-10">
              Now click &quot;Convert&quot; button to begin the batch conversion
              process. All your output PDF documents will appear in the output
              folder you have selected.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
