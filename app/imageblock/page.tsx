"use client";

import { useState } from "react";
import Link from "next/link";

import {
    FaBars,
    FaShoppingCart,
    FaSearch,
    FaMicrophone,
    FaImage,
    FaSquare,
    FaVideo,
    FaColumns,
    FaWindowMinimize,
    FaMap,
    FaBlog,
    FaRegFileAlt,
    FaChevronDown,
    FaChevronUp,
    FaArrowRight,
    FaLaptop,
    FaMobileAlt,
    FaTabletAlt,
} from "react-icons/fa";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { FaEye, FaPen } from "react-icons/fa";

export default function ImageBlock() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [leftTab, setLeftTab] = useState("blocks");

    const [showBlocks, setShowBlocks] = useState(true);
    const [showLayout, setShowLayout] = useState(true);
    const [showAdvanced, setShowAdvanced] = useState(true);

    const [activeTab, setActiveTab] = useState("properties");
    const [activeNav, setActiveNav] = useState("Home");
    const [showImageSettings, setShowImageSettings] = useState(true);
    const [showPosition, setShowPosition] = useState(true);
    const [shadowEnabled, setShadowEnabled] = useState(false);

    function toggleCart() {
        setCartCount((prev) => prev + 1);
    }

    return (
        <main className="min-h-screen bg-[#FFF1F2]">

            {/* ✅ NAVBAR */}
            <nav className="sticky top-0 z-50 bg-[#06224C] px-4 md:px-8 py-3 flex items-center justify-between shadow-sm">

                {/* LEFT */}
                <div className="flex items-center gap-4">

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden text-white"
                    >
                        <FaBars />
                    </button>

                    <Link
                        href="/"
                        className="bg-white px-5 py-3 rounded-[60%] shadow-md">

                        <img
                            src="/stackly-logo.webp"
                            alt="logo"
                            className="h-5"
                        />
                    </Link>

                    <div className="hidden lg:flex gap-8 text-white text-sm font-bold">
                        <Link href="/">Home</Link>
                        <Link href="/about">About Us</Link>
                        <Link href="/products"> Our Products</Link>
                        <Link href="/products"> Categories</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-4">

                    {/* CART */}
                    <button
                        onClick={toggleCart}
                        className="relative flex items-center gap-2 border border-white/30 px-3 py-1 rounded-full text-white text-xs"
                    >
                        <FaShoppingCart />
                        <span className="hidden sm:inline">Cart</span>

                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </button>

                    {/* SEARCH */}
                    <button
                        onClick={() => setSearchOpen(!searchOpen)}
                        className="w-8 h-8 flex items-center justify-center bg-white rounded-full"
                    >
                        <FaSearch className="text-[#06224C]" />
                    </button>

                    {/* PROFILE */}
                    <div className="w-8 h-8 rounded-full overflow-hidden border">
                        <img
                            src="https://ui-avatars.com/api/?name=User"
                            alt="user"
                        />
                    </div>
                </div>
            </nav>

            {/* ✅ MOBILE MENU */}
            {/* ✅ MOBILE MENU */}
            {mobileMenuOpen && (
                <div className="lg:hidden border-t border-white/20 px-4 pb-3 pt-2 bg-[#06224C]">
                    <div className="grid grid-cols-2 gap-2">
                        {[
                            { name: "Home", path: "/" },
                            { name: "About", path: "/about" },
                            { name: "Products", path: "/products" },
                            { name: "Categories", path: "/categories" },
                            { name: "Contact", path: "/contact" },
                        ].map((item, i) => (
                            <Link
                                key={i}
                                href={item.path}
                                onClick={() => {
                                    setActiveNav(item.name);
                                    setMobileMenuOpen(false);
                                }}
                                className={`rounded-md border px-3 py-2 text-xs transition ${activeNav === item.name
                                        ? "border-[#f0e6d4] bg-white/10 text-white"
                                        : "border-white/25 text-white hover:bg-white/10"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {/* ✅ SEARCH BAR */}
            {searchOpen && (
                <div className="bg-white p-6 border-b">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full border p-3 rounded-lg"
                    />
                </div>
            )}
            {/* ====== MAIN BUILDER LAYOUT ====== */}
            <div className="flex flex-1">
                <aside className="hidden lg:flex w-52 bg-[#06224C] text-white flex-col p-4 space-y-4 rounded-tr-3xl">

                    {/* Tabs */}
                    <div className="flex justify-center gap-6 text-sm font-semibold mt-6">

                        <button
                            onClick={() => setLeftTab("blocks")}
                            className={`pb-1 border-b-2 ${leftTab === "blocks" ? "border-white" : "border-transparent"
                                }`}
                        >
                            Blocks
                        </button>

                        <span>|</span>

                        <button
                            onClick={() => setLeftTab("pages")}
                            className={`pb-1 border-b-2 ${leftTab === "pages" ? "border-white" : "border-transparent"
                                }`}
                        >
                            Pages
                        </button>
                    </div>

                    {/* Search */}
                    <div className="relative mt-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full px-3 py-2 pl-9 pr-9 rounded-full bg-white text-black text-sm outline-none"
                        />

                        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-black text-sm" />
                        <FaMicrophone className="absolute right-3 top-1/2 -translate-y-1/2 text-black text-sm cursor-pointer" />
                    </div>

                    {/* BLOCKS */}
                    {leftTab === "blocks" && (
                        <div className="mt-4 space-y-4">

                            {/* BASIC */}
                            <div>
                                <div
                                    onClick={() => setShowBlocks(!showBlocks)}
                                    className="flex justify-between cursor-pointer mt-3 mb-2 items-center"
                                >
                                    <h3 className="text-sm pl-2">Basic Blocks</h3>
                                    {showBlocks ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                                </div>

                                {showBlocks && (
                                    <div className="grid grid-cols-3 grid-rows-2 h-28 justify-items-center content-between">

                                        <div className="bg-white w-10 h-10 rounded-md flex flex-col items-center justify-center text-xs hover:bg-blue-100 transition">
                                            <span className="font-bold text-gray-800 text-sm">T</span>
                                            <span className="text-[8px] text-gray-800">Text</span>
                                        </div>

                                        <div className="bg-white w-10 h-10 rounded-md flex flex-col items-center justify-center text-xs">
                                            <FaImage className="text-gray-800 text-sm" />
                                            <span className="text-[8px] text-gray-800">Image</span>
                                        </div>

                                        <div className="bg-white w-10 h-10 rounded-md flex flex-col items-center justify-center text-xs">
                                            <FaSquare className="text-gray-800 text-sm" />
                                            <span className="text-[8px] text-gray-800">Button</span>
                                        </div>


                                        <div className="bg-white w-10 h-10 rounded-md flex flex-col items-center justify-center text-xs">
                                            <FaVideo className="text-gray-800 text-sm" />
                                            <span className="text-[8px] text-gray-800">Video</span>
                                        </div>

                                        <div className="bg-white w-10 h-10 rounded-md"></div>
                                        <div className="bg-white w-10 h-10 rounded-md"></div>
                                    </div>
                                )}
                            </div>

                            {/* LAYOUT */}
                            <div>
                                <div
                                    onClick={() => setShowLayout(!showLayout)}
                                    className="flex justify-between cursor-pointer mb-2 items-center"
                                >
                                    <h3 className="text-sm pl-2">Layout Blocks</h3>
                                    {showLayout ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                                </div>

                                {showLayout && (
                                    <div className="grid grid-cols-3 grid-rows-2 h-28 justify-items-center content-between">

                                        <div className="bg-white w-10 h-10 rounded-md flex flex-col items-center justify-center text-xs border-2 border-[#06224C]">
                                            <span className="text-[8px] text-gray-800">Section</span>
                                        </div>

                                        <div className="bg-white w-10 h-10 rounded-md flex flex-col items-center justify-center text-xs">
                                            <FaColumns className="text-gray-800 text-sm" />
                                            <span className="text-[8px] text-gray-800">Columns</span>
                                        </div>

                                        <div className="bg-white w-10 h-10 rounded-md flex flex-col items-center justify-center text-xs">
                                            <span className="text-gray-800 text-[10px] font-bold">H</span>
                                            <span className="text-[8px] text-gray-800">Header</span>
                                        </div>

                                        <div className="bg-white w-10 h-10 rounded-md flex flex-col items-center justify-center text-xs">
                                            <FaWindowMinimize className="text-gray-800 text-sm" />
                                            <span className="text-[8px] text-gray-800">Footer</span>
                                        </div>

                                    </div>
                                )}
                            </div>

                            {/* ADVANCED */}
                            <div>
                                <div
                                    onClick={() => setShowAdvanced(!showAdvanced)}
                                    className="flex justify-between cursor-pointer mb-2 items-center"
                                >
                                    <h3 className="text-sm pl-2">Advanced</h3>
                                    {showAdvanced ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                                </div>

                                {showAdvanced && (
                                    <div className="grid grid-cols-3 grid-rows-2 h-28 justify-items-center content-between">

                                        <div className="bg-white w-10 h-10 rounded-md flex flex-col items-center justify-center text-xs">
                                            < FaRegFileAlt className="text-gray-800 text-sm" />
                                            <span className="text-[8px] text-gray-800">Form</span>
                                        </div>

                                        <div className="bg-white w-10 h-10 rounded-md flex flex-col items-center justify-center text-xs">
                                            <FaMap className="text-gray-800 text-sm" />
                                            <span className="text-[8px] text-gray-800">Map</span>
                                        </div>

                                        <div className="bg-white w-10 h-10 rounded-md flex flex-col items-center justify-center text-xs">
                                            <FaBlog className="text-gray-800 text-sm" />
                                            <span className="text-[8px] text-gray-800">Blog</span>
                                        </div>

                                        <div className="bg-white w-10 h-10 rounded-md flex flex-col items-center justify-center text-xs">
                                            <FaVideo className="text-gray-800 text-sm" />
                                            <span className="text-[8px] text-gray-800">Video</span>
                                        </div>

                                    </div>
                                )}
                            </div>

                        </div>
                    )}

                    {/* PAGES */}
                    {leftTab === "pages" && (
                        <div className="mt-6 space-y-4">
                            {["Home Page", "About Us", "Contact", "Projects"].map((item) => (
                                <div key={item} className="bg-white px-3 py-2 rounded-md flex justify-between text-sm">
                                    <span className="text-gray-800">{item}</span>
                                    <FaArrowRight className="text-gray-800" />
                                </div>
                            ))}
                        </div>
                    )}

                </aside>

                {/* MAIN CONTENT */}
                {/* MAIN CONTENT */}
                <div className="flex-1 bg-white p-4 md:p-7 flex justify-center">
                    <div className="w-full max-w-[1200px] relative">

                        {/* Canvas Box */}
                        
{/* IMAGE BLOCKS PAGE */}
<div className="flex-1 bg-white p-4 md:p-7 flex justify-center">
  <div className="w-full max-w-[1200px]">

    {/* HEADER */}
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-semibold text-gray-800">Image Blocks</h2>
      <button className="text-xl font-bold text-gray-600">✕</button>
    </div>

    {/* IMAGE PANEL */}
    <div className="border rounded-xl p-4 bg-gray-50">

      <h3 className="text-sm font-medium text-gray-700 mb-4">
        Image Panel
      </h3>

      <div className="grid grid-cols-3 gap-4">

        {/* CARD 1 */}
        <div className="bg-white rounded-xl shadow p-3 flex flex-col items-center">
          <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">Image Placeholder</span>
          </div>

          <p className="text-xs mt-2 text-gray-600">
            Upload image thumbnail
          </p>

          <button className="mt-2 px-3 py-1 text-xs bg-blue-900 text-white rounded-md">
            Upload or Browse Library
          </button>
        </div>

        {/* CARD 2 */}
        <div className="bg-white rounded-xl shadow p-3 flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            className="w-full h-32 object-cover rounded-lg"
          />

          <p className="text-xs mt-2 text-gray-600">
            Upload image thumbnail
          </p>

          <button className="mt-2 px-3 py-1 text-xs border border-blue-900 text-blue-900 rounded-md">
            Upload or Browse Library
          </button>
        </div>

        {/* CARD 3 */}
        <div className="bg-white rounded-xl shadow p-3 flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            className="w-full h-32 object-cover rounded-lg"
          />

          <p className="text-xs mt-2 text-gray-600">
            Upload image thumbnail
          </p>

          <button className="mt-2 px-3 py-1 text-xs border border-blue-900 text-blue-900 rounded-md">
            Upload or Browse Library
          </button>
        </div>

      </div>
    </div>

    {/* IMAGE GALLERY */}
    <div className="mt-6 border rounded-xl p-4 bg-gray-50">

      <h3 className="text-sm font-medium text-gray-700 mb-4">
        Image Gallery
      </h3>

      <div className="grid grid-cols-6 gap-2">

        {[1,2,3,4,5,6,7,8,9].map((item) => (
          <img
            key={item}
            src={`https://picsum.photos/200?random=${item}`}
            className="w-full h-20 object-cover rounded-md"
          />
        ))}

      </div>

      <p className="text-sm text-gray-500 mt-4">
        Add Your Heading Here
      </p>
    </div>

  </div>
</div>
                       
                    </div>


                </div>

                {/* RIGHT SIDEBAR */}
              <aside className="hidden lg:flex w-52 bg-[#FFF9F9] text-black flex flex-col p-4 space-y-4">

  {/* Tabs */}
  <div className="flex justify-center gap-6 text-sm font-semibold mt-6">
    <button
      onClick={() => setActiveTab("properties")}
      className={`pb-1 border-b-2 ${
        activeTab === "properties" ? "border-black" : "border-transparent"
      }`}
    >
      Properties
    </button>

    <span>|</span>

    <button
      onClick={() => setActiveTab("styles")}
      className={`pb-1 border-b-2 ${
        activeTab === "styles" ? "border-black" : "border-transparent"
      }`}
    >
      Styles
    </button>
  </div>

  {/* PROPERTIES */}
  {activeTab === "properties" && (
    <div>

      {/* Image Settings */}
      <div className="mb-6">
        <div
          onClick={() => setShowImageSettings(!showImageSettings)}
          className="flex justify-between cursor-pointer mb-4"
        >
          <p className="text-sm font-semibold text-black">Image Settings</p>
          <FaChevronDown
            className={`text-xs transition ${
              showImageSettings ? "rotate-180" : ""
            }`}
          />
        </div>

        {showImageSettings && (
          <div className="space-y-5">

            <div className="flex items-center gap-4">
              <p className="text-sm text-gray-700 flex-1">Width</p>
              <input
                defaultValue="420 px"
                className="w-[80px] border border-gray-400 rounded-full px-3 py-1 text-xs text-black text-center"
              />
            </div>

            <div className="flex items-center gap-4">
              <p className="text-sm text-gray-700 flex-1">Height</p>
              <input
                defaultValue="520 px"
                className="w-[80px] border border-gray-400 rounded-full px-3 py-1 text-xs text-black text-center"
              />
            </div>

        <div>
  <p className="text-sm text-gray-700 mb-2">Border Radius</p>
  <div className="flex items-center gap-2">
    <input
      type="range"
      className="w-[60%] h-1 bg-gray-300 rounded-lg cursor-pointer"
    />
    <input
      defaultValue="12px"
      className="w-20 border border-gray-400 rounded-full px-3 py-1 text-xs text-black text-center"
    />
  </div>
</div>
<div className="flex justify-between items-center">
  <p className="text-sm text-gray-700">Shadow</p>

  <button
    onClick={() => setShadowEnabled(!shadowEnabled)}
    className="text-xl"
  >
    {shadowEnabled ? (
      <FaToggleOn className="text-blue-600" />
    ) : (
      <FaToggleOff className="text-gray-400" />
    )}
  </button>
</div>

<div>
  <p className="text-sm text-gray-700 mb-2">Opacity</p>
  <div className="flex items-center gap-2">
    <input
      type="range"
      className="w-[60%] h-1 bg-gray-300 rounded-lg cursor-pointer"
    />
    <input
      defaultValue="100%"
      className="w-20 border border-gray-400 rounded-full px-3 py-1 text-xs text-black text-center"
    />
  </div>
</div>

          </div>
        )}
      </div>

      {/* Position */}
      <div className="mb-6">
        <div
          onClick={() => setShowPosition(!showPosition)}
          className="flex justify-between cursor-pointer mb-4"
        >
          <p className="text-sm font-semibold">Position</p>
          <FaChevronDown
            className={`text-xs transition ${
              showPosition ? "rotate-180" : ""
            }`}
          />
        </div>

        {showPosition && (
          <div className="space-y-5">

            <div>
              <p className="text-sm text-gray-700 mb-2">Position</p>
              <button className="w-full border border-gray-300 rounded py-2 text-sm">
                Center
              </button>
            </div>

            <div>
              <p className="text-sm text-gray-700 mb-2">Margin</p>
              <button className="w-full border border-gray-300 rounded py-2 text-sm">
                24px
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  )}

  {/* STYLES */}
  {activeTab === "styles" && (
    <div>
      <p className="text-sm text-gray-700 mb-6">Style Settings</p>

      <div className="space-y-6">

        <div>
          <p className="text-xs text-gray-600 mb-1">Margin</p>
          <input className="w-full rounded border border-gray-300 p-2 text-black" />
        </div>

        <div>
          <p className="text-xs text-gray-600 mb-1">Padding</p>
          <input className="w-full rounded border border-gray-300 p-2 text-black" />
        </div>

        <div>
          <p className="text-xs text-gray-600 mb-1">Background Color</p>
          <input type="color" className="w-full h-10" />
        </div>

       <div>
  <p className="text-xs text-gray-600 mb-1">Shadow</p>

  <button
    onClick={() => setShadowEnabled(!shadowEnabled)}
    className="flex items-center gap-2 text-lg text-gray-700 hover:text-black transition"
  >
    {shadowEnabled ? (
      <FaToggleOn className="text-blue-600" />
    ) : (
      <FaToggleOff className="text-gray-400" />
    )}
    
    <span className="text-xs">
      {shadowEnabled ? "Enabled" : "Disabled"}
    </span>
  </button>
</div>

      </div>
    </div>
  )}
</aside>


            </div>

        </main>
    );
}