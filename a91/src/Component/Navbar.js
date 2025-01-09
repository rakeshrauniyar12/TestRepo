import React, { useState } from "react";
import "../Style/Navbar.css";
import "../Style/Login.css";
import logo from "../Asset/Navbar/a91.png";

import { RiArrowDropDownLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { RiCloseLargeFill } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import Login from "./Login";
import Register from "./Register";
import NavSecond from "./NavSecond";
import NavbarThird from "./NavbarThird";
const countryCodes = [
  { code: "+91", label: "India" },
  { code: "+1", label: "USA" },
  { code: "+2", label: "Canada" },
  { code: "+3", label: "Mexico" },
  { code: "+4", label: "Brazil" },
  { code: "+5", label: "Argentina" },
  { code: "+6", label: "Colombia" },
  { code: "+7", label: "Peru" },
  { code: "+8", label: "Venezuela" },
  { code: "+9", label: "Chile" },
  { code: "+10", label: "Ecuador" },
  { code: "+11", label: "Guatemala" },
  { code: "+12", label: "Cuba" },
  { code: "+13", label: "Haiti" },
  { code: "+14", label: "Dominican Republic" },
  { code: "+15", label: "Honduras" },
  { code: "+16", label: "Paraguay" },
  { code: "+17", label: "El Salvador" },
  { code: "+18", label: "Nicaragua" },
  { code: "+19", label: "Costa Rica" },
  { code: "+20", label: "Panama" },
  { code: "+21", label: "Jamaica" },
  { code: "+22", label: "Trinidad and Tobago" },
  { code: "+23", label: "Bahamas" },
  { code: "+24", label: "Barbados" },
  { code: "+25", label: "Saint Lucia" },
  { code: "+26", label: "Saint Vincent and the Grenadines" },
];

const Navbar = () => {
  const isMobile = window.innerWidth <= 768;
  const [isAccount, setAccount] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showSignupComponent, setShowSignupComponent] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showPurposeDropdown, setShowPurposeDropdown] = useState(false);
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [showOwnDropdown, setShowOwnDropdown] = useState(false);
  const [isPurRotate, setIsPurRotate] = useState(false);
  const [isOwnRotate, setIsOwnRotate] = useState(false);
  const [isCityRotate, setIsCityRotate] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAccountOption = () => {
    setAccount(!isAccount);
  };
  const handleLoginClick = () => {
    setShowLogin(!showLogin);
    setAccount(false);
  };
  const closeSignupComponent = () => {
    setShowSignupComponent(false);
  };

  const closeLoginComponent = () => {
    setShowLogin(false);
  };
  const handleLoginForm = () => {
    console.log("handleLoginForm", showLogin);
    console.log("handleLoginForm", showSignupComponent);
    setShowSignupComponent(false);

    setShowLogin(true);
  };
  const handleSignupForm = () => {
    console.log("handleSignupForm", showLogin);
    console.log("handleSignupForm", showSignupComponent);
    setShowSignupComponent(true);
    setAccount(false);
  };
  const handlePurposeDropdown = () => {
    setShowPurposeDropdown(!showPurposeDropdown);
    setIsPurRotate(!isPurRotate);
  };

  const handleCityDropdown = () => {
    setShowCityDropdown(!showCityDropdown);
    setIsCityRotate(!isCityRotate);
  };
  const handleOwnDropdown = () => {
    setShowOwnDropdown(!showOwnDropdown);
    setIsOwnRotate(!isOwnRotate);
  };
  const goToDetailPage = () => {
    setAccount(false);
    navigate("/detailpage");
  };
  const goToPropertyPage = () => {
    setAccount(false);
    navigate("/property");
  };
  if (location.pathname === "/") {
    return;
  }
  return (
    <div className="navbar-main-container">
      <div
        className="navbar-content"
        style={{
          justifyContent:
            location.pathname === "/property" ? "space-between" : "",
        }}
      >
        {!isMobile ? (
          <div
            className="nav-logo"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={logo} />
          </div>
        ) : (
          ""
        )}
        {isMobile ? (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              className="nav-logo"
              onClick={() => {
                navigate("/");
              }}
            >
              <img src={logo} />
            </div>
            <div className="h-second-nav">
              <div>
                <BiSearchAlt size={35} />
              </div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/addproperty")}
              >
                <AiFillHome size={35} />
              </div>
              <div>
                <FaHandshake size={40} />
              </div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => handleAccountOption()}
              >
                <FaUser size={30} />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
       <NavSecond/>
        <div
          className="nav-end-option-2"
          style={{
            marginRight: location.pathname === "/property" ? "20px" : "",
          }}
        >
          {!isMobile ? (
             <NavbarThird showLogin={showLogin} setShowLogin={setShowLogin} setAccount={setAccount}
             setShowSignupComponent={setShowSignupComponent} setHomeDropdownOpen={setHomeDropdownOpen}
          />
          ) : (
            ""
          )}

          {isAccount && (
            <div className="account-details">
              <p className="account-option" onClick={handleLoginClick}>
                Login
              </p>
              <p className="account-option" onClick={handleSignupForm}>
                Register as Individual
              </p>
              <p className="account-option" onClick={goToDetailPage}>
                Register as Channel Partner
              </p>
              <p className="account-option" onClick={goToPropertyPage}>
                Property
              </p>
            </div>
          )}
          {showLogin && (
               <Login setAccount={setAccount} setShowSignupComponent={setShowSignupComponent} setShowLogin={setShowLogin}/>
          )}
          {showSignupComponent && (
                <Register setShowSignupComponent={setShowSignupComponent} setShowLogin={setShowLogin}/>
          )}
        </div>
      </div>
      {/* <div className="navbar-divider"></div> */}
      {/* <div
        className="nav-down-part"
        
      >
        <div
          className="nav-down-part-content"
          // style={{ border: "1px solid red" }}
        >
         

          {location.pathname === "/homedesign" && (
            <>
             <div style={{ display: "flex" }}>
            <div>
              <div>
                <GiSettingsKnobs
                  size={!isMobile ? 35 : 24}
                  style={{
                    transform: "rotate(90deg)",
                  }}
                />
              </div>
              <p>Filter</p>
            </div>
            <div className="divide-line-11"></div>
            <div className="budget-div">
              <div>
                <p>₹ Budget</p>
              </div>
              <div className="div-min-max">
                <div className="nav-min">Min</div>
                <p>To</p>
                <div className="nav-min">Max</div>
              </div>
            </div>
            <div className="divide-line-11"></div>
          </div>
          <div
              className="home-image-nav"
              style={{
                flexDirection:
                  location.pathname === "/homedesign" ? "row" : "column",
              }}
            >
              <div className="home-i-div-1">
                <img className="home-nav-im-1" src={h21} />
                <p>1BHK</p>
              </div>
              <div className="home-i-div-1">
                <img className="home-nav-im-2" src={h22} />
                <p>2BHK</p>
              </div>
              <div className="home-i-div-1">
                <img src={h23} className="home-nav-im-3" />
                <p>3BHK</p>
              </div>
              <div className="home-i-div-1">
                <img src={h24} className="home-nav-im-4" />
                <p>4BHK</p>
              </div>
              <div className="home-i-div-1">
                <img src={h25} className="home-nav-im-5" />
                <p>5BHK</p>
              </div>
            </div>
            </>
         
          )}
          {location.pathname === "/homedesignfirst" && (
            <div
              className="home-image-nav"
              style={{
                flexDirection:
                  location.pathname === "/homedesignfirst" ? "row" : "column",
              }}
            >
              <div className="home-i-div-1">
                <img className="home-nav-im-1" src={p1} />
                <p style={{ fontSize: "8px", fontWeight: "600" }}>{`>1000`}</p>
              </div>
              <div className="home-i-div-1">
                <img className="home-nav-im-2" src={p1} />
                <p style={{ fontSize: "8px", fontWeight: "600" }}>{`>2000`}</p>
              </div>
              <div className="home-i-div-1">
                <img src={p1} className="home-nav-im-3" />
                <p style={{ fontSize: "8px", fontWeight: "600" }}>{`>3000`}</p>
              </div>
              <div className="home-i-div-1">
                <img src={p1} className="home-nav-im-4" />
                <p style={{ fontSize: "8px", fontWeight: "600" }}>{`>4000`}</p>
              </div>
              <div className="home-i-div-1">
                <img src={p1} className="home-nav-im-5" />
                <p style={{ fontSize: "8px", fontWeight: "600" }}>{`4000+`}</p>
              </div>
            </div>
          )}
          {location.pathname === "/homedesignsecond" && (
            <div
              className="home-image-nav"
              style={{
                flexDirection:
                  location.pathname === "/homedesignsecond" ? "row" : "column",
              }}
            >
              <div
                className="home-i-div-1"
                style={{
                  flexDirection:
                    location.pathname === "/homedesignsecond" ? "none" : "",
                }}
              >
                <img className="home-nav-im-1" src={p2} />
                <p style={{ fontSize: "8px", fontWeight: "600" }}>{`>1000`}</p>
              </div>
              <div className="home-i-div-1">
                <img className="home-nav-im-2" src={p2} />
                <p style={{ fontSize: "8px", fontWeight: "600" }}>{`>2000`}</p>
              </div>
              <div className="home-i-div-1">
                <img src={p2} className="home-nav-im-3" />
                <p style={{ fontSize: "8px", fontWeight: "600" }}>{`>3000`}</p>
              </div>
              <div className="home-i-div-1">
                <img src={p2} className="home-nav-im-4" />
                <p style={{ fontSize: "8px", fontWeight: "600" }}>{`>4000`}</p>
              </div>
              <div className="home-i-div-1">
                <img src={p2} className="home-nav-im-5" />
                <p style={{ fontSize: "8px", fontWeight: "600" }}>{`4000+`}</p>
              </div>
            </div>
          )}

          {location.pathname === "/detailpage" && (
            
            <div style={{ display: "flex",alignItems:"center" }}>
            <div >
              <div>
                <GiSettingsKnobs
                  size={!isMobile ? 32 : 24}
                  style={{
                    transform: "rotate(90deg)",
                  }}
                />
              </div>
              <p>Filter</p>
            </div>
            <div className="divide-line-11"></div>
            <div className="budget-div">
              <div>
                <p>₹ Budget</p>
              </div>
              <div className="div-min-max">
                <div className="nav-min">Min</div>
                <p>To</p>
                <div className="nav-min">Max</div>
              </div>
            </div>
            <div className="divide-line-11"></div>
            <div id="detail-image-11">
                <div>
                   <TbHomeFilled size={16}/>
                  <p>1BHK</p>
                </div>
                <div>
                <TbHomeFilled size={20}/>
                  <p>2BHK</p>
                </div>
                <div>
                <TbHomeFilled size={24}/>
                  <p>3BHK</p>
                </div>
                <div>
                <TbHomeFilled size={28}/>
                  <p>4BHK</p>
                </div>
                <div>
                <TbHomeFilled size={32}/>
                  <p>5BHK</p>
                </div>
              </div>
             
              <div className="divide-line-11"></div>
                <div id="like-dis-div">
                  <div>
                   <BiSolidLike size={24}/>
                    <p
                      style={{ fontSize: "8px", fontWeight: "600" }}
                    >{`1000`}</p>
                  </div>
                  <div>
                   <BiSolidDislike size={24}/>
                    <p
                      style={{ fontSize: "8px", fontWeight: "600" }}
                    >{`500`}</p>
                  </div>
                </div>
                <div className="divide-line-11"></div>
                <div>
                  <GrCompare size={30}/>
                </div>
                <div className="divide-line-11"></div>
                <div>
                  <MdOutlineDateRange size={30}/>
                </div>
             
          </div>
          
          )}
        </div>
        {location.pathname === "/detailpage" && (
          <div className="repor-agent">
            <div>
              <img src={repor} />
            </div>
            <p>Report an agent</p>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Navbar;
