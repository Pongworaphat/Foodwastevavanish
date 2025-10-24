import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function UserMenu({ onSignOut }) {
    const [open, setOpen] = useState(false);
    const menuRef = useRef();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={menuRef}>
            {/* ปุ่มรูปโปรไฟล์ */}
            <button onClick={() => setOpen(!open)} className="focus:outline-none">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/4140/4140037.png"
                    alt="User"
                    className="w-8 h-8 rounded-full border"
                />
            </button>

            {/* เมนูที่เลื่อนลง */}
            {open && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border py-2 z-50">
                    <div className="px-4 py-2 border-b font-semibold text-gray-800">
                        [รูปโปรไฟล์] ชื่อผู้ใช้
                    </div>

                    <Link
                        to="/profile"
                        className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                    >
                        จัดการโปรไฟล์
                    </Link>

                    <div className="border-t my-1" />

                    <Link
                        to="/dashboard"
                        className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                    >
                        แดชบอร์ด / กิจกรรมของฉัน
                    </Link>
                    <Link
                        to="/settings"
                        className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                    >
                        การตั้งค่า
                    </Link>

                    <div className="border-t my-1" />

                    <Link
                        to="/help"
                        className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                    >
                        ความช่วยเหลือ
                    </Link>
                    <Link
                        to="/feedback"
                        className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                    >
                        ส่งความคิดเห็น
                    </Link>

                    <div className="border-t my-1" />

                    <button
                        onClick={onSignOut}
                        className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">
                        ออกจากระบบ
                    </button>
                </div>
            )}
        </div>
    );
}
