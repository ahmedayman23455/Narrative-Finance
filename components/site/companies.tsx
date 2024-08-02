"use client";
import {useTheme} from "next-themes";
import Image from "next/image";
import React from "react";

const Companies = () => {
  const {theme} = useTheme();
  return (
    <>
      <Image
        src={`/assets/site/companies/${theme === "dark" ? "dark" : "light"}/company1.png`}
        width={100}
        height={100}
        alt="company logo"
        data-aos="zoom"
      />
      <Image
        src={`/assets/site/companies/${theme === "dark" ? "dark" : "light"}/company2.png`}
        width={100}
        height={100}
        alt="company logo"
        data-aos="zoom"
      />

      <Image
        src={`/assets/site/companies/${theme === "dark" ? "dark" : "light"}/company3.png`}
        width={100}
        height={100}
        alt="company logo"
        data-aos="zoom"
      />

      <Image
        src={`/assets/site/companies/${theme === "dark" ? "dark" : "light"}/company4.png`}
        width={100}
        height={100}
        alt="company logo"
        data-aos="zoom"
      />

      <Image
        src={`/assets/site/companies/${theme === "dark" ? "dark" : "light"}/company5.png`}
        width={100}
        height={100}
        alt="company logo"
        data-aos="zoom"
      />
    </>
  );
};

export default Companies;
