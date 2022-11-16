import Link from "next/link";
import React from "react";

function Subheader() {
  return (
    <div>
      <div className="mr-20 ml-20 mt-12 flex flex-col bg-white rounded-xl bg-opacity-25 backdrop-filter backdrop-blur-sm">
        <div className="h-full flex justify-center text-center p-4 font-extrabold text-transparent text-8xl bg-clip-text bg-white bg-gradient-to-r from-red-200 via-red-300 to-yellow-200">
          Issuing and Verifying Digital Certificates With Blockchain.
        </div>
        <div className="h-full flex justify-center flex-col p-4 text-transparent font-bold text-xl bg-clip-text bg-white ">
          <p>
            The purpose of this project is to build a system which can create
            and verify certificates using the blockchain as the storage database
            in order to obtain a immutablitiy.{" "}
          </p>
          <p></p>
        </div>
      </div>
      <div className="flex justify-center space-x-5 mt-12 mb-12">
        <div>
          <Link
            href="/student"
            className="py-3 px-5 text-lg text-center text-white bg-white rounded-xl bg-opacity-30 backdrop-filter backdrop-blur-sm"
          >
            Student Login
          </Link>
        </div>
        <div>
          <Link
            href="/institute"
            className="py-3 px-5 text-lg text-center text-white bg-white rounded-xl bg-opacity-30 backdrop-filter backdrop-blur-sm"
          >
            Institute Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Subheader;
