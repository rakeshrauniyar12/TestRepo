import React,{useState} from 'react'
import { MdCurrencyRupee } from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";
import FilterModal from './FilterModal';
import { useLocation } from 'react-router-dom';
import "../Style/FilterMinMax.css"
import { TbHomeFilled } from "react-icons/tb";

function FilterMinMax({toggleFilterModal}) {
  const location = useLocation();
  // const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const isMobile = window.innerWidth<=768;
  // const toggleFilterModal = () => {
  //   setIsFilterModalOpen(!isFilterModalOpen);
  // };
    const [active, setActive] = useState(null);
  
    const handleClick = (index) => {
      setActive(index);
    };
  return (
   
          <div
            style={{
              display: "flex",
              width: "100%",
              margin: "auto",
            }}
            className="sticky-filter-1"
          >
            <div onClick={toggleFilterModal} style={{cursor:"pointer"}}>
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
            <div
              className="vertical-line"
              style={{ marginRight: "15px", marginLeft: "15px" }}
            ></div>
            <div className="budget-div-1" style={{ width: "15%" }}>
              <div className="budget-rupee-icon">
                <MdCurrencyRupee size={24} style={{ marginRight: "10px" }} />
              </div>
              <div className="budget-div-2">
                <div className="div-min-max-1">
                  <input type="text" className="input-text" placeholder="Min" />
                  <p style={{ fontSize: "14px", margin: "0 10px" }}>To</p>
                  <input type="text" className="input-text" placeholder="Max" />
                </div>
                <div>
                  <p style={{ fontSize: "13px" }}>Budget</p>
                </div>
              </div>
            </div>
            <div
              className="divide-line-11"
              style={{ marginLeft: "15px" }}
            ></div>
           {
            location.pathname==="/homedesignfirst" && 
            <div id="detail-image-11" style={{borderLeft:"2px solid black",paddingLeft:"10px"}}>
              <div onClick={() => handleClick(0)}>
                <TbHomeFilled
                  size={16}
                  style={{
                    color: active === 0 ? "var(--primary)" : "black",
                  }}
                />
                <p
                  style={{
                    color: active === 0 ? "var(--primary)" : "black",
                    fontWeight: active === 0 ? "bold" : "",
                  }}
                >
                  1BHK
                </p>
              </div>
              <div onClick={() => handleClick(1)}>
                <TbHomeFilled
                  size={20}
                  style={{
                    color: active === 1 ? "var(--primary)" : "black",
                  }}
                />
                <p
                  style={{
                    color: active === 1 ? "var(--primary)" : "black",
                    fontWeight: active === 1 ? "bold" : "",
                  }}
                >
                  2BHK
                </p>
              </div>
              <div onClick={() => handleClick(2)}>
                <TbHomeFilled
                  size={24}
                  style={{
                    color: active === 2 ? "var(--primary)" : "black",
                  }}
                />
                <p
                  style={{
                    color: active === 2 ? "var(--primary)" : "black",
                    fontWeight: active === 2 ? "bold" : "",
                  }}
                >
                  3BHK
                </p>
              </div>
              <div onClick={() => handleClick(3)}>
                <TbHomeFilled
                  size={28}
                  style={{
                    color: active === 3 ? "var(--primary)" : "black",
                  }}
                />
                <p
                  style={{
                    color: active === 3 ? "var(--primary)" : "black",
                    fontWeight: active === 3 ? "bold" : "",
                  }}
                >
                  4BHK
                </p>
              </div>
              <div onClick={() => handleClick(4)}>
                <TbHomeFilled
                  size={32}
                  style={{
                    color: active === 4 ? "var(--primary)" : "black",
                  }}
                />
                <p
                  style={{
                    color: active === 4 ? "var(--primary)" : "black",
                    fontWeight: active === 4 ? "bold" : "",
                  }}
                >
                  5BHK
                </p>
              </div>
            </div>
           
           }
             {
            location.pathname==="/homedesignsecond" && 
            <div id="detail-image-11" style={{borderLeft:"2px solid black",paddingLeft:"10px"}}>
              <div onClick={() => handleClick(0)}>
                <TbHomeFilled
                  size={16}
                  style={{
                    color: active === 0 ? "var(--primary)" : "black",
                  }}
                />
                <p
                  style={{
                    color: active === 0 ? "var(--primary)" : "black",
                    fontWeight: active === 0 ? "bold" : "",
                  }}
                >
                  1BHK
                </p>
              </div>
              <div onClick={() => handleClick(1)}>
                <TbHomeFilled
                  size={20}
                  style={{
                    color: active === 1 ? "var(--primary)" : "black",
                  }}
                />
                <p
                  style={{
                    color: active === 1 ? "var(--primary)" : "black",
                    fontWeight: active === 1 ? "bold" : "",
                  }}
                >
                  2BHK
                </p>
              </div>
              <div onClick={() => handleClick(2)}>
                <TbHomeFilled
                  size={24}
                  style={{
                    color: active === 2 ? "var(--primary)" : "black",
                  }}
                />
                <p
                  style={{
                    color: active === 2 ? "var(--primary)" : "black",
                    fontWeight: active === 2 ? "bold" : "",
                  }}
                >
                  3BHK
                </p>
              </div>
              <div onClick={() => handleClick(3)}>
                <TbHomeFilled
                  size={28}
                  style={{
                    color: active === 3 ? "var(--primary)" : "black",
                  }}
                />
                <p
                  style={{
                    color: active === 3 ? "var(--primary)" : "black",
                    fontWeight: active === 3 ? "bold" : "",
                  }}
                >
                  4BHK
                </p>
              </div>
              <div onClick={() => handleClick(4)}>
                <TbHomeFilled
                  size={32}
                  style={{
                    color: active === 4 ? "var(--primary)" : "black",
                  }}
                />
                <p
                  style={{
                    color: active === 4 ? "var(--primary)" : "black",
                    fontWeight: active === 4 ? "bold" : "",
                  }}
                >
                  5BHK
                </p>
              </div>
            </div>
           
           }
             {
            location.pathname==="/homedesign" && 
            <div id="detail-image-11" style={{borderLeft:"2px solid black",paddingLeft:"10px"}}>
              <div onClick={() => handleClick(0)}>
                <TbHomeFilled
                  size={16}
                  style={{
                    color: active === 0 ? "var(--primary)" : "black",
                  }}
                />
                <p
                  style={{
                    color: active === 0 ? "var(--primary)" : "black",
                    fontWeight: active === 0 ? "bold" : "",
                  }}
                >
                  1BHK
                </p>
              </div>
              <div onClick={() => handleClick(1)}>
                <TbHomeFilled
                  size={20}
                  style={{
                    color: active === 1 ? "var(--primary)" : "black",
                  }}
                />
                <p
                  style={{
                    color: active === 1 ? "var(--primary)" : "black",
                    fontWeight: active === 1 ? "bold" : "",
                  }}
                >
                  2BHK
                </p>
              </div>
              <div onClick={() => handleClick(2)}>
                <TbHomeFilled
                  size={24}
                  style={{
                    color: active === 2 ? "var(--primary)" : "black",
                  }}
                />
                <p
                  style={{
                    color: active === 2 ? "var(--primary)" : "black",
                    fontWeight: active === 2 ? "bold" : "",
                  }}
                >
                  3BHK
                </p>
              </div>
              <div onClick={() => handleClick(3)}>
                <TbHomeFilled
                  size={28}
                  style={{
                    color: active === 3 ? "var(--primary)" : "black",
                  }}
                />
                <p
                  style={{
                    color: active === 3 ? "var(--primary)" : "black",
                    fontWeight: active === 3 ? "bold" : "",
                  }}
                >
                  4BHK
                </p>
              </div>
              <div onClick={() => handleClick(4)}>
                <TbHomeFilled
                  size={32}
                  style={{
                    color: active === 4 ? "var(--primary)" : "black",
                  }}
                />
                <p
                  style={{
                    color: active === 4 ? "var(--primary)" : "black",
                    fontWeight: active === 4 ? "bold" : "",
                  }}
                >
                  5BHK
                </p>
              </div>
            </div>
           
           }
          </div>
         
        
  )
}

export default FilterMinMax;