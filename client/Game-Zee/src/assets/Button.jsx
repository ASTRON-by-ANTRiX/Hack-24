import React from "react";

function Button({ btnTxt, width, children }) {
  return (
    <div className={`flex w-${width} h-auto px-3 py-2 bg-[#aefaf7] rounded-sm items-center justify-between mx-4`}>
      {/* Button text aligned */}
      <button className="text-[#17506e] font-heavitas flex items-center justify-center">
        {btnTxt}
      </button>

      {/* Children (like StatusBar) aligned and growing to fill available space */}
      <div className="flex-grow flex items-center justify-center px-3">
        {children}
      </div>
    </div>
  );
}

export default Button;
