import React from "react";

export const SearchHeaderSection = () => {
  return (
    <header className="w-full gap-10 px-[60px] py-10 bg-white-bg flex items-center relative">
      <div className="flex w-[100px] h-[100px] items-start p-2.5 relative">
        <div className="relative flex-1 grow mb-[-0.18px] aspect-[1]">
          <img
            className="absolute w-[98.89%] h-[98.89%] top-0 left-0"
            alt="Group"
            src="https://c.animaapp.com/tdfapug9/img/group@2x.png"
          />

          <img
            className="absolute w-[12.23%] h-[12.25%] top-[43.70%] left-[43.84%]"
            alt="Group"
            src="https://c.animaapp.com/tdfapug9/img/group-1@2x.png"
          />
        </div>
      </div>

      <div className="inline-flex flex-col items-start justify-center gap-2.5 relative flex-[0_0_auto]">
        <h1 className="justify-center w-[970px] h-12 mt-[-1.00px] font-main-headers font-[number:var(--main-headers-font-weight)] text-[color:var(--body-text)] text-[length:var(--main-headers-font-size)] tracking-[var(--main-headers-letter-spacing)] leading-[var(--main-headers-line-height)] whitespace-nowrap flex items-center relative [font-style:var(--main-headers-font-style)]">
          CPShub Search engine.
        </h1>

        <p className="flex items-center justify-center w-[903px] font-body-text font-[number:var(--body-text-font-weight)] text-[color:var(--body-text)] text-[length:var(--body-text-font-size)] leading-[var(--body-text-line-height)] relative tracking-[var(--body-text-letter-spacing)] [font-style:var(--body-text-font-style)]">
          Explore our extensive, verified database of construction experts
          across all project roles. Access detailed profiles to connect with
          skilled professionals who can enhance the quality and efficiency of
          your construction projects.
        </p>
      </div>
    </header>
  );
};
