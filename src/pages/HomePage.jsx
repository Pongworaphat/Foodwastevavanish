import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-emerald-50">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100 to-green-50"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-14 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* ส่วนข้อความ */}
            <div className="transform -translate-x-4 lg:-translate-x-10">
              <p className="inline-flex items-center text-emerald-700 font-medium rounded-full bg-white/70 px-3 py-1 ring-1 ring-emerald-200 mb-6">
                Reduce food waste • Help others
              </p>
              <h1 className="text-5xl sm:text-6xl font-semibold leading-tight tracking-tight text-emerald-900">
                <span className="block">Share Food,</span>
                <span className="block text-emerald-600 mt-1">Share Love</span>
              </h1>
              <p className="mt-6 text-lg text-emerald-900/80 max-w-xl">
                เชื่อมโยงผู้บริจาคกับผู้รับเพื่อลดขยะอาหารและช่วยเหลือผู้ยากไร้ แบ่งปันอาหารส่วนเกิน
                ให้อาหารแก่สัตว์จรจัด หรือบริจาคขยะอินทรีย์เพื่อทำปุ๋ยหมัก
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/browse"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-white font-medium shadow-xl-soft hover:bg-emerald-700 transition"
                >
                  Browse Donations
                </Link>
                <Link
                  to="/donate"
                  className="inline-flex items-center justify-center rounded-full px-5 py-3 font-medium ring-1 ring-emerald-300 text-emerald-800 bg-white/70 hover:bg-white transition"
                >
                  Start Donating
                </Link>
              </div>
            </div>

            {/* ส่วนรูป */}
            <div className="relative transform translate-x-4 lg:translate-x-10">
              <div className="rounded-4xl overflow-hidden shadow-xl-soft">
                <img
                  src="./src/assets/imgfoodwaste/foodwaste01.jpg"
                  alt="Food sharing"
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute -z-10 inset-0 translate-x-6 translate-y-6 rounded-4xl bg-emerald-600/5 blur-2xl"></div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
