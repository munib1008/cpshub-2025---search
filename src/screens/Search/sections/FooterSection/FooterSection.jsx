import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const FooterSection = () => {
  const aboutLinks = [
    "About us",
    "FAQ",
    "Collaborations",
    "Partnership Program",
    "Advertise with us",
    "Jobs & People",
  ];

  const resourcesLinks = [
    "About Middle East (ME)",
    "Middle East AEC",
    "Middle East Events",
    "Industry",
    "CPDs CEUs",
    "BIM",
  ];

  const supportLinks = [
    "Tutorials",
    "Submit support",
    "Feedback",
    "MyCRM",
    "MyNote",
    "Developers & APIs",
  ];

  const locations = [
    {
      country: "United Arab Emirates",
      address: "6004, Blue Tower\nSheikh Zayed Road\nDubai, U.A.E.",
    },
    {
      country: "United Kingdom",
      address: "128, City Road,\nLondon, EC1V 2NX, UK",
    },
  ];

  return (
    <footer
      className="flex flex-col w-full items-center gap-5 p-10 bg-[color:var(--body-text)] border-t border-[color:var(--body-text)]"
      data-colors-mode="dark"
    >
      <div className="flex w-full max-w-[1296px] items-start justify-between px-0 py-2.5">
        <div className="inline-flex flex-col items-start gap-10">
          <div className="flex-col items-start gap-2.5 inline-flex">
            <div className="inline-flex items-center justify-center gap-6">
              <div className="inline-flex items-center gap-3">
                <img
                  className="flex-shrink-0"
                  alt="LinkedIn"
                  src="https://c.animaapp.com/tdfapug9/img/frame.svg"
                />
                <div className="w-fit mt-[-1.00px] font-sub-headers font-[number:var(--sub-headers-font-weight)] text-white-bg text-[length:var(--sub-headers-font-size)] leading-[var(--sub-headers-line-height)] whitespace-nowrap tracking-[var(--sub-headers-letter-spacing)] [font-style:var(--sub-headers-font-style)]">
                  Follow us on LinkedIn
                </div>
              </div>

              <Button className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-primary-cta rounded overflow-hidden h-auto">
                <div className="mt-[-1.00px] font-body-text font-[number:var(--body-text-font-weight)] text-white-bg text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] whitespace-nowrap [font-style:var(--body-text-font-style)]">
                  Follow
                </div>
              </Button>
            </div>

            <img
              className="flex-shrink-0"
              alt="Social buttons"
              src="https://c.animaapp.com/tdfapug9/img/buttons.svg"
            />
          </div>
        </div>

        <div className="items-start justify-end gap-2.5 px-0 py-1 inline-flex">
          <div className="flex-col items-end gap-[5px] inline-flex">
            <div className="inline-flex items-start justify-end gap-4">
              <div className="w-fit mt-[-1.00px] font-sub-headers font-[number:var(--sub-headers-font-weight)] text-white-bg text-[length:var(--sub-headers-font-size)] tracking-[var(--sub-headers-letter-spacing)] leading-[var(--sub-headers-line-height)] whitespace-nowrap [font-style:var(--sub-headers-font-style)]">
                Contact us
              </div>
            </div>

            <div className="flex items-center justify-end gap-2.5 w-full">
              <PhoneIcon className="w-[12.5px] h-[12.5px] text-line" />
              <img
                className="w-3 h-3"
                alt="UAE flag"
                src="https://c.animaapp.com/tdfapug9/img/vector-1.svg"
              />
              <div className="w-fit mt-[-1.00px] font-tagline-notes font-[number:var(--tagline-notes-font-weight)] text-line text-[length:var(--tagline-notes-font-size)] tracking-[var(--tagline-notes-letter-spacing)] leading-[var(--tagline-notes-line-height)] whitespace-nowrap [font-style:var(--tagline-notes-font-style)]">
                00971 4 576 9272
              </div>
            </div>

            <div className="flex items-center justify-end gap-2.5 w-full">
              <MailIcon className="w-3 h-2.5 text-line" />
              <div className="w-fit mt-[-1.00px] font-tagline-notes font-[number:var(--tagline-notes-font-weight)] text-line text-[length:var(--tagline-notes-font-size)] tracking-[var(--tagline-notes-letter-spacing)] leading-[var(--tagline-notes-line-height)] whitespace-nowrap [font-style:var(--tagline-notes-font-style)]">
                info@CPShub.com
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full max-w-[1296px] items-start justify-center">
        <img
          className="w-[114px] h-[38px] object-cover"
          alt="CPShub logo"
          src="https://c.animaapp.com/tdfapug9/img/white-logo-4x-1@2x.png"
        />
        <div className="self-stretch font-tagline-notes font-[number:var(--tagline-notes-font-weight)] text-line text-[length:var(--tagline-notes-font-size)] tracking-[var(--tagline-notes-letter-spacing)] leading-[var(--tagline-notes-line-height)] [font-style:var(--tagline-notes-font-style)]">
          The Hub that Connects the Construction Ecosystem 'Online |
          On-the-ground
        </div>
      </div>

      <div className="flex w-full max-w-[1296px] items-start justify-between">
        <div className="flex flex-col items-start gap-5 flex-1">
          <div className="flex flex-col h-[50px] items-start gap-2.5 w-full" />

          <div className="flex flex-col items-start gap-2.5 flex-1 w-full">
            <div className="flex items-start gap-5 flex-1 w-full">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start gap-[5px] flex-1"
                >
                  <div className="flex items-center gap-2.5 w-full">
                    <MapPinIcon className="w-3 h-[15px] text-line" />
                    <div className="w-fit mt-[-1.00px] font-[number:var(--button-text-font-weight)] text-[length:var(--button-text-font-size)] whitespace-nowrap font-button-text text-line tracking-[var(--button-text-letter-spacing)] leading-[var(--button-text-line-height)] [font-style:var(--button-text-font-style)]">
                      {location.country}
                    </div>
                  </div>
                  <div className="self-stretch font-tagline-notes font-[number:var(--tagline-notes-font-weight)] text-line text-[length:var(--tagline-notes-font-size)] tracking-[var(--tagline-notes-letter-spacing)] leading-[var(--tagline-notes-line-height)] [font-style:var(--tagline-notes-font-style)] whitespace-pre-line">
                    {location.address}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-start justify-end gap-[50px] flex-1">
          <div className="gap-2.5 flex-1 flex flex-col items-start">
            <div className="self-stretch mt-[-1.00px] font-sub-headers font-[number:var(--sub-headers-font-weight)] text-white-bg text-[length:var(--sub-headers-font-size)] tracking-[var(--sub-headers-letter-spacing)] leading-[var(--sub-headers-line-height)] [font-style:var(--sub-headers-font-style)]">
              About
            </div>
            <div className="gap-[5px] w-full flex flex-col items-start">
              {aboutLinks.map((link, index) => (
                <div
                  key={index}
                  className="self-stretch mt-[-1.00px] font-tagline-notes font-[number:var(--tagline-notes-font-weight)] text-line text-[length:var(--tagline-notes-font-size)] tracking-[var(--tagline-notes-letter-spacing)] leading-[var(--tagline-notes-line-height)] [font-style:var(--tagline-notes-font-style)] cursor-pointer hover:text-white-bg transition-colors"
                >
                  {link}
                </div>
              ))}
            </div>
          </div>

          <div className="gap-2.5 flex-1 flex flex-col items-start">
            <div className="self-stretch mt-[-1.00px] font-sub-headers font-[number:var(--sub-headers-font-weight)] text-white-bg text-[length:var(--sub-headers-font-size)] tracking-[var(--sub-headers-letter-spacing)] leading-[var(--sub-headers-line-height)] [font-style:var(--sub-headers-font-style)]">
              Resources
            </div>
            <div className="gap-[5px] w-full flex flex-col items-start">
              {resourcesLinks.map((link, index) => (
                <div
                  key={index}
                  className="self-stretch mt-[-1.00px] font-tagline-notes font-[number:var(--tagline-notes-font-weight)] text-line text-[length:var(--tagline-notes-font-size)] tracking-[var(--tagline-notes-letter-spacing)] leading-[var(--tagline-notes-line-height)] [font-style:var(--tagline-notes-font-style)] cursor-pointer hover:text-white-bg transition-colors"
                >
                  {link}
                </div>
              ))}
            </div>
          </div>

          <div className="gap-2.5 flex-1 flex flex-col items-start">
            <div className="self-stretch mt-[-1.00px] font-sub-headers font-[number:var(--sub-headers-font-weight)] text-white-bg text-[length:var(--sub-headers-font-size)] tracking-[var(--sub-headers-letter-spacing)] leading-[var(--sub-headers-line-height)] [font-style:var(--sub-headers-font-style)]">
              Support
            </div>
            <div className="gap-[5px] w-full flex flex-col items-start">
              {supportLinks.map((link, index) => (
                <div
                  key={index}
                  className="self-stretch font-tagline-notes font-[number:var(--tagline-notes-font-weight)] text-line text-[length:var(--tagline-notes-font-size)] tracking-[var(--tagline-notes-letter-spacing)] leading-[var(--tagline-notes-line-height)] [font-style:var(--tagline-notes-font-style)] cursor-pointer hover:text-white-bg transition-colors"
                >
                  {link === "MyCRM" ? (
                    <>
                      <span className="font-[number:var(--tagline-notes-font-weight)] font-tagline-notes [font-style:var(--tagline-notes-font-style)] tracking-[var(--tagline-notes-letter-spacing)] leading-[var(--tagline-notes-line-height)] text-[length:var(--tagline-notes-font-size)]">
                        My
                      </span>
                      <span className="font-[number:var(--button-text-font-weight)] text-[length:var(--button-text-font-size)] font-button-text [font-style:var(--button-text-font-style)] tracking-[var(--button-text-letter-spacing)] leading-[var(--button-text-line-height)]">
                        CRM
                      </span>
                    </>
                  ) : link === "MyNote" ? (
                    <>
                      <span className="font-[number:var(--tagline-notes-font-weight)] font-tagline-notes [font-style:var(--tagline-notes-font-style)] tracking-[var(--tagline-notes-letter-spacing)] leading-[var(--tagline-notes-line-height)] text-[length:var(--tagline-notes-font-size)]">
                        My
                      </span>
                      <span className="font-[number:var(--button-text-font-weight)] text-[length:var(--button-text-font-size)] font-button-text [font-style:var(--button-text-font-style)] tracking-[var(--button-text-letter-spacing)] leading-[var(--button-text-line-height)]">
                        Note
                      </span>
                    </>
                  ) : (
                    link
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full max-w-[1296px] items-center justify-between px-0 py-2.5 opacity-80">
        <div className="w-fit font-body-small font-[number:var(--body-small-font-weight)] text-[color:var(--body-text)] text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
          © 2025 CPShub All Rights Reserved.
        </div>

        <div className="w-[242px] mt-[-1.00px] font-tagline-notes font-[number:var(--tagline-notes-font-weight)] text-line text-[length:var(--tagline-notes-font-size)] tracking-[var(--tagline-notes-letter-spacing)] leading-[var(--tagline-notes-line-height)] whitespace-nowrap [font-style:var(--tagline-notes-font-style)]">
          Privacy Policy | Terms & Conditions
        </div>

        <div className="w-fit font-body-small font-[number:var(--body-small-font-weight)] text-[color:var(--body-text)] text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
          Web Developer : CPShub
        </div>
      </div>
    </footer>
  );
};
