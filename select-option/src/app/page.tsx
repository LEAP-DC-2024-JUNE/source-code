"use client";

import { useState } from "react";

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [countries, setCountries] = useState([
    { value: "australia", label: "Australia" },
    { value: "brazil", label: "Brazil" },
    { value: "switzerland", label: "Switzerland" },
    { value: "usa", label: "USA" },
    { value: "england", label: "England" },
    { value: "ireland", label: "Ireland" },
    { value: "greenland", label: "Greenland" },
    { value: "austria", label: "Austria" },
  ]);

  const handleSelect = (element) => {
    setSelectedCountries([...selectedCountries, element]);
    const allCountry = countries.filter((country) => country !== element);
    setCountries(allCountry);
  };

  // []
  const removeSelected = (selectedCountry) => {
    setSelectedCountries(
      selectedCountries.filter(
        (country) => country.value !== selectedCountry.value
      )
    );
    setCountries([...countries, selectedCountry]);
  };

  const clearAllSelected = () => {
    setCountries([...countries, ...selectedCountries]);
    setSelectedCountries([]);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  // console.log(countries);

  const filteredCountries = countries.filter((country) => {
    return country.value.startsWith(inputValue.toLowerCase());
  });

  return (
    <div className="flex h-[100vh] justify-center items-center">
      <div>
        {selectedCountries?.map((selectedCountry) => {
          return (
            <div className="border-2">
              <div>{selectedCountry.label}</div>
              <button onClick={() => removeSelected(selectedCountry)}>x</button>
            </div>
          );
        })}
        <button onClick={() => clearAllSelected()}>Clear</button>
      </div>
      <input onChange={(event) => handleChange(event)}></input>
      <div>
        <button onClick={() => setOpen(!isOpen)}>^</button>
        <div>
          {isOpen &&
            filteredCountries.map((element, index) => {
              return (
                <div onClick={() => handleSelect(element)} key={index}>
                  {element.label}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

// 1. Button tawichii daranguut ngu data chn haragdna
// 2. 1 element dr daranguut nemegdej haragdana
// 3. undsen datanaas select hiigdsen element hasagdana
// 4. Songoson element ee butsaaj undsen dataruu nemegdene -> Alungoo
// 5. Songogdsn elementuudiig bugdiin hasah bolomjtoi bolgono -> Anir
// 6. Search input -> Suvdaa
// 7. Style iin yanzlah
