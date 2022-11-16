import React from "react";

function Usage() {
  return (
    <div className=" mt-36 mb-12 mr-20 ml-20 flex flex-col justify-center">
      <div className="flex justify-center p-6 mt-12">
        <h1 className="font-extrabold text-4xl">Why To Use DVAN?</h1>
      </div>
      <div className="flex justify-evenly mt-10">
        <div className="m-9 flex justify-center flex-col items-center">
          <div className="w-12 h-12 mb-6 bg-white bg-opacity-30 backdrop-filter backdrop-blur-sm rounded-full flex justify-center items-center text-center font-medium text-xl">
            <span className="text-transparent font-bold text-xl bg-clip-text bg-white">
              1
            </span>
          </div>
          <div className="text-3xl font-bold">
            <p>Easy To Use.</p>
          </div>
        </div>
        <div className="m-9 flex justify-center flex-col items-center">
          <div className="w-12 h-12 mb-6 bg-white bg-opacity-30 backdrop-filter backdrop-blur-sm rounded-full flex justify-center items-center text-center font-medium text-xl">
            <span className="text-transparent font-bold text-xl bg-clip-text bg-white">
              2
            </span>
          </div>
          <div className="text-3xl font-bold">
            <p>More Secure.</p>
          </div>
        </div>
        <div className="m-9 flex justify-center flex-col items-center">
          <div className="w-12 h-12 mb-6 bg-white bg-opacity-30 backdrop-filter backdrop-blur-sm rounded-full flex justify-center items-center text-center font-medium text-xl">
            <span className="text-transparent font-bold text-xl bg-clip-text bg-white">
              3
            </span>
          </div>
          <div className="text-3xl font-bold">
            <p>Fast Service.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usage;
