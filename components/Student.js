import React from "react";
import Link from "next/link";

function Student() {
  return (
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
        <div>
          <label for="isrmarks" className="block mb-2 text-md font-bold">
            Information and Storage Retrieval (ISR) Marks
          </label>
          <input
            type="number"
            id="isrmarks"
            className="block p-3 w-full bg-white rounded-xl bg-opacity-25 backdrop-filter backdrop-blur-sm text-white focus-within:outline-none select-none placeholder-white"
            placeholder="Enter Marks of ISR"
            required
          />
        </div>
        <div>
          <label for="spmmarks" className="block mb-2 text-md font-bold">
            Software Project Management (SPM) Marks
          </label>
          <input
            type="number"
            id="spmmarks"
            className="block p-3 w-full bg-white rounded-xl bg-opacity-25 backdrop-filter backdrop-blur-sm text-white focus-within:outline-none select-none placeholder-white"
            placeholder="Enter Marks of SPM"
            required
          />
        </div>
        <div>
          <label for="deeplearning" className="block mb-2 text-md font-bold">
            Deep Learning (DL) Marks
          </label>
          <input
            type="number"
            id="deeplearning"
            className="block p-3 w-full bg-white rounded-xl bg-opacity-25 backdrop-filter backdrop-blur-sm text-white focus-within:outline-none select-none placeholder-white"
            placeholder="Enter Marks of DL"
            required
          />
        </div>
        <div>
          <label for="mobilecomputing" className="block mb-2 text-md font-bold">
            Mobile Computing (MOC) Marks
          </label>
          <input
            type="number"
            id="mobilecomputing"
            className="block p-3 w-full bg-white rounded-xl bg-opacity-25 backdrop-filter backdrop-blur-sm text-white focus-within:outline-none select-none placeholder-white"
            placeholder="Enter Marks of MOC"
            required
          />
        </div>
        <div>
          <label
            for="wirelesscommunication"
            className="block mb-2 text-md font-bold"
          >
            Wireless Communication (WC) Marks
          </label>
          <input
            type="number"
            id="wirelesscommunication"
            className="block p-3 w-full bg-white rounded-xl bg-opacity-25 backdrop-filter backdrop-blur-sm text-white focus-within:outline-none select-none placeholder-white"
            placeholder="Enter Marks of WC"
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
        <div className="mt-20">
          <Link
            type="submit"
            href="/requestsend"
            className="py-2 px-3 text-md text-center text-white bg-white rounded-xl bg-opacity-30 backdrop-filter backdrop-blur-sm"
          >
            Request Certificate
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Student;
