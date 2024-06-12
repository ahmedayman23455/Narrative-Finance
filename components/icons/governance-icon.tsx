import React from "react";
import {useTheme} from "next-themes";

const GovernanceIcon = ({active}: {active: boolean}) => {
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
        d="M2 19V8H1V6H4V4C4 3.44772 4.44772 3 5 3H19C19.5523 3 20 3.44772 20 4V6H23V8H22V19H23V21H1V19H2ZM13 19V12H11V19H13ZM8 19V12H6V19H8ZM18 19V12H16V19H18ZM6 5V6H18V5H6Z"
        fill={
          theme === "dark" || active === true
            ? "white"
            : "#252939"
        }
      />
    </svg>
  );
};

export default GovernanceIcon;
