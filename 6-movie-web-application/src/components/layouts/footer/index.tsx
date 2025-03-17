"use client";

import { Rights } from "./Rights";
import { FollowUs } from "./FollowUs";
import { ContactInformation } from "./ContactInformation";

export const Footer = () => {
  return (
    <footer className="bg-indigo-700 py-10 px-5 text-sm text-[#fafafa]">
      <div className="mx-auto flex flex-col justify-between gap-y-7 lg:flex-row max-w-screen-xl">
        <Rights />

        <div className="flex gap-x-12 lg:gap-x-24">
          <ContactInformation />
          <FollowUs />
        </div>
      </div>
    </footer>
  );
};
