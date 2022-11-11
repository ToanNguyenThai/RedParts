import React, { useState } from "react";
const toolbarItem = [
  {
    id: 1,
    label: "All",
  },
  {
    id: 2,
    label: "Power Tools",
  },
  {
    id: 3,
    label: "Hand Tools",
  },
  {
    id: 4,
    label: "Plumbing",
  },
];
export default function Toolbar() {
  const [isSelected, setIsSelected] = useState("All");
  return (
    <div className="section-header">
      <div className="section-header__body">
        <h2 className="section-header__title">Featured Products</h2>
        <div className="section-header__spring" />
        <ul className="section-header__groups">
          {toolbarItem.map((item) => (
            <li className="section-header__groups-item">
              <button
                onClick={() => setIsSelected(item.label)}
                type="button"
                className={`section-header__groups-button ${
                  item.label === isSelected &&
                  "section-header__groups-button--active"
                } `}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="section-header__arrows">
          <div className="arrow section-header__arrow section-header__arrow--prev arrow--prev">
            <button className="arrow__button" type="button">
              <svg width={7} height={11}>
                <path d="M6.7,0.3L6.7,0.3c-0.4-0.4-0.9-0.4-1.3,0L0,5.5l5.4,5.2c0.4,0.4,0.9,0.3,1.3,0l0,0c0.4-0.4,0.4-1,0-1.3l-4-3.9l4-3.9C7.1,1.2,7.1,0.6,6.7,0.3z" />
              </svg>
            </button>
          </div>
          <div className="arrow section-header__arrow section-header__arrow--next arrow--next">
            <button className="arrow__button" type="button">
              <svg width={7} height={11}>
                <path
                  d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9
	C-0.1,9.8-0.1,10.4,0.3,10.7z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="section-header__divider" />
      </div>
    </div>
  );
}
