"use client";

import { useState } from "react";
import { ContactInfo } from "./components/ContactInfo";
import { PersonalInfo } from "./components/PersonalInfo";
import { ProfileInfo } from "./components/ProfileInfo";

// const mockData = [""];

export default function Home() {
  const [step, setStep] = useState(1);
  let count = 0;
  console.log(count, "count");
  console.log(step, "step");

  return (
    <div className="flex justify-center items-center flex-col">
      {step == 1 && <PersonalInfo />}
      {step == 2 && <ContactInfo />}
      {step == 3 && <ProfileInfo />}
      {step + "state     "}
      {count + " huwisagch"}
      <button
        onClick={() => {
          count = count + 1;
          console.log("daragdlaa");
          setStep(step + 1);
        }}
      >
        Continue
      </button>
    </div>
  );
}
