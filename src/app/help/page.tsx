//src/app/help/page.tsx

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
              <BreadcrumbPage>Software User Guide</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <section className="container mx-auto px-5 lg:px-10 xl:max-w-screen-xl">
        <SectionHeader
          className="mt-10 lg:mt-16"
          caption="Software User Guide"
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
                galleryID="software-user-guide"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="mt-10 font-semibold">Adding files:</h2>
            <p className="mt-2">
              Download Free TIFF to PDF Converter and install it on your
              computer. A full version of the program is available for download.
              Run the application, you can see the above screen.
            </p>
            <p className="mt-2">
              Clicking the &quot;Add Files&quot; button will open the standard
              file browse and select window. From that window you can navigate
              to the folder and find the files you want to add to the list to be
              converted from.
            </p>
            <p className="mt-2">
              Alternatively, If you are using Windows Explorer to locate files,
              you have the convenience of being able to drag and drop files and
              folders into the list.
            </p>

            <p className="mt-2">
              This software application even allows you to select all files in a
              particular directory/folder by clicking the &quot;Add Folder&quot;
              button. It also supports sub-folders.
            </p>
            <p className="mt-2">
              By using &quot;Move Up&quot; and &quot;Move Down&quot; buttons you
              can rearrange the position of files in the list. If you want to
              remove any selected files from the list, you can click
              &quot;Remove&quot; button and if you want to clear all the files
              from the list, you can use &quot;Remove All&quot; button.
            </p>
            <div className="my-10 flex justify-center">
              <ProductImage
                src={productImages.TIFFtoPDFConverterFilesSelected.imgName}
                width={productImages.TIFFtoPDFConverterFilesSelected.width}
                height={productImages.TIFFtoPDFConverterFilesSelected.height}
                alt={productImages.TIFFtoPDFConverterFilesSelected.title}
                galleryID="software-user-guide-files-selected"
              />
            </div>
            <h2 className="mt-10 font-semibold">Modify Settings:</h2>
            <p className="mt-2">
              Output Folder: Browse output folder that you want or keep it
              default. You can also select &quot;Save to same folder as original
              file&quot;.
            </p>
            <p className="mt-2">
              If you want to view output files after conversion, select this
              option &quot;Open output folder after conversion&quot;
            </p>
            <p className="mt-2">
              Output Mode: If you want to convert TIFF to PDF as it is, select
              &quot;Convert each TIFF to PDF&quot;, if you want to merge all
              selected TIFF into single PDF file, then select &quot;Combine all
              TIFF to PDF&quot; or if you want to split TIFF file into single
              page PDF, then select &quot;Split each TIFF to PDF&quot; option.
            </p>
            <p className="mt-2">
              Compression: You can select TIFF compression of your choice from
              ZIP, LZW, FAX, Group4 or RLE.
            </p>
            <div className="my-10 flex justify-center">
              <ProductImage
                src={productImages.TIFFtoPDFConverterSettings.imgName}
                width={productImages.TIFFtoPDFConverterSettings.width}
                height={productImages.TIFFtoPDFConverterSettings.height}
                alt={productImages.TIFFtoPDFConverterSettings.title}
                galleryID="software-user-guide-settings"
              />
            </div>
            <h2 className="mt-10 font-semibold">Start Conversion:</h2>
            <p className="mt-2">
              After adding all your files and selecting your settings, you can
              now click &quot;Convert&quot; button to start conversion process.
              You will get your output in your selected location.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
