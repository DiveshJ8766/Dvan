import React from "react";
import Link from "next/link";

function Verify() {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-md">
      <form className="space-y-8">
        <div>
          <label for="hashvalue" className="block mb-2 text-md font-bold">
            Enter Hash Value
          </label>
          <input
            type="text"
            id="hashvalue"
            className="block p-3 w-full bg-white rounded-xl bg-opacity-25 backdrop-filter backdrop-blur-sm text-white focus-within:outline-none select-none placeholder-white"
            required
          />
        </div>

        <div className="mt-20">
          <Link
            href="/"
            className="py-3 px-4 text-md text-center text-white bg-white rounded-xl bg-opacity-30 backdrop-filter backdrop-blur-sm"
          >
            Verify Certificate
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Verify;
