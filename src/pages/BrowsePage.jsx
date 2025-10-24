import React, { useState } from "react";

export default function BrowsePage() {
  const [activeCategory, setActiveCategory] = useState("All Donations");

  const donations = [
    {
      id: 1,
      category: "Food Sharing",
      title: "Fresh Bread and Pastries",
      donor: "Green Valley Restaurant",
      rating: 4.9,
      verified: true,
      address: "123 Main Street, New York, NY 10001",
      quantity: "20 pieces • Bakery",
      expires: "10/23/2025",
      pickup: "18:00 - 20:00",
      image: "/src/assets/imgfoodwaste/foodwaste02.jpg",
    },
  ];

  const categories = [
    "All Donations",
    "Food Sharing",
    "Animal Food",
    "Organic Waste",
  ];

  const filteredDonations =
    activeCategory === "All Donations"
      ? donations
      : donations.filter((d) => d.category === activeCategory);

  return (
    <div className="min-h-screen bg-emerald-50">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Header */}
        <div className="mb-4">
          <h1 className="text-3xl font-semibold text-gray-900">Browse Donations</h1>
          <p className="text-gray-600">
            Find food donations available in your area
          </p>
        </div>

        {/* Search */}
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <input
            type="text"
            placeholder="Search by food type, description..."
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 outline-none ring-emerald-200 focus:ring-2 sm:max-w-md"
          />
          <button className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
            Most Recent ▼
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="mb-8 flex w-full overflow-x-auto rounded-3xl bg-gray-100 p-1 shadow-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-1 rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                activeCategory === cat
                  ? "bg-white shadow-sm text-black"
                  : "text-gray-700"
              }`}
            >
              {cat} (
              {cat === "All Donations"
                ? donations.length
                : donations.filter((d) => d.category === cat).length}
              )
            </button>
          ))}
        </div>

        {/* Donation Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDonations.map((donation) => (
            <div
              key={donation.id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
            >
              {/* Image */}
              <div className="relative h-48 w-full">
                <img
                  src={donation.image}
                  alt={donation.title}
                  className="h-full w-full object-cover"
                />
                <span className="absolute right-3 top-3 rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                  available
                </span>
                <span className="absolute left-3 top-3 rounded-md bg-orange-100 px-2 py-1 text-xs font-medium text-orange-800">
                  {donation.category}
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {donation.title}
                </h3>
                <div className="mt-1 flex items-center gap-2 text-sm text-gray-700">
                  <span>{donation.donor}</span>
                  <span>⭐ {donation.rating}</span>
                  {donation.verified && (
                    <span className="ml-auto rounded-md border px-2 py-0.5 text-xs font-medium text-gray-600">
                      Verified
                    </span>
                  )}
                </div>

                <div className="mt-3 space-y-1 text-sm text-gray-600">
                  <p>📍 {donation.address}</p>
                  <p>📦 {donation.quantity}</p>
                  <p>🗓️ Expires: {donation.expires}</p>
                  <p>⏰ Pickup: {donation.pickup}</p>
                </div>

                {/* Actions */}
                <div className="mt-4 flex gap-3">
                  <button className="w-1/2 rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    View Details
                  </button>
                  <button className="w-1/2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700">
                    Claim
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* If no donations found */}
          {filteredDonations.length === 0 && (
            <p className="col-span-full text-center text-gray-500">
              No donations available for this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
