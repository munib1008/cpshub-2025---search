import { ChevronDownIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "../../../../components/ui/pagination";

export const MainContentSection = () => {
  const navigationTabs = [
    {
      id: "all",
      label: "All",
      icon: "https://c.animaapp.com/tdfapug9/img/cpshub-4.svg",
      active: true,
    },
    {
      id: "projects",
      label: "Projects",
      icon: "https://c.animaapp.com/tdfapug9/img/project-logo.svg",
      active: false,
    },
    {
      id: "products",
      label: "Products",
      icon: "https://c.animaapp.com/tdfapug9/img/product-logo.svg",
      active: false,
    },
    {
      id: "companies",
      label: "Companies",
      icon: "https://c.animaapp.com/tdfapug9/img/company-logo.svg",
      active: false,
    },
    {
      id: "people",
      label: "Peple",
      icon: "https://c.animaapp.com/tdfapug9/img/people-logo.svg",
      active: false,
    },
  ];

  const searchResults = [
    {
      title: "Dubai Downtown Circle",
      subtitle: "Mega Project in Dubai Downtown",
      description:
        "Prepare to be amazed by the Downtown Circle, a revolutionary project that will encircle the iconic Burj Khalifa with its 550-meter-tall ring. Designed by Znera Space, this monumental structure will feature a 3,000-meter circumference integrating residential, industrial, and public spaces.",
      icon: "https://c.animaapp.com/tdfapug9/img/project-logo-1.svg",
      alt: "Project logo",
    },
    {
      title: "Door Closer",
      subtitle: "Mega Project in Dubai Downtown",
      description:
        "Prepare to be amazed by the Downtown Circle, a revolutionary project that will encircle the iconic Burj Khalifa with its 550-meter-tall ring. Designed by Znera Space, this monumental structure will feature a 3,000-meter circumference integrating residential, industrial, and public spaces.",
      icon: "https://c.animaapp.com/tdfapug9/img/product-logo-1.svg",
      alt: "Product logo",
    },
    {
      title: "Dubai Downtown Circle",
      subtitle: "Mega Project in Dubai Downtown",
      description:
        "Prepare to be amazed by the Downtown Circle, a revolutionary project that will encircle the iconic Burj Khalifa with its 550-meter-tall ring. Designed by Znera Space, this monumental structure will feature a 3,000-meter circumference integrating residential, industrial, and public spaces.",
      icon: "https://c.animaapp.com/tdfapug9/img/project-logo-2.svg",
      alt: "Project logo",
    },
    {
      title: "CPShub",
      subtitle: "Mega Project in Dubai Downtown",
      description:
        "Prepare to be amazed by the Downtown Circle, a revolutionary project that will encircle the iconic Burj Khalifa with its 550-meter-tall ring. Designed by Znera Space, this monumental structure will feature a 3,000-meter circumference integrating residential, industrial, and public spaces.",
      icon: "https://c.animaapp.com/tdfapug9/img/company-logo-1.svg",
      alt: "Company logo",
    },
    {
      title: "Bilal Ahamed",
      subtitle: "Mega Project in Dubai Downtown",
      description:
        "Prepare to be amazed by the Downtown Circle, a revolutionary project that will encircle the iconic Burj Khalifa with its 550-meter-tall ring. Designed by Znera Space, this monumental structure will feature a 3,000-meter circumference integrating residential, industrial, and public spaces.",
      icon: "https://c.animaapp.com/tdfapug9/img/people-logo-1.svg",
      alt: "People logo",
    },
  ];

  const paginationItems = [
    { page: "1", active: true },
    { page: "2", active: false },
    { page: "3", active: false },
    { page: "4", active: false },
    { page: "...", active: false },
    { page: "10", active: false },
  ];

  return (
    <main className="flex flex-col w-full items-center gap-10 p-[60px] bg-white-bg rounded overflow-hidden relative">
      <section className="flex items-center gap-2.5 w-full">
        <div className="flex w-[800px] h-[60px] items-center gap-1 p-3 bg-white-bg rounded border border-solid border-[color:var(--body-text)] shadow-light-medium">
          <Input
            defaultValue="SearchIcon Result"
            className="flex-1 border-0 shadow-none font-[number:var(--button-text-font-weight)] text-[color:var(--body-text)] text-[length:var(--button-text-font-size)] leading-[var(--button-text-line-height)] font-button-text tracking-[var(--button-text-letter-spacing)] [font-style:var(--button-text-font-style)] focus-visible:ring-0"
          />
          <SearchIcon className="w-[18px] h-[18px]" />
        </div>
      </section>

      <nav className="flex items-end gap-2.5 w-full">
        <div className="flex w-full items-center border-b-2 [border-bottom-style:solid] border-[color:var(--body-text)]">
          {navigationTabs.map((tab, index) => (
            <div key={tab.id} className="flex items-center">
              <Button
                variant="ghost"
                className={`flex w-[150px] h-10 items-center justify-center gap-1.5 pl-2.5 pr-1 py-2 rounded-none hover:bg-transparent ${
                  tab.active
                    ? "border-b-[5px] [border-bottom-style:solid] border-[color:var(--body-text)]"
                    : ""
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex w-5 h-5 items-center justify-center">
                    <img
                      className="w-5 h-5"
                      alt={tab.alt || tab.label}
                      src={tab.icon}
                    />
                  </div>
                </div>
                <span className="font-navigation-nav-link-regular font-[number:var(--navigation-nav-link-regular-font-weight)] text-colors-component-general-component-color text-[length:var(--navigation-nav-link-regular-font-size)] tracking-[var(--navigation-nav-link-regular-letter-spacing)] leading-[var(--navigation-nav-link-regular-line-height)] whitespace-nowrap [font-style:var(--navigation-nav-link-regular-font-style)]">
                  {tab.label}
                </span>
              </Button>
              {index < navigationTabs.length - 1 && (
                <div className="h-10 flex items-center pl-3.5">
                  <div className="w-px h-full bg-colors-component-general-border-color" />
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      <Card className="flex flex-col h-[500px] gap-2.5 px-[30px] py-5 w-full bg-grey-30 rounded-[40px] border-line items-center justify-center shadow-light-medium">
        <CardContent className="p-0 w-full">
          <div className="flex items-center gap-2.5 w-full mb-2.5">
            <div className="w-5 h-7 bg-[url(https://c.animaapp.com/tdfapug9/img/group-2@2x.png)] bg-[100%_100%]" />
            <div className="font-normal text-[color:var(--body-text)] text-base leading-6 whitespace-nowrap [font-family:'Poppins',Helvetica] tracking-[0]">
              <span className="font-[number:var(--button-text-font-weight)] font-button-text [font-style:var(--button-text-font-style)] tracking-[var(--button-text-letter-spacing)] leading-[var(--button-text-line-height)] text-[length:var(--button-text-font-size)]">
                CPS
              </span>
              <span className="font-[number:var(--body-text-font-weight)] font-body-text [font-style:var(--body-text-font-style)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] text-[length:var(--body-text-font-size)]">
                hub.AI Overview
              </span>
            </div>
          </div>

          <div className="w-full h-[364px] mb-2.5">
            <div className="w-full bg-[linear-gradient(180deg,rgba(64,64,64,1)_0%,rgba(64,64,64,1)_66%,rgba(245,245,245,1)_84%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-[number:var(--SUB-bold-font-weight)] text-kit-section-fill text-[length:var(--SUB-bold-font-size)] leading-[var(--SUB-bold-line-height)] font-SUB-bold tracking-[var(--SUB-bold-letter-spacing)] [font-style:var(--SUB-bold-font-style)]">
              <span className="text-black font-SUB-bold [font-style:var(--SUB-bold-font-style)] font-[number:var(--SUB-bold-font-weight)] tracking-[var(--SUB-bold-letter-spacing)] leading-[var(--SUB-bold-line-height)] text-[length:var(--SUB-bold-font-size)]">
                Short Summary about search using CPShub.AI Several free methods
                and tools are available to export Figma designs to HTML:
                <br />
                Figma Plugins:
                <br />
                Anima: This plugin allows you to select Figma frames, preview
                them in a browser, and then download the generated HTML and CSS
                code as a zip file. It offers options for &#34;Pure HTML&#34;
                and &#34;Auto Flex&#34; for responsive layouts.
                <br />
                TeleportHQ Design to Code: This free plugin allows you to export
                Figma frames directly to TeleportHQ, a platform that converts
                designs into production-ready code including HTML and CSS. You
                can also copy layers to the clipboard and paste them into an
                existing TeleportHQ project.
                <br />
                Framer: This plugin enables you to copy Figma designs and paste
                them into Framer, which then adapts the design for its layout
                tools and allows you to publish to a free domain.
                <br />
              </span>

              <a
                href="https://siter.io/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="text-black font-SUB-bold [font-style:var(--SUB-bold-font-style)] font-[number:var(--SUB-bold-font-weight)] tracking-[var(--SUB-bold-letter-spacing)] leading-[var(--SUB-bold-line-height)] text-[length:var(--SUB-bold-font-size)]">
                  Siter.io
                </span>
              </a>

              <span className="text-black font-SUB-bold [font-style:var(--SUB-bold-font-style)] font-[number:var(--SUB-bold-font-weight)] tracking-[var(--SUB-bold-letter-spacing)] leading-[var(--SUB-bold-line-height)] text-[length:var(--SUB-bold-font-size)]">
                : This plugin facilitates the export of Figma designs to
                websites and HTML, offering a platform to manage and publish
                simple websites based on your Figma files.
                <br />
                GreatFrontEnd – Figma to Code: This free Figma plugin
                specifically focuses on generating HTML, CSS, and Tailwind CSS
                code from your Figma designs.
              </span>
            </div>
          </div>

          <Button className="flex gap-1 p-3 bg-white-bg rounded-[var(--shape-corner-extra-large)] border-[color:var(--body-text)] items-center justify-center border border-solid shadow-light-medium h-auto hover:bg-white-bg">
            <span className="w-[754px] font-[number:var(--button-text-font-weight)] text-[color:var(--body-text)] text-[length:var(--button-text-font-size)] text-center leading-[var(--button-text-line-height)] font-button-text tracking-[var(--button-text-letter-spacing)] [font-style:var(--button-text-font-style)]">
              See More
            </span>
            <ChevronDownIcon className="w-[18px] h-[18px]" />
          </Button>
        </CardContent>
      </Card>

      <section className="flex flex-col items-start gap-6 px-0 py-5 w-full border-t-2 [border-top-style:solid] border-[color:var(--body-text)]">
        {searchResults.map((result, index) => (
          <Card
            key={index}
            className="flex items-start justify-center p-5 w-full border border-solid border-line"
          >
            <CardContent className="flex w-full p-0">
              <div className="flex w-[100px] h-[100px] items-start p-2.5">
                <img className="w-20 h-20" alt={result.alt} src={result.icon} />
              </div>

              <div className="flex items-start gap-6 p-2.5 flex-1">
                <div className="flex flex-col h-[120px] items-start gap-3 flex-1">
                  <div className="flex items-center gap-4 w-full">
                    <h3 className="flex-1 font-heading-desktop-h6 font-[number:var(--heading-desktop-h6-font-weight)] text-[color:var(--body-text)] text-[length:var(--heading-desktop-h6-font-size)] tracking-[var(--heading-desktop-h6-letter-spacing)] leading-[var(--heading-desktop-h6-line-height)] [font-style:var(--heading-desktop-h6-font-style)]">
                      {result.title}
                    </h3>
                  </div>

                  <div className="flex flex-col items-start gap-4 w-full">
                    <div className="w-full font-navigation-nav-link-small font-[number:var(--navigation-nav-link-small-font-weight)] text-[color:var(--body-text)] text-[length:var(--navigation-nav-link-small-font-size)] tracking-[var(--navigation-nav-link-small-letter-spacing)] leading-[var(--navigation-nav-link-small-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--navigation-nav-link-small-font-style)]">
                      {result.subtitle}
                    </div>

                    <p className="w-full font-body-small font-[number:var(--body-small-font-weight)] text-[color:var(--body-text)] text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                      {result.description}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        <Pagination className="gap-1 pt-[var(--sizes-spacing-spacer-2)] pb-0 px-0 flex items-start">
          <PaginationContent className="gap-1">
            {paginationItems.map((item, index) => (
              <PaginationItem key={index}>
                {item.page === "..." ? (
                  <PaginationEllipsis className="flex-col pt-[var(--sizes-spacing-spacer-2)] pr-[var(--sizes-spacing-spacer-2)] pb-[var(--sizes-spacing-spacer-2)] pl-[var(--sizes-spacing-spacer-2)] rounded-[var(--sizes-border-radius-border-radius)] overflow-hidden inline-flex items-start">
                    <span className="w-6 font-navigation-nav-link-regular font-[number:var(--navigation-nav-link-regular-font-weight)] text-[color:var(--body-text)] text-[length:var(--navigation-nav-link-regular-font-size)] text-center leading-[var(--navigation-nav-link-regular-line-height)] tracking-[var(--navigation-nav-link-regular-letter-spacing)] [font-style:var(--navigation-nav-link-regular-font-style)]">
                      ...
                    </span>
                  </PaginationEllipsis>
                ) : (
                  <PaginationLink
                    className={`flex-col pt-[var(--sizes-spacing-spacer-2)] pr-[var(--sizes-spacing-spacer-2)] pb-[var(--sizes-spacing-spacer-2)] pl-[var(--sizes-spacing-spacer-2)] rounded-[var(--sizes-border-radius-border-radius)] overflow-hidden inline-flex items-start ${
                      item.active ? "bg-line" : ""
                    }`}
                    isActive={item.active}
                  >
                    <span className="w-6 font-navigation-nav-link-regular font-[number:var(--navigation-nav-link-regular-font-weight)] text-[color:var(--body-text)] text-[length:var(--navigation-nav-link-regular-font-size)] text-center tracking-[var(--navigation-nav-link-regular-letter-spacing)] leading-[var(--navigation-nav-link-regular-line-height)] [font-style:var(--navigation-nav-link-regular-font-style)]">
                      {item.page}
                    </span>
                  </PaginationLink>
                )}
              </PaginationItem>
            ))}
          </PaginationContent>
        </Pagination>
      </section>
    </main>
  );
};
