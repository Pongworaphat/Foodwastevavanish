import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function UserMenu({ onSignOut }) {
    const [open, setOpen] = useState(false);
    const menuRef = useRef();
    const userImage = "https://cdn-icons-png.flaticon.com/512/4140/4140037.png"; 

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    
    const MenuLink = ({ to, children }) => (
        <Link
            to={to}
            onClick={() => setOpen(false)} 
            className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors duration-150"
        >
            {children}
        </Link>
    );

    return (
        <div className="relative" ref={menuRef}>
            
            <button onClick={() => setOpen(!open)} className="focus:outline-none">
                <img
                    src={userImage}
                    alt="User"
                    className="w-9 h-9 rounded-full border border-gray-200 hover:opacity-90 transition-opacity"
                />
            </button>

            
            {open && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
                    {/* ส่วนหัวของเมนู */}
                    <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-100">
                        <img
                            src={userImage}
                            alt="User"
                            className="w-11 h-11 rounded-full border"
                        />
                        <div>
                            <div className="font-semibold text-gray-800">ชื่อผู้ใช้</div>
                            <div className="text-xs text-gray-500">user@foodwaste.com</div>
                        </div>
                    </div>

                    <div className="py-1">
                        <MenuLink to="/profile">
                            
                            <span>จัดการโปรไฟล์</span>
                        </MenuLink>
                        <MenuLink to="/dashboard">
                            
                            <span>กิจกรรมของฉัน</span>
                        </MenuLink>
                        <MenuLink to="/settings">
    
                            <span>การตั้งค่า</span>
                        </MenuLink>
                    </div>

                    <div className="border-t border-gray-100" />

                    <div className="py-1">
                        <MenuLink to="/help">
                            
                            <span>ความช่วยเหลือ</span>
                        </MenuLink>
                        <MenuLink to="/feedback">
                            
                            <span>ส่งความคิดเห็น</span>
                        </MenuLink>
                    </div>


                    <div className="border-t border-gray-100" />

                    
                    <div className="p-1">
                        <button
                            onClick={onSignOut}
                            className="flex items-center gap-3 w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-150"
                        >
                            
                            <span className="font-medium">ออกจากระบบ</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}