// src/app/how-to-merge-tiff-to-pdf/page.tsx

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
              <BreadcrumbPage>Merge TIFF into PDF</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <section className="container mx-auto px-5 lg:px-10 xl:max-w-screen-xl">
        <SectionHeader
          className="mt-10 lg:mt-16"
          caption="Merge TIFF into PDF"
          element="h1"
          desc="Windows 11/10/8/7 | Fully Functional 15 Days Free Trial | Secure Download"
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
              How to combine multiple TIFF images into single PDF in Windows?
            </h2>
            <p className="mt-2">
              Tagged Image File Format (TIFF) have been around as an image file
              format for a very long time for a few solid reasons, they are an
              industry standard in many fields such as publishing and their
              support for multi-page files is incredibly handy, they are a great
              format for working with high-resolution graphics. TIFF are often
              not the best file format when it comes to sharing work with
              colleagues or passing files on to clients however. You simply
              cannot be sure the recipient will be able to open the file.
            </p>
            <p className="mt-2">
              Portable Document Format (PDF) on the other hand, are pretty much
              universal these days. That is where our TIFF to PDF Converter
              software comes into its own. It is a powerful, full-featured tool
              that will let you combine several TIFF images into one multi-page
              PDF with ease. Rather than having to open several applications and
              export as PDF by hand, you will be able to get the job done
              quickly from one place and get back to your work.
            </p>
            <p className="mt-2">
              Download TIFF to PDF Converter and install it on your computer. A
              full version of the program is available for download. Run the
              application, you can see the above screen.
            </p>
            <p className="mt-2">
              Drag and drop TIFF image(s) (or add them by clicking the &quot;Add
              file&quot; or &quot;Add Folder&quot; button) to convert it from
              TIFF to PDF format. Reorder the sequence of images as you need
              them to appear in the final PDF document.
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
              After adding TIFF files for merger you can directly click on
              &quot;Convert&quot; button to start conversion. Before that you
              can change the options like output folder and compression. You can
              merge as many TIFF files as you need into a single PDF file. For
              that you have to select output mode as &quot;Combine all TIFF to
              PDF&quot;.
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
            <p className="mt-2">
              Now to combine TIFF to PDF, click on &quot;Convert&quot; button to
              begin the batch conversion process. All of the generated PDF will
              appear in a separate output folder.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
