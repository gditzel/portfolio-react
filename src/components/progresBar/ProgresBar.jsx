import React from "react";

const ProgresBar = () => {
  return (
    <div className="w-full px-8 pt-8">
      <div className="flex items-center justify-between">
        <span className="text-sm text-white">HTML</span>
        <span className="min-w-[46px] rounded-lg px-2 py-1 text-center text-xs font-medium text-white">
          75%
        </span>
      </div>

      <div className="mb-6 mt-2 h-1 w-full bg-gray-700">
        <div className="h-1 bg-orange-500" style={{ width: "75%" }}></div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-white">CSS</span>
        <span className="min-w-[46px] px-2 py-1 text-center text-xs font-medium text-white">
          40%
        </span>
      </div>

      <div className="mb-6 mt-2 h-1 w-full bg-gray-700">
        <div className="h-1 bg-orange-500" style={{ width: "40%" }}></div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-white">JavaScript</span>
        <span className="min-w-[46px] px-2 py-1 text-center text-xs font-medium text-white">
          45%
        </span>
      </div>

      <div className="mb-6 mt-2 h-1 w-full bg-gray-700">
        <div className="h-1 bg-orange-500" style={{ width: "45%" }}></div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-white">ReactJS</span>
        <span className="min-w-[46px] px-2 py-1 text-center text-xs font-medium text-white">
          60%
        </span>
      </div>

      <div className="mb-6 mt-2 h-1 w-full bg-gray-700">
        <div className="h-1 bg-orange-500" style={{ width: "60%" }}></div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-white">Tailwind</span>
        <span className="min-w-[46px] px-2 py-1 text-center text-xs font-medium text-white">
          65%
        </span>
      </div>

      <div className="mb-6 mt-2 h-1 w-full bg-gray-700">
        <div className="h-1 bg-orange-500" style={{ width: "65%" }}></div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-white">Bootstrap</span>
        <span className="min-w-[46px] px-2 py-1 text-center text-xs font-medium text-white">
          30%
        </span>
      </div>

      <div className="mb-6 mt-2 h-1 w-full bg-gray-700">
        <div className="h-1 bg-orange-500" style={{ width: "30%" }}></div>
      </div>
    </div>
  );
};

export default ProgresBar;
