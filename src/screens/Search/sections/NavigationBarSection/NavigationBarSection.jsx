import { ChevronDownIcon, UserIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Separator } from "../../../../components/ui/separator";

export const NavigationBarSection = () => {
  const navigationItems = [
    { label: "Home" },
    { label: "Projects" },
    { label: "Products" },
    { label: "Companies" },
    { label: "People" },
    { label: "Exclusive Services" },
  ];

  const rightNavigationItems = [
    { label: "Contact Us" },
    { label: "Membership" },
  ];

  return (
    <header className="flex flex-col w-full h-[62px] items-center px-0 py-2.5 bg-white-bg border-b border-line overflow-x-scroll">
      <div className="flex w-full max-w-[1440px] h-10 items-center justify-between px-[60px] py-0">
        <div className="flex items-center w-[153px] h-10">
          <div className="inline-flex items-center gap-2">
            <img
              className="w-[153px] h-8"
              alt="Original color CPS"
              src="https://c.animaapp.com/tdfapug9/img/original-color-cps-logo-4x-1@2x.png"
            />
          </div>
        </div>

        <NavigationMenu className="flex w-[900px] h-10 items-center justify-center">
          <NavigationMenuList className="flex items-center gap-[5px] px-[5px] py-0">
            {navigationItems.map((item, index) => (
              <NavigationMenuItem
                key={index}
                className="flex flex-col items-center justify-center gap-[5px] p-[5px]"
              >
                <NavigationMenuLink className="flex items-center justify-center gap-[5px] p-[5px] font-home-button font-[number:var(--home-button-font-weight)] text-[color:var(--body-text)] text-[length:var(--home-button-font-size)] text-center tracking-[var(--home-button-letter-spacing)] leading-[var(--home-button-line-height)] whitespace-nowrap [font-style:var(--home-button-font-style)] hover:bg-accent hover:text-accent-foreground">
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}

            <div className="inline-flex h-[30px] items-center justify-center">
              <Separator
                orientation="vertical"
                className="h-full w-px bg-line"
              />
            </div>

            {rightNavigationItems.map((item, index) => (
              <NavigationMenuItem
                key={index}
                className="flex flex-col items-center justify-center gap-[5px] p-[5px]"
              >
                <NavigationMenuLink className="flex items-center justify-center gap-[5px] p-[5px] font-home-button font-[number:var(--home-button-font-weight)] text-[color:var(--body-text)] text-[length:var(--home-button-font-size)] text-center tracking-[var(--home-button-letter-spacing)] leading-[var(--home-button-line-height)] whitespace-nowrap [font-style:var(--home-button-font-style)] hover:bg-accent hover:text-accent-foreground">
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center w-[260px] h-10">
          <div className="flex w-[89px] h-10 justify-end pl-2 pr-0 py-0 ml-auto mr-5 items-center gap-2.5">
            <div className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 flex-[0_0_auto] ml-[-111.40px]">
              <div className="inline-flex p-[11px] flex-[0_0_auto] mt-[-10.00px] mb-[-10.00px] items-center gap-2.5">
                <UserIcon className="w-[18px] h-[18px]" />
              </div>

              <Avatar className="w-10 h-10 mt-[-10.00px] mb-[-10.00px]">
                <AvatarImage
                  src="https://c.animaapp.com/tdfapug9/img/avatar@2x.png"
                  alt="Avatar"
                  className="object-cover"
                />
              </Avatar>
            </div>

            <div className="inline-flex h-[30px] items-center">
              <Separator
                orientation="vertical"
                className="h-full w-px bg-line"
              />
            </div>

            <div className="inline-flex items-center gap-2.5 border-b-2 border-grey-30 overflow-y-scroll cursor-pointer hover:bg-accent">
              <div className="h-10 inline-flex items-center justify-center gap-[5px] p-[5px]">
                <div className="flex items-center justify-center font-home-button font-[number:var(--home-button-font-weight)] text-[color:var(--body-text)] text-[length:var(--home-button-font-size)] text-center tracking-[var(--home-button-letter-spacing)] leading-[var(--home-button-line-height)] whitespace-nowrap [font-style:var(--home-button-font-style)]">
                  EN
                </div>
              </div>

              <ChevronDownIcon className="w-[7.4px] h-3" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
