import {useTheme} from "next-themes";
import React from "react";

const TelegramIcon = () => {
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
        d="M17.2433 3.80471L3.15986 9.23552C2.19873 9.62157 2.20429 10.1577 2.98352 10.3968L6.5993 11.5248L14.9651 6.24647C15.3607 6.00579 15.7221 6.13527 15.4251 6.39898L8.64707 12.5161H8.64548L8.64707 12.5169L8.39765 16.2439C8.76304 16.2439 8.92429 16.0763 9.12922 15.8785L10.8855 14.1707L14.5386 16.869C15.2122 17.2399 15.6959 17.0493 15.8635 16.2455L18.2616 4.94378C18.507 3.95961 17.8859 3.51399 17.2433 3.80471Z"
        fill={theme === "dark" ? "white" : "#252939"}
      />
    </svg>
  );
};

export default TelegramIcon;
