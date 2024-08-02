import Image from "next/image";
import Link from "next/link";
import {File} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import {Button} from "@/components/ui/button";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

import {cn} from "@/lib/utils";
import FeaturedNarratives from "@/components/site/featured-narratives";
import Companies from "@/components/site/companies";
import FeaturedCards from "@/components/site/featured-cards";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* hero section */}
      <div className="relative overflow-visible overflow-x-clip ">
        <div className=" max-w-[1164px] mx-auto px-4 mt-4 md:mt-10">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-4 justify-between bg-card shadow-2xl shadow-inner p-8 rounded-2xl">
            <div className="max-w-[500px] flex  gap-10 flex-col" data-aos="fade-right">
              <h1
                className={cn(
                  "text-2xl  md:text-4xl font-bold   text-[#1D2939] dark:text-white"
                )}
              >
                Tokenizing The Most Bullish Narratives
              </h1>

              <p className="text-muted-foreground text-black dark:text-white">
                Decentralized Protocol For Narrative-Driven Index Funds. Never miss a
                rotation, Never miss a Pump.
              </p>

              <div className="flex items-center gap-4 ">
                <Button size="lg" asChild>
                  <Link href="/dashboard/narrativeFunds">Get started</Link>
                </Button>
                <Button variant="link" size="lg" className="text-primary mx-0" asChild>
                  <Link
                    href="#"
                    className="!p-0 underline text-[#2466D7] dark:text-white"
                  >
                    Checkout Features
                  </Link>
                </Button>
              </div>
            </div>

            <div data-aos="fade-left">
              <Image
                src="/assets/site/heroImage.webp"
                height={420}
                width={420}
                alt="hero image"
              />
            </div>
          </div>
        </div>

        <Image
          className="absolute -top-1/4 right-0"
          src="/assets/site/blueShadow.webp"
          alt="squiggle"
          width={600}
          height={600}
        />

        <Image
          className="absolute left-0 -bottom-80 -z-10"
          src="/assets/site/redShadow.webp"
          alt="squiggle"
          width={600}
          height={600}
        />

        <Image
          className="absolute left-0 -bottom-1/4 -z-10"
          src="/assets/site/shape.webp"
          alt="squiggle"
          width={200}
          height={200}
        />
      </div>

      {/*  carousel section */}
      <div>
        <div className=" max-w-[1164px] mx-auto px-4 mt-4 md:mt-10">
          <h2 className="text-2xl md:text-3xl font-semibold my-8 text-[#484856] dark:text-white">
            Featured Narratives
          </h2>

          <FeaturedNarratives />
        </div>
      </div>

      {/*  companines section*/}
      <div className="relative overflow-visible overflow-x-clip">
        <div className=" max-w-[1164px] mx-auto  mt-12 md:mt-24 px-4 ">
          <Card className="companeis-section">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-semibold text-center text-[#484856] dark:text-white">
                Narratives Ecosystem
              </CardTitle>
            </CardHeader>

            <CardContent className="flex items-center  flex-wrap justify-center gap-4 md:gap-24">
              <Companies />
            </CardContent>
          </Card>
        </div>
        <Image
          className="absolute hidden md:block -top-[270px] -right-[120px]"
          src="/assets/site/blueShadow.webp"
          alt="squiggle"
          width={1000}
          height={1000}
        />
        <Image
          className="absolute hidden md:block -top-[370px] -left-[120px] rotate-180"
          src="/assets/site/blueShadow.webp"
          alt="squiggle"
          width={1000}
          height={1000}
        />
      </div>

      {/* Earnup to 25% APY */}
      <div className="relative overflow-visible overflow-x-clip ">
        <div className="max-w-[1164px] mx-auto mt-12 md:mt-24 px-4  ">
          <div
            className="relative p-8 md:p-16 bg-primary text-white rounded-3xl flex flex-col md:flex-row 
          items-center gap-8 md:gap-4 min-h-[400px] overflow-hidden border border-white border-4"
          >
            <div className="flex flex-col gap-8 max-w-[500px] " data-aos="fade-right">
              <h3 className="text-2xl  md:text-4xl font-bold">
                Earn Up to 25% APY Staking Narratives $N
              </h3>
              <p>
                Participate in the network and earn rewards by leveraging our built-in
                staking mechanism. Narratives Protocol encourages users to stake their
                assets.
              </p>

              <div className="flex items-center gap-2">
                <Button
                  size="lg"
                  className="bg-white  text-primary hover:bg-white hover:opacity-80"
                  asChild
                >
                  <Link href="/dashboard/narrativeToken">Buy $NF</Link>
                </Button>
                <Button
                  size="lg"
                  className="border border-white bg-transparent text-white flex items-center gap-2 hover:opacity-80"
                >
                  <File size={16} />
                  <span className="underline">Docs</span>
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center w-full" data-aos="fade-left">
              <div className="relative h-[200px] w-[200px] sm:w-[250px] sm:h-[250px] md:h-[300px] md:w-[300px]">
                <Image
                  src="/assets/site/bigCoin.png"
                  layout="fill"
                  objectFit="contain"
                  alt="vector"
                />
              </div>
            </div>

            <Image
              src="/assets/site/vectorWhite1.png"
              width={120}
              height={120}
              className="absolute top-0 left-0 hidden md:block"
              alt="vector"
            />

            <Image
              src="/assets/site/vectorWhite2.png"
              width={250}
              height={250}
              className="absolute bottom-0 right-0 hidden md:block"
              alt="vector"
            />
          </div>
        </div>

        <Image
          className="absolute left-0 -top-[95%] -z-10 hidden md:block"
          src="/assets/site/redShadow.webp"
          alt="squiggle"
          width={1200}
          height={1200}
        />
      </div>

      {/* Features Section */}
      <div className="relative overflow-visible overflow-x-clip mb-44">
        <div className=" max-w-[1164px] mx-auto px-4 mt-12 md:mt-24 flex flex-col gap-6 ">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#484856] dark:text-white">
            Why Narratives protocol ?
          </h2>

          <p className="text-[#292d32] dark:text-white">
            Welcome to Narratives Protocol, a cutting-edge cryptocurrency protocol
            platform designed to revolutionize the way we interact with digital assets.
            Here&apos;s why Narratives Protocol stands out:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeaturedCards />
          </div>
        </div>

        <Image
          className="absolute top-[180px] -right-[150px]"
          src="/assets/site/blueShadow.webp"
          alt="squiggle"
          width={1000}
          height={1000}
        />
      </div>

      <Footer />
    </main>
  );
}
