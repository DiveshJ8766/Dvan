import React from "react";

function ContactUs() {
  return (
    <div>
      <div className="py-8 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-20 text-center font-extrabold text-4xl">
          Contact Us
        </h2>
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

          <div className="sm:col-span-2">
            <label for="message" className="block mb-2 text-md font-bold">
              Message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-3 w-full bg-white rounded-xl bg-opacity-25 backdrop-filter backdrop-blur-sm text-white focus-within:outline-none select-none placeholder-white resize-none"
              placeholder="Enter Your Message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-4 text-base text-center text-white bg-white rounded-xl bg-opacity-30 backdrop-filter backdrop-blur-sm"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
