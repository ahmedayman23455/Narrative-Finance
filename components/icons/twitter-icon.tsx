import {useTheme} from "next-themes";
import React from "react";

const TwitterIcon = () => {
  const {theme} = useTheme();

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.39648 14.3558L9.72749 11.0248M9.72749 11.0248L6.39648 6.4126H8.60295L11.0087 9.74365M9.72749 11.0248L12.1333 14.3558H14.3397L11.0087 9.74365M14.3397 6.4126L11.0087 9.74365"
        stroke={theme === "dark" ? "white" : "#252939"}
        stroke-width="1.19149"
        stroke-linecap="square"
      />
    </svg>
  );
};

export default TwitterIcon;
