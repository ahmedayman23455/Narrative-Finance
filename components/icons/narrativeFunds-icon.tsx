import React from "react";
import {useTheme} from "next-themes";

const NarrativeFundsIcon = ({
  active,
}: {
  active: boolean;
}) => {
  const {theme} = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
    >
      <path
        d="M9.29539 3.25892L3.90539 7.45892C3.00539 8.15892 2.27539 9.64892 2.27539 10.7789V18.1889C2.27539 20.5089 4.16539 22.4089 6.48539 22.4089H18.0654C20.3854 22.4089 22.2754 20.5089 22.2754 18.1989V10.9189C22.2754 9.70892 21.4654 8.15892 20.4754 7.46892L14.2954 3.13892C12.8954 2.15892 10.6454 2.20892 9.29539 3.25892Z"
        stroke={
          theme === "dark" || active === true
            ? "white"
            : "#292D32"
        }
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.7754 11.9189L12.5754 16.1189L10.9754 13.7189L7.77539 16.9189"
        stroke={
          theme === "dark" || active === true
            ? "white"
            : "#292D32"
        }
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.7754 11.9189H16.7754V13.9189"
        stroke={
          theme === "dark" || active === true
            ? "white"
            : "#292D32"
        }
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default NarrativeFundsIcon;
