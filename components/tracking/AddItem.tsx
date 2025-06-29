"use client";
import React, { useState } from "react";
import UploadBox from "./UploadBox";

const AddItem = ({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: (tab: string) => void;
}) => {
  const [formData, setFormData] = useState({
    name: "",
    numberId: "",
    category: "",
    quantity: "",
    label: "",
    start_date: "DD-MM-YYYY",
    end_date: "DD-MM-YYYY",
    status: "active",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleConfirm = async () => {
    const product = {
      ...formData,
      quantity: parseInt(formData.quantity),
    };
  
    try {
      const res = await fetch("/api/addProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
  
      if (!res.ok) {
        const err = await res.json();
        return;
      }
        setSelected("all");
    } catch (error) {
    }
  };
  

  const handleDiscard = () => {
    setFormData({
      name: "",
      numberId: "",
      category: "",
      quantity: "",
      label: "",
      start_date: "",
      end_date: "",
      status: "active",
    });
  };

  return (
    <div className="space-y-8 m-[20px]">

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 mx-auto bg-white p-6 rounded-lg border space-y-6">
          <Input label="Product Name" value={formData.name} onChange={(val) => handleChange("name", val)} />
          <Input label="ID No" value={formData.numberId} onChange={(val) => handleChange("numberId", val)} />
          <Input label="Category" value={formData.category} onChange={(val) => handleChange("category", val)} />
          <Input label="Quantity" value={formData.quantity} onChange={(val) => handleChange("quantity", val)} />
          <Textarea
            label="Label"
            value={formData.label}
            onChange={(val) => handleChange("label", val)}
            counter={`${formData.label.length}/1000`}
          />
        </div>

        <div className="flex-1 mx-auto bg-white p-6 rounded-lg border space-y-6">
          <div className="space-y-2">
            <label className="text-lg text-gray-800">Expiration Date</label>
            <p className="text-sm text-gray-400">
              Upload product image to extract expiration dates from it.
            </p>
            <UploadBox />
          </div>

          <div className="bg-green-50 p-4 rounded-lg border space-y-4">
            <div className="flex gap-4">
              <Input label="Start date" value={formData.start_date} onChange={(val) => handleChange("start_date", val)} small />
              <Input label="End date" value={formData.end_date} onChange={(val) => handleChange("end_date", val)} small />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-s text-gray-500">
                If the dates are extracted right click save or edit it manually if you want.
              </p>
              <button
  className={`px-4 py-2 rounded-lg font-bold ${
    formData.start_date !== "DD-MM-YYYY" &&
    formData.end_date !== "DD-MM-YYYY" &&
    formData.start_date.trim() !== "" &&
    formData.end_date.trim() !== ""
      ? "bg-blue-500 text-white"
      : "bg-gray-300 text-white"
  }`}
>
  Save
</button>      </div>
          </div>

          <div className="flex gap-4">
            <button onClick={handleConfirm} className="flex-1 bg-primary-500 text-white py-3 rounded-lg font-bold">
              Confirm
            </button>
            <button onClick={handleDiscard} className="flex-1 bg-gray-100 text-gray-600 py-3 rounded-lg font-bold">
              Discard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function Input({
  label,
  value,
  onChange,
  small = false,
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
  small?: boolean;
}) {
  return (
    <div className={`space-y-1 ${small ? "w-full" : "w-full"}`}>
      <label className="text-gray-700 text-base">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-12 px-4 border rounded-lg bg-transparent text-gray-900 font-medium"
      />
    </div>
  );
}

function Textarea({
  label,
  value,
  onChange,
  counter,
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
  counter?: string;
}) {
  return (
    <div className="space-y-1 w-full">
      <div className="flex justify-between text-black text-base">
        <label>{label}</label>
        {counter && <span className="text-sm text-gray-400">{counter}</span>}
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        className="w-full p-3 border rounded-lg bg-white text-gray-900 font-medium"
      />
    </div>
  );
}

export default AddItem;
