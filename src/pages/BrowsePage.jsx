import React from "react";

export default function BrowsePage() {
  const donations = [
    {
      id: 1,
      category: "Food Sharing",
      title: "Fresh Bread and Pastries",
      donor: "Green Valley Restaurant",
      rating: 4.9,
      address: "123 Main Street, New York, NY 10001",
      quantity: "20 pieces • Bakery",
      expires: "10/23/2025",
      pickup: "18:00 - 20:00",
      image:"/src/assets/imgfoodwaste/foodwaste02.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-900">Browse Donations</h1>
          <p className="mt-1 text-gray-600">Find food donations available in your area</p>
        </div>

        {/* Search & Filters */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <input
            type="text"
            placeholder="Search by food type, description..."
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 outline-none ring-emerald-200 focus:ring-2 sm:max-w-md"
          />
          <div className="flex gap-2">
            <button className="rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              All Donations
            </button>
            <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm text-white hover:bg-emerald-700">
              Most Recent
            </button>
          </div>
        </div>

        {/* Donation Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {donations.map((donation) => (
            <div
              key={donation.id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
            >
              {/* Category Label */}
              <div className="absolute m-3 inline-block rounded-md bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">
                {donation.category}
              </div>

              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={donation.image}
                  alt={donation.title}
                  className="h-full w-full object-cover"
                />
                <span className="absolute right-3 top-3 rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                  available
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {donation.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  {donation.donor} • ⭐ {donation.rating}
                </p>

                <div className="mt-3 space-y-1 text-sm text-gray-700">
                  <p>{donation.address}</p>
                  <p>{donation.quantity}</p>
                  <p>Expires: {donation.expires}</p>
                  <p>Pickup: {donation.pickup}</p>
                </div>

                {/* Actions */}
                <div className="mt-4 flex gap-3">
                  <button className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    View Details
                  </button>
                  <button className="w-full rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700">
                    Claim
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
