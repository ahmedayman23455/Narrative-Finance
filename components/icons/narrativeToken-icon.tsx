import React from "react";
import {useTheme} from "next-themes";

const NarrativeTokenIcon = ({
  active,
}: {
  active: boolean;
}) => {
  const {theme} = useTheme();

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_78_1769"
        style={{maskType: "luminance"}}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="20"
      >
        <path d="M0 0H19.1829V20H0V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_78_1769)">
        <path
          d="M5.09917 18.6151V2.12866L4.73002 1.67957H1.65488V18.6151H5.09917ZM17.5186 18.6151V17.233L6.75718 4.14637V9.23492L14.4435 18.6151H17.5186ZM14.0743 1.67957V10.4335L17.5186 14.6239V1.67957H14.0743ZM12.4163 8.41265V0.00341797H19.1735V20.2912H13.6676L13.4205 19.9876L6.75718 11.8598V20.2912H0V0.00341797H5.49959L5.74986 0.307023L12.4163 8.41265Z"
          fill={
            theme === "dark" || active === true
              ? "white"
              : "black"
          }
        />
      </g>
    </svg>
  );
};

export default NarrativeTokenIcon;
