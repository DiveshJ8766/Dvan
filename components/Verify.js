import React from "react";

function Verify() {
  return (
    <div className="max-w-xs p-6 bg-black flex justify-center flex-col items-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 mb-5">
      <div className="space-y-3 flex justify-center flex-col">
        <div className="text-black">
          <input type="text" placeholder="Enter id of certificate to verify" />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="py-2 px-5 text-lg font-light text-center text-white rounded-lg bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}

export default Verify;
