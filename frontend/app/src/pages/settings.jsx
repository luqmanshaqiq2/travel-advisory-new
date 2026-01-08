import React, { useState } from "react";
import { 
  FaBell, FaLinkedin, FaFacebook, FaSkype, 
  FaFacebookMessenger, FaCamera, FaSave, FaPencilAlt, FaCheck 
} from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


const ProfilePage = () => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("alex.j@travel.com");
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  
  const menuItems = [
    "Personal","Notifications", 
    "Security", "Reports"
  ];

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-slate-200 hidden md:flex flex-col">
        <div className="p-8 text-2xl font-extrabold text-blue-600 tracking-tight">
          My<span className="text-slate-400">Info</span>
        </div>
        
        <nav className="flex-1 px-4 space-y-1">
          {menuItems.map((item, idx) => {
            const isActive = item === "Personal";
            return (
              <div
                key={idx}
                className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ${
                  isActive 
                    ? "bg-blue-50 text-blue-700 font-semibold border-r-4 border-blue-600 rounded-r-none" 
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <span>{item}</span>
                {item === "Notifications" && (
                  <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    3
                  </span>
                )}
              </div>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-12 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-slate-800">Edit Profile</h1>
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition-shadow shadow-md hover:shadow-blue-200">
              <FaSave className="text-sm" />
              Save Changes
            </button>
          </header>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col lg:flex-row">
            
            {/* Left Column: Profile Card */}
            <div className="lg:w-1/3 bg-slate-50/50 p-8 border-r border-slate-100 flex flex-col items-center text-center">
              <div className="relative group mb-6">
                <img
                  src="https://i.pravatar.cc/150?u=travel"
                  alt="Profile"
                  className="w-36 h-36 rounded-full border-4 border-white shadow-xl object-cover"
                />
                <div className="absolute bottom-1 right-1 bg-blue-600 p-2 rounded-full text-white border-2 border-white cursor-pointer hover:bg-blue-700 transition-colors">
                  <FaCamera size={14} />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-slate-800">Alex Johnson</h2>
              <p className="text-blue-600 font-medium mb-4">Senior Travel Advisor</p>
              
              <div className="w-full space-y-3 text-sm text-slate-600 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <div className="space-y-2 md:col-span-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                      Phone Number
                    </label>

                    <PhoneInput
                      country="us"
                      value={phone}
                      onChange={setPhone}
                      inputClass="!w-full !bg-slate-50 !border !border-slate-200 !rounded-lg !py-3 !pl-14 !pr-3 focus:!ring-2 focus:!ring-blue-500/20 focus:!border-blue-500"
                      buttonClass="!bg-slate-50 !border !border-slate-200 !rounded-l-lg"
                      dropdownClass="!z-50"
                    />
                  </div>

                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-400">Email</span>
                  <div className="flex items-center gap-2">
                    {isEditingEmail ? (
                      <>
                        <input 
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="font-medium bg-white border border-blue-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                          autoFocus
                        />
                        <button 
                          onClick={() => setIsEditingEmail(false)}
                          className="text-green-600 hover:text-green-700 transition-colors"
                        >
                          <FaCheck size={12} />
                        </button>
                      </>
                    ) : (
                      <>
                        <span className="font-medium">{email}</span>
                        <button 
                          onClick={() => setIsEditingEmail(true)}
                          className="text-slate-400 hover:text-blue-600 transition-colors"
                        >
                          <FaPencilAlt size={12} />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 text-slate-400">
                <FaLinkedin className="hover:text-blue-700 cursor-pointer transition-colors text-xl" />
                <FaFacebook className="hover:text-blue-600 cursor-pointer transition-colors text-xl" />
                <FaSkype className="hover:text-sky-500 cursor-pointer transition-colors text-xl" />
                <FaFacebookMessenger className="hover:text-blue-500 cursor-pointer transition-colors text-xl" />
              </div>
            </div>

            {/* Right Column: Form Section */}
            <div className="flex-1 p-8 lg:p-10">
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-800">Personal Information</h3>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-slate-500">Available for trips</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0.5] after:left-[0.5] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Gender</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Role</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all">
                    <option>Solo Traveler</option>
                    <option>Family Traveler</option>
                    <option>Business Traveler</option>
                    <option>Digital Nomad</option>
                    <option>Student / Exchange Visitor</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">First Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" defaultValue="Alex" />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Last Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" defaultValue="Johnson" />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Date of Birth</label>
                  <input type="date" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                </div>

                <div className="flex items-end pb-3">
                  <div className="px-4 py-2 bg-blue-50 rounded-lg border border-blue-100 text-blue-700 text-sm font-medium">
                    Calculated Age: <span className="font-bold">28 y.o</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Bio / Notes</label>
                <textarea
                  rows={4}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  placeholder="Tell us about your travel experience in Srilanka..."
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;