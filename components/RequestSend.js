import Link from "next/link";
import React from "react";

function RequestSend() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="block p-6 bg-white rounded-xl bg-opacity-30 backdrop-filter backdrop-blur-sm max-w-sm">
          <h5 className=" text-xl leading-tight font-medium mb-2">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg
                class="h-6 w-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h3 class=" text-xl font-bold text-white text-center">
              Successful!
            </h3>
          </h5>
          <p className="text-white text-lg font-bold mb-4">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="flex justify-center items-center space-x-6">
            <Link
              href="/"
              type="button"
              className=" py-3 px-5 text-sm font-medium text-center space-x-6 text-white bg-white rounded-xl bg-opacity-30 backdrop-filter backdrop-blur-sm"
            >
              Go To Home
            </Link>
            <Link
              href="/"
              type="button"
              className=" py-3 px-5 text-sm font-medium text-center text-white bg-white rounded-xl bg-opacity-30 backdrop-filter backdrop-blur-sm"
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestSend;
