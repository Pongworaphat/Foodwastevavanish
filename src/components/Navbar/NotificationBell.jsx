import React, { useState, useEffect, useRef } from "react";
import { Bell } from "lucide-react";

const NotificationBell = ({ isSignedIn }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* ปุ่มกระดิ่ง */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
      >
        <Bell className="w-6 h-6 text-gray-700" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="p-3 text-gray-700 font-medium border-b">
            Notification
          </div>

          {isSignedIn ? (

            <div className="p-3 text-sm text-gray-500">
              No notification yet
            </div>
          ) : (
            <div className="p-3 text-sm text-gray-500">
              Please{" "}
              <a href="/login" className="text-blue-600 hover:underline">
                sign in
              </a>{" "}
              to view notifications.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationBell;