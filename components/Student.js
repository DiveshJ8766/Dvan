import React from "react";
import Link from "next/link";

function Student() {
  return (
    <div className="mt-30 mb-12 ml-20 mr-20">
      <div className="py-8 px-4 mx-auto max-w-screen-md">
        <form className="space-y-8">
          <div>
            <label for="Name" className="block mb-2 text-md font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="block p-3 w-full bg-white rounded-xl bg-opacity-25 backdrop-filter backdrop-blur-sm text-white focus-within:outline-none select-none placeholder-white"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div>
            <label for="student_id" className="block mb-2 text-md font-bold">
              Student ID
            </label>
            <input
              type="number"
              id="student_id"
              className="block p-3 w-full bg-white rounded-xl bg-opacity-25 backdrop-filter backdrop-blur-sm text-white focus-within:outline-none select-none placeholder-white"
              placeholder="Enter Your Student ID"
              required
            />
          </div>
          <div>
            <label for="branch" className="block mb-2 text-md font-bold">
              Branch
            </label>
            <input
              type="text"
              id="branch"
              className="block p-3 w-full bg-white rounded-xl bg-opacity-25 backdrop-filter backdrop-blur-sm text-white focus-within:outline-none select-none placeholder-white"
              placeholder="Enter Your Branch"
              required
            />
          </div>
          <div>
            <label for="sgpa" className="block mb-2 text-md font-bold">
              SGPA
            </label>
            <input
              type="number"
              id="sgpa"
              className="block p-3 w-full bg-white rounded-xl bg-opacity-25 backdrop-filter backdrop-blur-sm text-white focus-within:outline-none select-none placeholder-white"
              placeholder="Enter Your SGPA"
              required
            />
          </div>
          <div>
            <label for="email" className="block mb-2 text-md font-bold">
              E-Mail
            </label>
            <input
              type="email"
              id="email"
              className="block p-3 w-full bg-white rounded-xl bg-opacity-25 backdrop-filter backdrop-blur-sm text-white focus-within:outline-none select-none placeholder-white"
              placeholder="example@gmail.com"
              required
            />
          </div>

          <div className="mt-20">
            <Link
              href="/requestsend"
              className="py-3 px-4 text-md text-center text-white bg-white rounded-xl bg-opacity-30 backdrop-filter backdrop-blur-sm"
            >
              Request Certificate
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Student;
