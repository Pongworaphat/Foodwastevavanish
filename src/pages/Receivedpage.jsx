import React, { useState } from "react";

export default function ReceivedPage() {
  const [tab, setTab] = useState("Pending");

  const counts = {
    Pending: 0,
    Completed: 0,
  };

  return (
    <div className="min-h-screen bg-emerald-50">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-900">
            Received Donations
          </h1>
          <p className="text-gray-600">Track donations you've claimed</p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div>
              <h3 className="text-sm font-medium text-gray-500">
                Total Received
              </h3>
              <p className="mt-2 text-3xl font-bold text-gray-900">0</p>
            </div>
            <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <img src="/src/assets/imgfoodwaste/heart.png" alt="like" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div>
              <h3 className="text-sm font-medium text-gray-500">
                Pending Pickup
              </h3>
              <p className="mt-2 text-3xl font-bold text-gray-900">0</p>
            </div>
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <img src="/src/assets/imgfoodwaste/clock.png" alt="time" />
              </div>
            </div>
          </div>

          {/* Completed */}
          <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Completed</h3>
              <p className="mt-2 text-3xl font-bold text-gray-900">0</p>
            </div>
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <img src="/src/assets/imgfoodwaste/checked.png" alt="checked" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6 flex gap-3 overflow-x-auto rounded-full bg-gray-100 p-1">
          {["Pending", "Completed"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 min-w-[160px] text-center text-sm font-medium py-2 rounded-full transition
              ${tab === t ? "bg-white shadow-sm text-gray-900" : "text-gray-600"}`}
            >
              {t} ({counts[t]})
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
