import React from "react";
import { BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <div className="flex justify-between p-6">
      <div className="font-bold text-md flex text-center">
        This Project Is Made With ❤️ by DVAN{" "}
      </div>
      <div className="font-bold text-md space-x-4 flex justify-center text-center">
        <BsGithub />
        <p>GitHub</p>
      </div>
      <div className="font-bold text-md text-center">All Rights Reserved!</div>
    </div>
  );
}

export default Footer;
