import React, { useState } from "react";
import { cClass } from "../../class";
import CloseIcon from "@mui/icons-material/Close";
import { MenuItem } from "@mui/material";
import { AxiosInstance } from "../../AxiosInstance/AxiosInstance";
import axios from "axios";

let modalClasses = `w-full h-full bg-black flex items-center justify-center fixed z-50 transition-all duration-500 p-main_x `;
let hideModalClasses = `invisible opacity-0 pointer-events-none`;
let showModalClasses = `visible opacity-1 pointer-events-auto`;

export const RegisterModal = ({ show, modalControl }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your server's registration endpoint
      const response = await AxiosInstance.post("user/register", formData);

      // Handle the response, e.g., show a success message or redirect the user
      console.log("User registered successfully:", response.data);
    } catch (error) {
      // Handle errors, e.g., display an error message
      console.error("Error registering user:", error);
    }
  };

  return (
    <>
      <div
        className={
          modalClasses + " " + (show ? showModalClasses : hideModalClasses)
        }
      >
        <div
          onClick={modalControl}
          className="close-modal absolute top-[20px] right-[20px]
          "
        >
          <MenuItem>
            <CloseIcon sx={{ color: "white" }} />
          </MenuItem>
        </div>
        <form
          onSubmit={handleSubmit}
          className="register-form w-[50%] flex flex-col gap-8 items-start justify-between mx-auto border border-primary-500 p-8 text-white"
        >
          <h2 className="">Register Form</h2>
          <input
            className="w-full"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            className="w-full"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className="w-full"
            type="text"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button className={`${cClass.buttonOne}`} type="submit">
            Register
          </button>
        </form>
      </div>
    </>
  );
};
