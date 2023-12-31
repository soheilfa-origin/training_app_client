import React, { useState } from "react";
import { Navbar } from "./Navbar";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { Button, MenuItem } from "@mui/material";
import { cClass } from "../../class";
import { RegisterModal } from "./RegisterModal";
// classes
const headSection = `w-full h-[100px] flex items-center justify-between bg-transparent fixed top-0 left-0 right-0 px-main_x text-white z-50 border-b border-primary-500`;
const IconAndButtonPart = `flex items-center gap-4`;

export const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
  };

  return (
    <>
      <div className={`header-sec  ${headSection}`}>
        {/* logo  */}
        <h1 className="logo text-primary-500">Logo</h1>
        {/* menu  */}
        <Navbar />
        {/* icons  */}
        <div className={IconAndButtonPart}>
          <MenuItem
            variant="text"
            sx={{
              color: "var(--primary-500)",
              borderRadius: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px",
            }}
          >
            <ManageAccountsIcon />
          </MenuItem>
          <button onClick={showModalHandler} className={`${cClass.buttonOne}`}>
            Membership
          </button>
        </div>
      </div>
      {/* register modal  */}
      <RegisterModal show={showModal} modalControl={showModalHandler} />
    </>
  );
};
