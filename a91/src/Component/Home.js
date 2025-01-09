import React, { useState, useEffect } from "react";
import "../Style/Hfirst.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import account from "../Asset/Navbar/account.png";
import logo from "../Asset/Navbar//a91.png";
import search from "../Asset/Navbar/search.png";
import h1 from "../Asset/Navbar/h1.png";
import { Link } from "react-router-dom";


import filt from "../Asset/Navbar/filter.png";
import header from "../Asset/Home/header11.png";
import partner from "../Asset/Navbar/partner.png";
import "../Style/Home.css";
import { useNavigate } from "react-router-dom";
import h2 from "../Asset/Home/h1.png";

import Footer1 from "./Footer1";
import { BiSearchAlt } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

import ApartmentCard from "./ApartmentCard";
import { FaChevronRight } from "react-icons/fa";

import FilterModal from "./FilterModal";
import Login from "./Login";
import Register from "./Register";
import FilterMinMax from "./FilterMinMax";
import NavSecond from "./NavSecond";
import NavbarThird from "./NavbarThird";
const Home = () => {
  const navigate = useNavigate();
  const [isAccount, setAccount] = useState(false);
  const [showSignupComponent, setShowSignupComponent] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
     const [selectedCityBanner, setSelectedCityBanner] = useState(null);
        const [selectedOwnOrRent, setSelectedOwnOrRent] = useState(null);
        const [selectedPurposeBanner, setSelectedPurposeBanner] = useState(null);
         const [showCityDropdown, setShowCityDropdown] = useState(false);
          const [selectedCity, setSelectedCity] = useState("City");
               const [selectedOwnRent, setSelectedOwnRent] = useState("Own/Rent");
               const [selectedPurpose, setSelectedPurpose] = useState("Purpose");
               const [activeDropdown, setActiveDropdown] = useState(null);
         const [showPurposeDropdown, setShowPurposeDropdown] = useState(false);
          const [showOwnDropdown, setShowOwnDropdown] = useState(false);
         
          const [isPurRotate, setIsPurRotate] = useState(false);
          const [isPurRotateHeader, setIsPurRotateHeader] = useState(false);
          const [isOwnRotate, setIsOwnRotate] = useState(false);
          const [isOwnRotateHeader, setIsOwnRotateHeader] = useState(false);
          const [isCityRotate, setIsCityRotate] = useState(false);
          const [isCityRotateHeader, setIsCityRotateHeader] = useState(false);
   const [showOwnDropdownHeader, setShowOwnDropdownHeader] = useState(false);
  const [showPurposeDropdownHeader, setShowPurposeDropdownHeader] =
    useState(false);
  const [showCityDropdownHeader, setShowCityDropdownHeader] = useState(false);
  const [showFirstComponent, setShowFirstComponent] = useState(true);
  const [showOptionsInNavbar, setShowOptionsInNavbar] = useState(false);
  const [searchDropdown, setSearchDropdown] = useState(false);
   const isMobile = window.innerWidth <= 768;
  const [opacity, setOpacity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageHeight, setImageHeight] = useState(200);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setHomeDropdownOpen(!homeDropdownOpen);
    if (searchDropdown || isAccount) {
      setSearchDropdown(false);
      setAccount(false);
    }
  };

  const handleOptionClick = (path) => {
    navigate(path);
    setHomeDropdownOpen(false);
  };

  const toggleFilterModal = () => {
    setIsFilterModalOpen(!isFilterModalOpen);
  };

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleScrolls = () => {
      const scrollY = window.scrollY;
      const maxScroll = 200; // Total scroll range
      const offset = maxScroll * 0.9; // 90% of the scroll range

      let newOpacity = 1;
      let newHeight = 200; // Full height of the image

      if (scrollY > offset) {
        // Start reducing opacity and height after 90% of the scroll range
        newOpacity = Math.max(1 - (scrollY - offset) / (maxScroll - offset), 0);
        newHeight = Math.max(200 * newOpacity, 0); // Reduce height proportionally
      }

      setOpacity(newOpacity);
      setImageHeight(newHeight);
    };

    window.addEventListener("scroll", handleScrolls);

    return () => {
      window.removeEventListener("scroll", handleScrolls);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const hfirstOption = document.querySelector(".h-main-img");
      const navbar = document.querySelector(".h-nav-content");

      if (hfirstOption && navbar) {
        const hfirstOffsetTop = hfirstOption.offsetTop;
        const navbarHeight = navbar.offsetHeight;

        if (scrollPosition + navbarHeight >= hfirstOffsetTop) {
          setShowOptionsInNavbar(true);
        } else {
          setShowOptionsInNavbar(false);
        }
      }

      setShowFirstComponent(scrollPosition === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCityDropdown = () => {
    setShowCityDropdown(!showCityDropdown);
    setIsCityRotate(!isCityRotate);
  };

  const handleAccountOption = () => {
    setAccount(!isAccount);
    if (searchDropdown || homeDropdownOpen) {
      setSearchDropdown(false);
      setHomeDropdownOpen(false);
    }
  };
  const handleLoginClick = () => {
    setShowLogin(!showLogin);
    setAccount(false);
  };
  const closeSignupComponent = () => {
    setShowSignupComponent(false);
  };

 
  const handleLoginForm = () => {
    setShowSignupComponent(false);
      setShowLogin(true);
  };
  const handleSignupForm = () => {
    setShowSignupComponent(true);
    setAccount(false);
  };
  const handlePurposeDropdown = () => {
    setShowPurposeDropdown(!showPurposeDropdown);
    setIsPurRotate(!isPurRotate);
  };

  const handleOwnDropdown = () => {
    setShowOwnDropdown(!showOwnDropdown);
    setIsOwnRotate(!isOwnRotate);
  };

  const handleCityDropdownHeader = () => {
    setShowCityDropdownHeader(!showCityDropdownHeader);
    setIsCityRotateHeader(!isCityRotateHeader);

    if (showOwnDropdownHeader) {
      setShowOwnDropdownHeader(false);
      setIsOwnRotateHeader(false);
    }
    if (showPurposeDropdownHeader) {
      setShowPurposeDropdownHeader(false);
      setIsPurRotateHeader(false);
    }
  };

  const handleCitySelection = (city) => {
    setSelectedCityBanner(city);
    setShowCityDropdownHeader(false);
    setIsCityRotateHeader(false);
  };

  const handleOwnDropdownHeader = () => {
    setShowOwnDropdownHeader(!showOwnDropdownHeader);
    setIsOwnRotateHeader(!isOwnRotateHeader);

    if (showCityDropdownHeader) {
      setShowCityDropdownHeader(false);
      setIsCityRotateHeader(false);
    }
    if (showPurposeDropdownHeader) {
      setShowPurposeDropdownHeader(false);
      setIsPurRotateHeader(false);
    }
  };

  const handleOwnOrRentSelection = (option) => {
    setSelectedOwnOrRent(option);
    setShowOwnDropdownHeader(false);
    setIsOwnRotateHeader(false);
  };

  const handlePurposeDropdownHeader = () => {
    setShowPurposeDropdownHeader(!showPurposeDropdownHeader);
    setIsPurRotateHeader(!isPurRotateHeader);

    if (showCityDropdownHeader) {
      setShowCityDropdownHeader(false);
      setIsCityRotateHeader(false);
    }
    if (showOwnDropdownHeader) {
      setShowOwnDropdownHeader(false);
      setIsOwnRotateHeader(false);
    }
  };

  const handlePurposeSelection = (purpose, route) => {
    setSelectedPurposeBanner(purpose);
    setShowPurposeDropdownHeader(false); // Close the dropdown
    setIsPurRotateHeader(false); // Rotate the arrow back
    navigate(route);
  };

  const handleSearchDropdown = () => {
    setSearchDropdown(!searchDropdown);
    if (homeDropdownOpen || isAccount) {
      setHomeDropdownOpen(false);
      setAccount(false);
    }
  };

  const goToDetailPage = () => {
    setAccount(false);
    navigate("/detailpage");
  };

  const products = [];
  for (let r = 0; r < 6; r++) {
    products.push({
      productImage: h2,
      productName: "Residential",
      productAreaName: "Locality",
      productRent: 20000,
      productBedType: "3BHK",
      productArea: "3700sqft",
      productSaleType: "not for sale",
      productDistance: "9.8 Km away",
      isAvailable: true,
    });
  }

 

  const handleDropdownToggle = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

 

  const [showText, setShowText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const words = ["Address", "Agents"];

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[loopNum % words.length];
      const updatedText = isDeleting
        ? currentWord.substring(0, showText.length - 1)
        : currentWord.substring(0, showText.length + 1);

      setShowText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        setTypingSpeed(3000);
        setIsDeleting(true);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(100);
      } else {
        setTypingSpeed(isDeleting ? 50 : 100);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [showText, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="hfirst-main-container">
      <div className="h-nav-content">
        <div
          className="h-nav-content-1"
          style={{ flexDirection: isMobile ? "column" : "" }}
        >
          {!isMobile ? (
            <>
              <div className="h-logo-1" onClick={() => navigate("/")}>
                <img src={logo} alt="Logo" />
              </div>
              {showOptionsInNavbar && (
                <NavSecond/>
              )}
              
           <NavbarThird showLogin={showLogin} setShowLogin={setShowLogin} setAccount={setAccount}
              setShowSignupComponent={setShowSignupComponent} setHomeDropdownOpen={setHomeDropdownOpen}
           />
            </>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "10px",
                }}
              >
                <div className="h-logo-1" onClick={() => navigate("/")}>
                  <img src={logo} alt="Logo" />
                </div>
                <div className="h-second-nav">
                  <div>
                    <img src={search} alt="Search" />
                  </div>
                  <div onClick={() => navigate("/addproperty")}>
                    <img src={h1} alt="H1" />
                  </div>
                  <div>
                    <img src={partner} alt="Partner" />
                  </div>
                  <div onClick={() => handleAccountOption()}>
                    <img src={account} alt="Account" />
                  </div>
                </div>
              </div>

              {showOptionsInNavbar && (
                <div className="nav-option-1">
                  <div className="nav-option-11">
                    <p className="font-incre">City</p>
                    <RiArrowDropDownLine
                      style={{
                        transform: isCityRotate
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                        transition: isCityRotate
                          ? "transform 0.5s ease"
                          : "transform 0.5s ease",
                        fontSize: "35px",
                        fontWeight: "600",
                        cursor: "pointer",
                      }}
                      onClick={handleCityDropdown}
                    />
                  </div>
                  <div className="nav-option-12">
                    <p className="font-incre">Own/Rent</p>
                    <RiArrowDropDownLine
                      style={{
                        transform: isOwnRotate
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                        transition: isOwnRotate
                          ? "transform 0.5s ease"
                          : "transform 0.5s ease",
                        fontSize: "35px",
                        fontWeight: "600",
                        cursor: "pointer",
                      }}
                      onClick={handleOwnDropdown}
                    />
                  </div>
                  <div className="nav-option-13">
                    <p className="font-incre">Purpose</p>
                    <RiArrowDropDownLine
                      style={{
                        transform: isPurRotate
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                        transition: isPurRotate
                          ? "transform 0.5s ease"
                          : "transform 0.5s ease",
                        fontSize: "35px",
                        fontWeight: "600",
                        cursor: "pointer",
                      }}
                      onClick={handlePurposeDropdown}
                    />
                  </div>
                </div>
              )}
            </>
          )}

          {showCityDropdown && showOptionsInNavbar && (
            <div className="city-dropdown-12">
              <div>
                {[
                  "Mumbai",
                  "Delhi",
                  "Kolkata",
                  "Bengaluru",
                  "Chennai",
                  "Hyderabad",
                ].map((city) => (
                  <p
                    key={city}
                    onClick={() => {
                      setSelectedCity(city);
                      setShowCityDropdown(false);
                      setIsCityRotate(false);
                    }}
                  >
                    {city}
                  </p>
                ))}
              </div>
            </div>
          )}
          {showOwnDropdown && showOptionsInNavbar && (
            <div className="own-dropdown-12">
              <div>
                {["Own", "Rent"].map((option) => (
                  <p
                    key={option}
                    onClick={() => {
                      setSelectedOwnRent(option);
                      setShowOwnDropdown(false);
                      setIsOwnRotate(false);
                    }}
                  >
                    {option}
                  </p>
                ))}
              </div>
            </div>
          )}
          {showPurposeDropdown && showOptionsInNavbar && (
            <div className="purpose-dropdown-12">
              <div>
                <p
                  onClick={() => {
                    setSelectedPurpose("Residential");
                    setShowPurposeDropdown(false);
                    setIsPurRotate(false);
                    navigate("/homedesign");
                  }}
                >
                  Residential
                </p>
                <p
                  onClick={() => {
                    setSelectedPurpose("Commercial");
                    setShowPurposeDropdown(false);
                    setIsPurRotate(false);
                    navigate("/homedesignfirst");
                  }}
                >
                  Commercial
                </p>
                <p
                  onClick={() => {
                    setSelectedPurpose("Plot");
                    setShowPurposeDropdown(false);
                    setIsPurRotate(false);
                    navigate("/homedesignsecond");
                  }}
                >
                  Plot
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      {showOptionsInNavbar && (
        <div style={{ display: "flex", width: "85%", margin: "auto" }}>
          <div>
            <div>
              <img src={filt} />
            </div>
            <p>Filter</p>
          </div>
          <div
            className="divide-line-11"
            style={{ marginRight: "15px", marginLeft: "15px" }}
          ></div>
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
          <div className="divide-line-11" style={{ marginLeft: "15px" }}></div>
        </div>
      )}

      {/* ======================================= Login section ======================================= */}
      {showLogin && (
        <Login setAccount={setAccount} setShowSignupComponent={setShowSignupComponent} setShowLogin={setShowLogin}/>
      )}

      {/* ======================================= Register section ======================================= */}
      {showSignupComponent && (
         <Register setShowSignupComponent={setShowSignupComponent} setShowLogin={setShowLogin}/>
      )}

      {/* ======================================= Home page banner section ======================================= */}
      <div
        style={{
          width: "100%",
          height: "auto",
          opacity: opacity,
          transition: "opacity 0.2s ease-out",
        }}
      >
        <div className="h-main-content">
          <p
            style={{
              fontSize: "40px",
              textAlign: "center",
              fontWeight: "600",
              marginTop: "105px",
              marginBottom: "30px",
            }}
          >
            {showText} in<span style={{ color: "var(--primary)" }}>India</span>
          </p>
          <div
            className="h-main-img"
            style={{
              opacity: opacity,
              height: `${imageHeight}px`,
              transition: "opacity 0.3s, height 0.3s",
            }}
          >
            <img src={header} alt="Header" />
          </div>
        </div>
        <div className="hfirst-option">
          <div className="nav-option-15">
            {!isCityRotateHeader ? (
              <div
                className="nav-options-child-div"
                style={{ cursor: "pointer" }}
                onClick={handleCityDropdownHeader}
              >
                <p
                  style={{
                    fontSize: isMobile ? "16px" : "18px",
                    fontWeight: "600",
                  }}
                >
                  {selectedCityBanner ? (
                    <span
                      style={{ color: "var(--primary)", fontWeight: "bold" }}
                    >
                      {selectedCityBanner}
                    </span>
                  ) : (
                    <>
                      Which <span className="text-color-1">City</span> do you
                      want to be in?
                    </>
                  )}
                </p>
                <RiArrowDropDownLine
                  style={{
                    transform: isCityRotateHeader
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "transform 0.5s ease",
                    fontSize: "35px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                />
              </div>
            ) : (
              <div className="nav-options-child-div">
                <input
                  className="city-input-1"
                  placeholder=" Which City do you want to be in?"
                />
                <RiArrowDropDownLine
                  style={{
                    transform: isCityRotateHeader
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "transform 0.5s ease",
                    fontSize: "35px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                  onClick={handleCityDropdownHeader}
                />
              </div>
            )}

            {showCityDropdownHeader && (
              <div className="city-dropdown-13">
                <div>
                  {[
                    "Mumbai",
                    "Delhi",
                    "Kolkata",
                    "Bengaluru",
                    "Chennai",
                    "Hyderabad",
                  ].map((city) => (
                    <p key={city} onClick={() => handleCitySelection(city)}>
                      {city}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="vertical-line"></div>
          <div className="nav-option-16">
            <div
              className="nav-options-child-div"
              style={{ cursor: "pointer" }}
              onClick={handleOwnDropdownHeader}
            >
              <p style={{ fontSize: "18px", fontWeight: "600" }}>
                {selectedOwnOrRent ? (
                  <span style={{ color: "var(--primary)", fontWeight: "bold" }}>
                    {selectedOwnOrRent}
                  </span>
                ) : (
                  <>
                    Do you want to <span className="text-color-1">Own</span> or{" "}
                    <span className="text-color-1">Rent</span>?
                  </>
                )}
              </p>
              <RiArrowDropDownLine
                style={{
                  transform: isOwnRotateHeader
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.5s ease",
                  fontSize: "35px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              />
            </div>
            {showOwnDropdownHeader && (
              <div className="own-dropdown-13">
                <div>
                  <p onClick={() => handleOwnOrRentSelection("Own")}>Own</p>
                  <p onClick={() => handleOwnOrRentSelection("Rent")}>Rent</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div style={{ position: "absolute", width: "100%" }}>
          <div className="select-search-div-1" style={{ cursor: "pointer" }}>
            <div
              style={{ display: "flex", alignItems: "center" }}
              onClick={handlePurposeDropdownHeader}
            >
              <p style={{ fontSize: "18px", fontWeight: "600" }}>
                {selectedPurposeBanner ? (
                  <span style={{ color: "var(--primary)", fontWeight: "bold" }}>
                    {selectedPurposeBanner}
                  </span>
                ) : (
                  <>
                    What is the <span className="text-color-1">Purpose</span>?
                  </>
                )}
              </p>
              <RiArrowDropDownLine
                style={{
                  transform: isPurRotateHeader
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.5s ease",
                  fontSize: "35px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              />
            </div>
            <div className="searchIconInPurpose">
              <BiSearchAlt size={30} color="#fff" />
            </div>
          </div>

          {showPurposeDropdownHeader && (
            <div className="purpose-dropdown-13" style={{ width: "300px" }}>
              <div>
                <p
                  onClick={() =>
                    handlePurposeSelection("Residential", "/homedesign")
                  }
                >
                  Residential
                </p>
                <p
                  onClick={() =>
                    handlePurposeSelection("Commercial", "/homedesignfirst")
                  }
                >
                  Commercial
                </p>
                <p
                  onClick={() =>
                    handlePurposeSelection("Plot", "/homedesignsecond")
                  }
                >
                  Plot
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* ======================================= Home page sticky filter section ======================================= */}
      {showOptionsInNavbar && (
        <div className="home-container">
          <FilterMinMax toggleFilterModal={toggleFilterModal}/>
          <div className="product-append-111" style={{ marginTop: "30px" }}>
            {products.map((product) => (
              <ApartmentCard product={product} />
            ))}
          </div>
          <div className="show-bottom-button">
            <button>Show more</button>
          </div>
          <Footer1 />
        </div>
      )}
        {isFilterModalOpen && (
        <div className="modal-overlay" onClick={toggleFilterModal}>
          <div
            className="modal-container"
            style={{ padding: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <FilterModal />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
