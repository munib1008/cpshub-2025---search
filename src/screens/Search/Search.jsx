import React from "react";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { NavigationBarSection } from "./sections/NavigationBarSection/NavigationBarSection";
import { SearchHeaderSection } from "./sections/SearchHeaderSection/SearchHeaderSection";

export const Search = () => {
  return (
    <div
      className="flex flex-col w-full bg-white-bg-40 border border-solid border-primary-cta overflow-x-hidden"
      data-model-id="562:28906"
    >
      <NavigationBarSection />
      <SearchHeaderSection />
      <MainContentSection />
      <FooterSection />
    </div>
  );
};
