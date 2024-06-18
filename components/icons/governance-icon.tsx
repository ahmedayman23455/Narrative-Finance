import React from "react";
import {useTheme} from "next-themes";

const GovernanceIcon = ({active}: {active: boolean}) => {
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
        d="M12.6454 2.56897L21.6454 6.16895C21.9954 6.30895 22.2754 6.72894 22.2754 7.09894V10.4189C22.2754 10.9689 21.8254 11.4189 21.2754 11.4189H3.27539C2.72539 11.4189 2.27539 10.9689 2.27539 10.4189V7.09894C2.27539 6.72894 2.5554 6.30895 2.9054 6.16895L11.9054 2.56897C12.1054 2.48897 12.4454 2.48897 12.6454 2.56897Z"
        stroke={
          theme === "dark" || active === true
            ? "white"
            : "#292D32"
        }
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22.2754 22.4189H2.27539V19.4189C2.27539 18.8689 2.72539 18.4189 3.27539 18.4189H21.2754C21.8254 18.4189 22.2754 18.8689 22.2754 19.4189V22.4189Z"
        stroke={
          theme === "dark" || active === true
            ? "white"
            : "#292D32"
        }
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.27539 18.4189V11.4189"
        stroke={
          theme === "dark" || active === true
            ? "white"
            : "#292D32"
        }
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.27539 18.4189V11.4189"
        stroke={
          theme === "dark" || active === true
            ? "white"
            : "#292D32"
        }
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.2754 18.4189V11.4189"
        stroke={
          theme === "dark" || active === true
            ? "white"
            : "#292D32"
        }
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.2754 18.4189V11.4189"
        stroke={
          theme === "dark" || active === true
            ? "white"
            : "#292D32"
        }
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.2754 18.4189V11.4189"
        stroke={
          theme === "dark" || active === true
            ? "white"
            : "#292D32"
        }
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.27539 22.4189H23.2754"
        stroke={
          theme === "dark" || active === true
            ? "white"
            : "#292D32"
        }
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.2754 8.91895C13.1038 8.91895 13.7754 8.24737 13.7754 7.41895C13.7754 6.59052 13.1038 5.91895 12.2754 5.91895C11.447 5.91895 10.7754 6.59052 10.7754 7.41895C10.7754 8.24737 11.447 8.91895 12.2754 8.91895Z"
        stroke={
          theme === "dark" || active === true
            ? "white"
            : "#292D32"
        }
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default GovernanceIcon;
