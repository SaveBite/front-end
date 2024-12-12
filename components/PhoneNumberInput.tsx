"use client";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PhoneNumberInput = ({error}:{error?:string}) => {
  const [selectedCountry, setSelectedCountry] = useState("Egypt");
  const [phoneNumber, setPhoneNumber] = useState("+20");

  const countries = [
    { name: "Egypt", code: "+20" },
    { name: "United States", code: "+1" },
    { name: "United Kingdom", code: "+44" },
    { name: "India", code: "+91" },
    { name: "Australia", code: "+61" },
    { name: "France", code: "+33" },
  ];

  const handleCountryChange = (value: string) => {
    const selected = countries.find((country) => country.name === value);
    if (selected) {
      setSelectedCountry(selected.name);
      setPhoneNumber(selected.code);
    }
  };

  return (
    <div>
    <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-4">
      <div className="relative w-full sm:w-auto">
        <Select onValueChange={handleCountryChange} value={selectedCountry}>
          <SelectTrigger
            className={`px-[12px] h-[78px] border-[1px] 
            ${error ? "border-error-500" : "border-black-200"}
          rounded-sm  min-w-[200px] w-[100%] outline-none caret-primary-500 focus:ring-0 focus:ring-offset-0`}
          >
            <SelectValue placeholder="Egypt" />
          </SelectTrigger>
          <SelectContent>
            {countries.map((country) => (
              <SelectItem
                key={country.code}
                className="hover:bg-[#2E70FE]"
                value={country.name}
              >
                {country.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        id="Phone-Number"
        name="Phone-Number"
        className={`px-[12px] py-[26px] border-[1px] ${
          error ? "border-error-500" : "border-black-200"
        } rounded-sm min-w-[200px] w-[100%] outline-none caret-primary-500`}
      />
      
    </div>
      {error && (
        <span className="text-error-400 font-[400] title2">{error}</span>
      )}
      </div>
  );
};

export default PhoneNumberInput;
