import React,{useState} from 'react'
import { BiSearchAlt } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa";
import SearchModel from "./SearchModel";
import { AiFillHome } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
function NavbarThird({showLogin,setShowLogin,setAccount,setShowSignupComponent,setHomeDropdownOpen}) {
   const navigate = useNavigate();
//    const [showLogin, setShowLogin] = useState(false);
//     const [isAccount, setAccount] = useState(false);
//     const [showSignupComponent, setShowSignupComponent] = useState(false);
//    const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
     const [activeDropdown, setActiveDropdown] = useState(null);
     const [isModalOpen, setIsModalOpen] = useState(false);
    const handleDropdownToggle = (dropdownName) => {
        setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
      };
      const handleOptionClick = (path) => {
        navigate(path);
        setHomeDropdownOpen(false);
        setActiveDropdown(null)
      };
      const handleLoginClick = () => {
        setShowLogin(!showLogin);
        setAccount(false);
      };
      const handleOpenModal = () => {
        setIsModalOpen(!isModalOpen);
      };
      const handleSignupForm = () => {
        setShowSignupComponent(true);
        setAccount(false);
      };
      const goToPropertyPage = () => {
        setAccount(false);
        setActiveDropdown(null)
        navigate("/property");
      };
      const goToDetailPage = () => {
        setAccount(false);
        navigate("/detailpage");
      };
      const handleCloseModal = () => {
        setIsModalOpen(false);
      };
  return (
           <div className="h-second-nav">
                <div
                  className="search-dropdown-main"
                  // onClick={handleSearchDropdown}
                  onClick={() => handleDropdownToggle("search")}
                >
                  <BiSearchAlt size={45} />
                  {activeDropdown === "search" && (
                    <div className="search-dropdown-1">
                      <ul className="search-li-1">
                        <li
                          onClick={handleOpenModal}
                          style={{
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          New Search
                          <FaChevronRight
                            style={{ marginLeft: "5px", fontWeight: "bold" }}
                            size={12}
                          />
                        </li>

                        <li>
                          Saved Search{" "}
                          <FaChevronRight
                            style={{ marginLeft: "5px", fontWeight: "bold" }}
                            size={12}
                          />
                        </li>
                      </ul>
                    </div>
                  )}
                  <SearchModel
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                  />
                </div>

                <div style={{ position: "relative", display: "inline-block" }}>
                  <div
                    style={{ cursor: "pointer" }}
                    // onClick={toggleDropdown}
                    onClick={() => handleDropdownToggle("home")}
                  >
                    <AiFillHome size={45} />
                  </div>

                  {activeDropdown === "home" && (
                    // {homeDropdownOpen && (
                    <div className="homeDropdownContainer">
                      <div
                        className="homeDropdownContainerOption"
                        onClick={() => handleOptionClick("/addproperty")}
                      >
                        Add New Property
                      </div>
                      <div className="homeDropdownContainerOption">
                        View All Properties
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <FaHandshake size={50} />
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  // onClick={() => handleAccountOption()}
                  onClick={() => handleDropdownToggle("account")}
                >
                  <FaUser size={40} />
                </div>
                {activeDropdown === "account" && (
                  // {isAccount && (
                  <div className="account-details1">
                    <p
                      className="account-option"
                      onClick={() => {
                        handleLoginClick();
                        setActiveDropdown(null);
                      }}
                    >
                      Login
                    </p>

                    <p
                      className="account-option"
                      onClick={() => {
                        handleSignupForm();
                        setActiveDropdown(null);
                      }}
                    >
                      Register as Individual
                    </p>
                    <p
                      className="account-option"
                      onClick={() => {
                        goToDetailPage();
                        setActiveDropdown(null);
                      }}
                    >
                      Register as Channel Partner
                    </p>
                    <p className="account-option" onClick={goToPropertyPage}>
                Property
              </p>
                  </div>
                )}
              </div>
  
  )
}

export default NavbarThird