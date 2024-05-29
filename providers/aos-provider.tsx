"use client";
import AOS from "aos";

import "aos/dist/aos.css";
import {Fragment, useEffect} from "react";

const AOSProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => {
    setTimeout(() => {
      AOS.init({
        easing: "ease-out-quad",
        duration: 1000,
        once: false,
        offset: 10,
      });
    }, 500);
  }, []);

  return <Fragment>{children}</Fragment>;
};

export default AOSProvider;
