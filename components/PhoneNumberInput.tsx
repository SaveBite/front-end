"use client";
import { useState, useEffect } from "react";

const PhoneNumberInput = () => {
  const [selectedCountry, setSelectedCountry] = useState("United States");
  const [phoneNumber, setPhoneNumber] = useState("");

  const countries = [
    { name: "Egypt", code: "+20" }, 
    { name: "United States", code: "+1" },
    { name: "United Kingdom", code: "+44" },
    { name: "India", code: "+91" },
    { name: "Australia", code: "+61" },
    { name: "France", code: "+33" },
  ];

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = countries.find((country) => country.name === e.target.value);
    if (selected) {
      setSelectedCountry(selected.name);
      setPhoneNumber(selected.code); 
    }
  };

  useEffect(() => {
    const defaultCountry = countries.find((country) => country.name === selectedCountry);
    if (defaultCountry) {
      setPhoneNumber(defaultCountry.code); 
    }
  }, []);

  return (
    <div className="flex items-center">
      <div className="relative">
        <select
          className="mr-[12px] pl-[18px] rounded-md w-[190px] h-[64px] mb-[16px] focus:outline-none border"
          value={selectedCountry}
          onChange={handleCountryChange}
        >
          {countries.map((country) => (
            <option key={country.code} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
        
      </div>

      
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Enter your phone number"
        className="outline-none caret-primary-500 w-[649px] h-[64px] rounded mb-[16px] px-[12px] py-[26px] border-[1px]"
        />
    </div>
  );
};

export default PhoneNumberInput;
