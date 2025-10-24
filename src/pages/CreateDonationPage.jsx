import React, { useState } from "react";

export default function CreateDonationPage() {
  const categories = [
    { key: "food", label: "Food Sharing", desc: "Share surplus food with people in need" },
    { key: "animal", label: "Animal Food", desc: "Donate food for stray animals" },
    { key: "organic", label: "Organic Waste", desc: "Share food waste for composting" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("food");
  const [form, setForm] = useState({
    title: "",
    description: "",
    foodType: "",
    quantity: "",
    prodDate: "",
    expDate: "",
    address: "",
    timeStart: "",
    timeEnd: "",
    images: [],
  });

  const onChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      setForm((s) => ({ ...s, images: Array.from(files || []) }));
    } else {
      setForm((s) => ({ ...s, [name]: value }));
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: replace with real submit logic
    console.log({ category: selectedCategory, ...form });
    alert("Submitted (demo). Check console for payload.");
  };

  return (
    <div className="min-h-screen bg-emerald-50">
      <div className="mx-auto max-w-5xl px-4 py-8">
        {/* Page Title */}
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-900">Create Donation</h1>
          <p className="mt-1 text-gray-600">Share your food with the community</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          {/* Category */}
          <section className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-6">
            <h2 className="text-lg font-medium text-gray-900">Select Category</h2>
            <p className="mt-1 text-sm text-gray-600">
              Choose the type of donation you want to create
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {categories.map((c) => {
                const active = selectedCategory === c.key;
                return (
                  <button
                    key={c.key}
                    type="button"
                    onClick={() => setSelectedCategory(c.key)}
                    className={[
                      "rounded-2xl border p-4 text-left transition",
                      active
                        ? "border-emerald-500 ring-2 ring-emerald-200"
                        : "border-gray-200 hover:border-gray-300",
                    ].join(" ")}
                  >
                    <div className="font-medium text-gray-900">{c.label}</div>
                    <div className="mt-1 text-sm text-gray-600">{c.desc}</div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Donation Details */}
          <section className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-6">
            <h2 className="text-lg font-medium text-gray-900">Donation Details</h2>
            <p className="mt-1 text-sm text-gray-600">
              Provide information about your donation
            </p>

            <div className="mt-4 space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Title <span className="text-rose-500">*</span>
                </label>
                <input
                  name="title"
                  value={form.title}
                  onChange={onChange}
                  required
                  placeholder="e.g., Fresh Bread and Pastries"
                  className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 outline-none ring-emerald-200 focus:ring-2"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Description <span className="text-rose-500">*</span>
                </label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={onChange}
                  required
                  rows={4}
                  placeholder="Provide details about the food, its condition, and any special notes"
                  className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 outline-none ring-emerald-200 focus:ring-2"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Food Type
                  </label>
                    <select
                      name="foodType"
                      value={form.foodType}
                      onChange={onChange}
                      className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 outline-none ring-emerald-200 focus:ring-2"
                    >
                      <option value="">Select food type</option>
                      <option>Cooked</option>
                      <option>Bakery</option>
                      <option>Fresh Produce</option>
                      <option>Packaged/Canned</option>
                      <option>Other</option>
                    </select>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Quantity <span className="text-rose-500">*</span>
                  </label>
                  <input
                    name="quantity"
                    value={form.quantity}
                    onChange={onChange}
                    required
                    placeholder="e.g., 20 pieces, 5kg"
                    className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 outline-none ring-emerald-200 focus:ring-2"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Production Date
                  </label>
                  <input
                    type="date"
                    name="prodDate"
                    value={form.prodDate}
                    onChange={onChange}
                    className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 outline-none ring-emerald-200 focus:ring-2"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Expiration Date
                  </label>
                  <input
                    type="date"
                    name="expDate"
                    value={form.expDate}
                    onChange={onChange}
                    className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 outline-none ring-emerald-200 focus:ring-2"
                  />
                </div>
              </div>

              {/* Upload */}
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Upload Images
                </label>
                <label
                  className="flex cursor-pointer items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-4 py-10 text-center text-sm text-gray-600 hover:bg-gray-100"
                >
                  <div>
                    <div className="font-medium text-gray-900">Click to upload or drag and drop</div>
                    <div className="mt-1 text-xs text-gray-500">PNG, JPG up to 10MB</div>
                  </div>
                  <input
                    name="images"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={onChange}
                    className="hidden"
                  />
                </label>

                {form.images.length > 0 && (
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700">
                    {form.images.map((f, i) => (
                      <li key={i}>{f.name}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </section>

          {/* Pickup Information */}
          <section className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-6">
            <h2 className="text-lg font-medium text-gray-900">Pickup Information</h2>
            <p className="mt-1 text-sm text-gray-600">
              Where and when can recipients collect the donation
            </p>

            <div className="mt-4 space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Pickup Address <span className="text-rose-500">*</span>
                </label>
                <input
                  name="address"
                  value={form.address}
                  onChange={onChange}
                  required
                  placeholder="Enter pickup location"
                  className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 outline-none ring-emerald-200 focus:ring-2"
                />
                <p className="mt-1 text-xs text-gray-500">
                  In a real implementation, this would use GPS/Maps to select location
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Pickup Time Start
                  </label>
                  <input
                    type="time"
                    name="timeStart"
                    value={form.timeStart}
                    onChange={onChange}
                    className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 outline-none ring-emerald-200 focus:ring-2"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Pickup Time End
                  </label>
                  <input
                    type="time"
                    name="timeEnd"
                    value={form.timeEnd}
                    onChange={onChange}
                    className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 outline-none ring-emerald-200 focus:ring-2"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="rounded-xl border border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-xl bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700"
            >
              Create Donation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}