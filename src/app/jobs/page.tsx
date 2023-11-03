"use client";

import ClearInputButton from "@/components/ui/ClearInputButton";
import Sugestions from "@/components/ui/Sugestions";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

const jobFields = [
  "3D Animation",
  "3Dmax",
  "ABAP",
  "ABB Robot Studio",
  "Abstract",
  "Acceptance testing",
  "Access",
  "Accessibility",
  "Account Management",
  "Accountability",
  "Accounting",
  "Accuracy",
];

const locations = [
  "Spain",
  "Germany",
  "France",
  "United States",
  "Japan",
  "Denmark",
  "Sweden",
  "Canada",
  "United Kingdom",
  "Vietnam",
  "India",
  "Australia",
  "New Zealand",
];

const Jobs = () => {
  const [searchText, setSearchText] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [selectedField, setSelectedField] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [keywordInputFocused, setKeywordInputFocused] = useState(false);
  const [locationInputFocused, setLocationInputFocused] = useState(false);

  const filteredJobFields = jobFields.filter((field) =>
    field.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
  );
  const filteredLocationFields = locations
    .filter((field) =>
      field.toLocaleLowerCase().includes(searchLocation.toLocaleLowerCase())
    )
    .sort();

  const selectFieldHandler = (word: string) => {
    setSelectedField(word);
    setSearchText("");
  };
  const selectLocationHandler = (word: string) => {
    setSelectedLocation(word);
    setSearchLocation("");
  };

  return (
    <main className=" min-h-screen bg-color2">
      <div className=" h-12 bg-color1"></div>
      <div className="max-w-[1400px] mx-auto -mt-10">
        <div className="flex justify-between mx-3 -mt-10 h-20 text-sm bg-colorWhite rounded-full border-4 border-color1">
          <div className="flex grow gap-1 mx-auto">
            <div className="w-1/2 relative flex items-center px-4  rounded-full ">
              <div>
                <IoIosSearch size="1.4rem" />
              </div>

              <input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onFocus={() => setKeywordInputFocused(true)}
                onBlur={() => setKeywordInputFocused(false)}
                placeholder="Start with a keyword.."
                className="pl-2 w-full outline-none text-color1 bg-transparent"
              />
              {searchText && (
                <ClearInputButton action={() => setSearchText("")} />
              )}
              {searchText && filteredJobFields.length > 0 && (
                <Sugestions
                  fields={filteredJobFields}
                  action={selectFieldHandler}
                />
              )}
            </div>
            <div className="w-1/2 flex relative items-center px-4 rounded-full ">
              <div>
                <IoLocationOutline size="1.4rem" />
              </div>

              <input
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                onFocus={() => setLocationInputFocused(true)}
                onBlur={() => setLocationInputFocused(false)}
                placeholder="Search location.."
                className="pl-2 py-6 w-full outline-none text-color1 bg-transparent"
              />
              {searchLocation && (
                <ClearInputButton action={() => setSearchLocation("")} />
              )}
              {searchLocation && filteredLocationFields.length > 0 && (
                <Sugestions
                  fields={filteredLocationFields}
                  action={selectLocationHandler}
                />
              )}
            </div>
          </div>
          <div
            className="w-20 h-20 flex items-center justify-center
            rounded-full border-4 overflow-hidden border-color1 translate-x-1 -translate-y-1 bg-color1 "
          >
            {/* <div className="w-20 h-20 flex bg-color1 text-colorWhite rounded-full items-center justify-center group-hover:w-14 group-hover:h-14 duration-300 cursor-pointer"> */}
            <div className="w-20 h-20 flex bg-color1 text-colorWhite rounded-full items-center justify-center duration-300 cursor-pointer">
              <IoIosSearch size="1.8rem" title="Search" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Jobs;
