import React from "react";
import {useTheme} from "next-themes";

const StakingIcon = () => {
  const {theme} = useTheme();

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 2V7H8L12 11L16 7H13V2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H11ZM19 16H5V20H19V16ZM17 17V19H15V17H17Z"
        fill={theme === "dark" ? "white" : "#252939"}
      />
    </svg>
  );
};

export default StakingIcon;