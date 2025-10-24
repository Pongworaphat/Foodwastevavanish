import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SigninPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();

    if (username === "user" && password === "lovefinn") {
      localStorage.setItem("isSignedIn", "true");
      navigate("/");
    } else {
      setError("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-emerald-50">
      <div className="bg-neutral-900 text-white shadow-lg rounded-2xl p-8 w-[380px]">
        <h1 className="text-2xl font-bold text-center mb-6 whitespace-nowrap flex justify-center"> เข้าสู่ระบบ <span className="ml-1 text-green-400">FoodwasteVanish</span> </h1>

        <form onSubmit={handleSignIn} className="space-y-4">
          <input
            type="text"
            placeholder="ชื่อผู้ใช้ / อีเมล"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <input
            type="password"
            placeholder="รหัสผ่าน"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            เข้าสู่ระบบ
          </button>
        </form>

        <div className="mt-6 space-y-2">
          <button className="w-full bg-neutral-800 text-white py-2 rounded-lg">
            ดำเนินการต่อด้วย Facebook
          </button>
          <button className="w-full bg-neutral-800 text-white py-2 rounded-lg">
            ดำเนินการต่อด้วย Google
          </button>
        </div>

        <p className="text-center text-sm text-gray-400 mt-6">
          ยังไม่มีบัญชี?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-green-400 cursor-pointer hover:underline"
          >
            สมัครสมาชิก
          </span>
        </p>
      </div>
    </div>
  );
}
