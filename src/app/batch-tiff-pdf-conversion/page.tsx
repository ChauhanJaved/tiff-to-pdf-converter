// src/app/batch-tiff-pdf-conversion/page.tsx

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
              <BreadcrumbPage>Batch Convert TIFF to PDF</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <section className="container mx-auto px-5 lg:px-10 xl:max-w-screen-xl">
        <SectionHeader
          className="mt-10 lg:mt-16"
          caption="Batch Convert TIFF to PDF"
          element="h1"
          desc="Windows 11/10/8/7 | Fully Functional - No Limits - 15 Days Free | Safe & Secure Download"
        />
        <div className="flex flex-col items-center">
          <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 rounded-md border p-10">
            {/* ----- Box-1 ----- */}
            {portfolioItemDesktop?.downloadLink && (
              <Button asChild className="text-base">
                <a
                  href={portfolioItemDesktop.downloadLink}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center justify-center gap-3"
                >
                  <Download />
                  <span>Download Now</span>
                </a>
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
              How to convert TIFF to PDF in batch?
            </h2>
            <p className="mt-2">
              The TIFF image format is undoubtedly used widely in industries
              related to faxing, graphics editing and printing. However there
              are times when you might want to access the image in a more
              portable and standard format like Adobe&rsquo;s Portable Document
              Format (PDF).
            </p>
            <p className="mt-2">
              If you have thousands of TIFF images and they need to be converted
              into Adobe PDF documents, choose our converter program that
              accommodates batch conversions — that&rsquo;ll save both your time
              and your clicking finger. Conversion takes a few seconds and can
              be performed on a single image or a huge batch of image files
              containing hundreds if not thousands of TIFF images.
            </p>
            <p className="mt-2">
              Download Free TIFF to PDF Converter and install it on your
              computer. A full version of the program is available for download.
              Run the application, you can see the above screen.
            </p>
            <p className="mt-2">
              Click on &quot;Add Files&quot; to add TIFF files to the conversion
              list. You can also drag and drop files and folders from the
              Windows Explorer.
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
              After selecting TIFF files for conversion you can directly click
              on &quot;Convert&quot; button to start conversion. Before that you
              can change the options like output folder, output mode and TIFF
              compression. In the Output Mode, you can select &quot;Convert each
              TIFF to PDF&quot;, &quot;Combine all TIFF to PDF&quot; or
              &quot;Split each TIFF to PDF&quot;. You can also set compression
              from ZIP, LZW, FAX, Group4 and RLE.
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
              Now to convert the TIFF to PDF, click on &quot;Convert&quot;
              button to begin the batch conversion process. All of the generated
              PDF will appear in a separate output folder.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
