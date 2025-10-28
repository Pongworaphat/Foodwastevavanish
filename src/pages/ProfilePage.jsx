import React, { useState, useRef } from "react";

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    about: "",
    city: "",
    country: "",
    address: "",
  });

  const [social, setSocial] = useState({
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin: "",
  });

  const [avatarPreview, setAvatarPreview] = useState(null);
  const [saving, setSaving] = useState(false);
  const fileRef = useRef(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setProfile((p) => ({ ...p, [name]: value }));
  }

  function handleSocialChange(e) {
    const { name, value } = e.target;
    setSocial((s) => ({ ...s, [name]: value }));
  }

  function handleFile(e) {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    const url = URL.createObjectURL(f);
    setAvatarPreview(url);
  }

  function triggerUpload() {
    fileRef.current?.click();
  }

  async function handleSave(section) {
    if (saving) return;
    setSaving(true);

    try {
      if (section === "profile") {
        if (!profile.name.trim()) {
          alert("กรุณากรอกชื่อ");
          return;
        }
      }

      console.log("Saving section:", section);
      console.log({ profile, social });

      await new Promise((r) => setTimeout(r, 600));

      alert("บันทึกสำเร็จ");
    } catch (err) {
      console.error(err);
      alert("เกิดข้อผิดพลาดขณะบันทึก");
    } finally {
      setSaving(false);
    }
  }

  function handleCancel(section) {
    setProfile({ name: "", email: "", phone: "", about: "", city: "", country: "", address: "" });
    setSocial({ facebook: "", instagram: "", twitter: "", linkedin: "" });
    setAvatarPreview(null);
  }

  function handleDeleteAccount() {
    const ok = window.confirm(
      "การกระทำนี้ไม่สามารถย้อนกลับได้\n\nต้องการลบบัญชีทั้งหมดของคุณหรือไม่?"
    );
    if (!ok) return;

    // เรียก API ลบบัญชีที่นี่
    console.log("Deleting account...");
    alert("ลบบัญชีเรียบร้อย (ตัวอย่าง)");
  }

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-semibold">จัดการโปรไฟล์</h1>

      {/* Profile card */}
      <div className="bg-white border rounded-lg p-6 shadow-sm">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0 text-center">
            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
              {avatarPreview ? (
                <img src={avatarPreview} alt="avatar" className="w-full h-full object-cover" />
              ) : (
                <span className="text-gray-400">ผู้ใช้</span>
              )}
            </div>
            <button
              type="button"
              onClick={triggerUpload}
              className="mt-3 inline-block text-sm px-3 py-1 border rounded-md bg-white text-gray-700 hover:bg-gray-50"
            >
              เปลี่ยนรูปโปรไฟล์
            </button>
            <input ref={fileRef} type="file" accept="image/*" onChange={handleFile} className="hidden" />
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 gap-4">
              <label className="flex flex-col">
                <span className="text-sm text-gray-600 mb-1">ชื่อ</span>
                <input
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  placeholder="กรอกชื่อของคุณ"
                  className="px-4 py-2 bg-gray-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm text-gray-600 mb-1">อีเมล</span>
                <input
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  placeholder="Foodwastevanish@email.com"
                  className="px-4 py-2 bg-gray-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm text-gray-600 mb-1">เบอร์โทรศัพท์</span>
                <input
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  placeholder="xxx-xxx-xxxx"
                  className="px-4 py-2 bg-gray-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm text-gray-600 mb-1">ประวัติย่อ</span>
                <textarea
                  name="about"
                  value={profile.about}
                  onChange={handleChange}
                  placeholder="เกี่ยวกับคุณ"
                  rows={3}
                  className="px-4 py-2 bg-gray-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
                />
              </label>

              <div className="flex gap-3 mt-2">
                <button
                  type="button"
                  onClick={() => handleSave("profile")}
                  className={`px-4 py-2 rounded-md text-white ${saving ? "bg-gray-400" : "bg-gray-900"}`}
                  disabled={saving}
                >
                  {saving ? "กำลังบันทึก..." : "บันทึกการเปลี่ยนแปลง"}
                </button>
                <button
                  type="button"
                  onClick={() => handleCancel("profile")}
                  className="px-4 py-2 border rounded-md"
                >
                  ยกเลิก
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Address card */}
      <div className="bg-white border rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-medium mb-4">ที่อยู่</h2>

        <div className="grid grid-cols-1 gap-4">
          <label className="flex flex-col">
            <span className="text-sm text-gray-600 mb-1">เมือง</span>
            <input
              name="city"
              value={profile.city}
              onChange={handleChange}
              placeholder="กรุงเทพมหานคร"
              className="px-4 py-2 bg-gray-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm text-gray-600 mb-1">ประเทศ</span>
            <input
              name="country"
              value={profile.country}
              onChange={handleChange}
              placeholder="ประเทศไทย"
              className="px-4 py-2 bg-gray-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm text-gray-600 mb-1">ที่อยู่เต็ม (ไม่บังคับ)</span>
            <textarea
              name="address"
              value={profile.address}
              onChange={handleChange}
              placeholder="ถนน, ตำบล, อำเภอ, จังหวัด, รหัสไปรษณีย์"
              rows={3}
              className="px-4 py-2 bg-gray-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </label>

          <div className="flex gap-3 mt-2">
            <button
              type="button"
              onClick={() => handleSave("address")}
              className={`px-4 py-2 rounded-md text-white ${saving ? "bg-gray-400" : "bg-gray-900"}`}
              disabled={saving}
            >
              {saving ? "กำลังบันทึก..." : "บันทึกการเปลี่ยนแปลง"}
            </button>
            <button
              type="button"
              onClick={() => handleCancel("address")}
              className="px-4 py-2 border rounded-md"
            >
              ยกเลิก
            </button>
          </div>
        </div>
      </div>

      {/* Social links card */}
      <div className="bg-white border rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-medium mb-4">โซเชียลมีเดีย</h2>

        <div className="grid grid-cols-1 gap-4">
          <label className="flex flex-col">
            <span className="text-sm text-gray-600 mb-1 flex items-center gap-2">Facebook</span>
            <input
              name="facebook"
              value={social.facebook}
              onChange={handleSocialChange}
              placeholder="https://facebook.com/username"
              className="px-4 py-2 bg-gray-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm text-gray-600 mb-1 flex items-center gap-2">Instagram</span>
            <input
              name="instagram"
              value={social.instagram}
              onChange={handleSocialChange}
              placeholder="https://instagram.com/username"
              className="px-4 py-2 bg-gray-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm text-gray-600 mb-1 flex items-center gap-2">Twitter (X)</span>
            <input
              name="twitter"
              value={social.twitter}
              onChange={handleSocialChange}
              placeholder="https://twitter.com/username"
              className="px-4 py-2 bg-gray-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm text-gray-600 mb-1 flex items-center gap-2">LinkedIn</span>
            <input
              name="linkedin"
              value={social.linkedin}
              onChange={handleSocialChange}
              placeholder="https://linkedin.com/in/username"
              className="px-4 py-2 bg-gray-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </label>

          <div className="flex gap-3 mt-2">
            <button
              type="button"
              onClick={() => handleSave("social")}
              className={`px-4 py-2 rounded-md text-white ${saving ? "bg-gray-400" : "bg-gray-900"}`}
              disabled={saving}
            >
              {saving ? "กำลังบันทึก..." : "บันทึกการเปลี่ยนแปลง"}
            </button>
            <button
              type="button"
              onClick={() => handleCancel("social")}
              className="px-4 py-2 border rounded-md"
            >
              ยกเลิก
            </button>
          </div>
        </div>
      </div>

      {/* Dangerous actions */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-medium text-red-700 mb-2">โซนอันตราย</h2>
        <p className="text-red-600 mb-4">การกระทำเหล่านี้ไม่สามารถย้อนกลับได้</p>

        <div className="bg-white border rounded-md p-4">
          <p className="text-sm text-gray-700 mb-4">ลบบัญชี</p>
          <p className="text-sm text-gray-500 mb-4">ลบบัญชีและข้อมูลทั้งหมดของคุณอย่างถาวร</p>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleDeleteAccount}
              className="px-4 py-2 bg-red-600 text-white rounded-md"
            >
              ลบบัญชี
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
