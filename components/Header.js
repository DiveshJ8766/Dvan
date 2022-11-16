import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="mt-7 mr-20 ml-20 ">
      <div className=" flex justify-between">
        <h2 className="py-3 px-5 text-lg font-normal text-center text-white rounded-lg bg-white bg-opacity-25 backdrop-filter backdrop-blur-sm  ">
          <p className="bg-gradient-to-r from-gray-700 via-gray-900 to-black text-transparent  bg-clip-text">
            DVAN
          </p>
        </h2>
        <h3 className="flex justify-center">
          <Link href="/" className="py-3 px-5  font-medium text-center">
            <li>Home</li>
          </Link>
          <Link href="/" className="py-3 px-5  font-medium text-center">
            <li>Team</li>
          </Link>
          <Link href="/" className="py-3 px-5  font-medium text-center">
            <li>Contact Us</li>
          </Link>
          <Link href="/verify" className="py-3 px-5  font-medium text-center">
            <li>Verify</li>
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Header;
