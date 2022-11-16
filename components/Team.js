import React from "react";
import Image from "next/image";
import diveshProfile from "../assests/DiveshProfile.jpg";
import vaishnaviProfile from "../assests/VaishnaviProfile.jpeg";
import ankitaProfile from "../assests/AnkitaProfile.jpg";
import navnathProfile from "../assests/NavanathProfile.jpeg";

function Team() {
  return (
    <div className="mr-20 ml-20 mt-48 mb-12">
      <div className="flex justify-center mt-12 font-extrabold text-4xl">
        <h1 className="font-extrabold text-4xl">Team Members</h1>
      </div>
      <div className="flex w-full justify-center mt-28 mb-28">
        <div className="grid mb-8 md:mb-12 md:grid-cols-2 bg-white rounded-xl bg-opacity-25 backdrop-filter backdrop-blur-sm">
          <figure className="flex flex-col items-center justify-center p-8 text-center border-b border-white-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r ">
            <blockquote className="max-w-2xl mx-auto mb-2 lg:mb-4 text-transparent font-bold text-xl bg-clip-text bg-white">
              <h3 className="text-lg font-semibold">Developer</h3>
              <p className="my-4 font-light">Created All Module of Project.</p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3 ">
              <Image
                className="rounded-full w-28 h-28"
                src={diveshProfile}
                alt="profile picture"
              />
              <div className="space-y-0.5 font-bold text-left text-transparent text-xl bg-clip-text bg-white">
                <div>Divesh Jadhav</div>
                <div className="text-sm">SITRC BE IT</div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center border-b border-white-200 rounded-tr-lg">
            <blockquote className="max-w-2xl mx-auto mb-2 lg:mb-4 text-transparent font-bold text-xl bg-clip-text bg-white">
              <h3 className="text-lg font-semibold">Documentarian</h3>
              <p className="my-4 font-light">
                Managed All Documentation of Project.
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <Image
                className="rounded-full w-28 h-28"
                src={diveshProfile}
                alt="profile picture"
              />
              <div className="space-y-0.5 font-bold text-left text-transparent text-xl bg-clip-text bg-white">
                <div>Vaishnavi Deore</div>
                <div className="text-sm">SITRC BE IT</div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r ">
            <blockquote className="max-w-2xl mx-auto mb-2 lg:mb-4 text-transparent font-bold text-xl bg-clip-text bg-white">
              <h3 className="text-lg font-semibold">Reseacher</h3>
              <p className="my-4 font-light">
                Searched All documents needed for Project
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <Image
                className="rounded-full w-28 h-28"
                src={ankitaProfile}
                alt="profile picture"
              />
              <div className="space-y-0.5 font-bold text-left text-transparent text-xl bg-clip-text bg-white">
                <div>Ankita Pawar</div>
                <div className="text-sm">SITRC BE IT</div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center border-gray-200 rounded-b-lg md:rounded-br-lg">
            <blockquote className="max-w-2xl mx-auto mb-2 lg:mb-4 text-transparent font-bold text-xl bg-clip-text bg-white">
              <h3 className="text-lg font-semibold">Tester</h3>
              <p className="my-4 font-light">Tested Module of Project</p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <Image
                className="rounded-full w-28 h-28"
                src={navnathProfile}
                alt="profile picture"
              />
              <div className="space-y-0.5 font-bold text-left text-transparent text-xl bg-clip-text bg-white">
                <div>Navnath Ugale</div>
                <div className="text-sm">SITRC BE IT</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Team;
