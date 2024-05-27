import React from "react";
import {Button} from "../ui/button";
import Image from "next/image";
import {
  Facebook,
  File,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import {useTheme} from "next-themes";
import Link from "next/link";

const Footer = () => {
  const {theme, setTheme} = useTheme();
  return (
    <div className="bg-primary">
      <div className="max-w-[1164px] mx-auto mt-12 px-4">
        <div
          className="relative px-4 md:px-16 bg-primary text-white rounded-3xl flex flex-col md:flex-row 
    items-start justify-between gap-8 md:gap-4 py-16 md:py-24 px-0 overflow-hidden"
        >
          <div className="flex flex-col gap-8 max-w-[300px] ">
            {/* <div className="relative h-25 w-25 md"> */}
              <Image
                src="/assets/footerLogo.png"
                alt="Logo"
                layout="responsive" 
                width={250}
                height={250}
                objectFit="contain"
              />
            {/* </div> */}
            <p>
              Infrastructure for creating, automating,
              managing and tracking on-chain funds.
            </p>
          </div>

          <div className="flex items-start gap-12 flex-col md:flex-row">
            <div className="flex flex-row md:flex-col gap-4">
              <Link href="#" className="hover:opacity-85">
                <Linkedin />
              </Link>

              <Link href="#" className="hover:opacity-85">
                <Twitter />
              </Link>

              <Link href="#" className="hover:opacity-85">
                <Instagram />
              </Link>

              <Link href="#" className="hover:opacity-85">
                <Youtube />
              </Link>

              <Link href="#" className="hover:opacity-85">
                <Facebook />
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <h6 className="text-xl font-semibold">
                Property
              </h6>

              <Link href="#" className="hover:opacity-85">
                Learning Modules
              </Link>
              <Link href="#" className="hover:opacity-85">
                Partnership
              </Link>
              <Link href="#" className="hover:opacity-85">
                Watch demo
              </Link>
              <Link href="#" className="hover:opacity-85">
                Event
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <h6 className="text-xl font-semibold">
                About
              </h6>

              <Link href="#" className="hover:opacity-85">
                Our company
              </Link>
              <Link href="#" className="hover:opacity-85">
                Career
              </Link>
              <Link href="#" className="hover:opacity-85">
                Investors Relations
              </Link>
              <Link href="#" className="hover:opacity-85">
                Social Impact
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <h6 className="text-xl font-semibold">
                Resources
              </h6>

              <Link href="#" className="hover:opacity-85">
                Contact
              </Link>
              <Link href="#" className="hover:opacity-85">
                Give feedback
              </Link>
              <Link href="#" className="hover:opacity-85">
                System Status
              </Link>
              <Link href="#" className="hover:opacity-85">
                Social Impact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
