"use client";
import React, { useState } from "react";

type Product = {
  id: string | number;
  number_id?: string;
  name: string;
  category: string;
  quantity: number;
  label?: string;
  start_date: string;
  end_date: string;
  status?: string;
};

const EditItem = ({
  selected,
  setSelected,
  product,
}: {
  selected: string;
  setSelected: (tab: string) => void;
  product: Product;
}) => {
  const [formData, setFormData] = useState({
    ...product,
    number_id: String(product.number_id || product.id || ""),
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleUpdate = async () => {
    const payload = {
      number_id: formData.number_id,
      name: formData.name,
      category: formData.category,
      quantity: Number(formData.quantity),
      label: formData.label || "",
      start_date: formData.start_date,
      end_date: formData.end_date,
      status: formData.status || "active",
    };

    try {
      const res = await fetch(`/api/updateProduct/${formData.number_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        alert(`Failed to update product: ${result.message}`);
        return;
      }
      setSelected("all");
    } catch (error) {
      console.error("error:", error);
    }
  };

  const handleDiscard = () => {
    setFormData({
      ...product,
      number_id: String(product.number_id || product.id || ""),
    });
  };

  return (
    <div className="space-y-8 mb-5">
      <div className="bg-white border-b p-6 flex items-center gap-4 cursor-pointer" onClick={() => setSelected("all")}>
        <div className="w-10 h-10 flex items-center justify-center rounded border">←</div>
        <h2 className="text-primary-500 text-2xl font-semibold">Edit item</h2>
      </div>

      <div className="w-[95%] mx-auto bg-white p-6 rounded-lg border space-y-6 font-medium">
        <div>
          <h3 className="text-2xl font-medium text-gray-900">Edit item</h3>
          <p className="text-gray-500">Modify your product details and update expiration dates.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 bg-white p-6 rounded-lg border space-y-6">
            <Input label="Product Name" value={formData.name} onChange={(v) => handleChange("name", v)} />
            <Input label="ID No" value={formData.number_id} onChange={(v) => handleChange("number_id", v)} />
            <Input label="Category" value={formData.category} onChange={(v) => handleChange("category", v)} />
            <Input label="Quantity" value={String(formData.quantity)} onChange={(v) => handleChange("quantity", v)} />
            <Textarea
              label="Label"
              value={formData.label || ""}
              onChange={(v) => handleChange("label", v)}
              counter={`${(formData.label || "").length}/1000`}
            />
          </div>

          <div className="flex-1 bg-white p-6 rounded-lg border space-y-6">
            <div className="space-y-2">
              <label className="text-lg text-gray-800">Expiration Date</label>
              <div className="rounded border p-3 space-y-2 border-primary-200">
                <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                  <img src="https://placehold.co/600x400" alt="product" className="object-cover h-full" />
                </div>
                <div className="flex gap-2">
                  <button className="bg-blue-500 text-white px-4 py-1 rounded-lg font-bold">Scan</button>
                  <button className="bg-red-500 text-white px-4 py-1 rounded-lg font-bold">Delete</button>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border space-y-4">
              <div className="flex gap-4">
                <Input label="Start date" value={formData.start_date} onChange={(v) => handleChange("start_date", v)} small />
                <Input label="End date" value={formData.end_date} onChange={(v) => handleChange("end_date", v)} small />
              </div>
              <div className="flex justify-between items-center">
                <p className="text-s text-gray-500">Edit the dates or save them if extracted correctly.</p>
                <button
                  disabled={!formData.start_date.trim() || !formData.end_date.trim()}
                  className={`px-4 py-2 rounded-lg font-bold ${
                    formData.start_date.trim() && formData.end_date.trim()
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-white cursor-not-allowed"
                  }`}
                >
                  Save
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <button onClick={handleUpdate} className="flex-1 bg-primary-500 text-white py-3 rounded-lg font-bold">
                Confirm
              </button>
              <button onClick={handleDiscard} className="flex-1 bg-gray-100 text-gray-600 py-3 rounded-lg font-bold">
                Discard
              </button>
            </div>
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
  onChange: (v: string) => void;
  small?: boolean;
}) {
  return (
    <div className={`space-y-1 w-full`}>
      <label className="text-gray-700 text-base">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full ${small ? "h-10" : "h-12"} px-4 border rounded-lg bg-transparent text-gray-900 font-medium`}
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
  onChange: (v: string) => void;
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

export default EditItem;
