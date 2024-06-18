"use client";
import Image from "next/image";
import Link from "next/link";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {File} from "lucide-react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import {Button} from "@/components/ui/button";
import CarouselCard from "@/components/site/carousel-card";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import FeaturedCard from "@/components/site/featured-card";

import {cn} from "@/lib/utils";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const {theme} = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return;

  return (
    <main>
      <Navbar />

      {/* hero section */}
      <div className="relative overflow-visible overflow-x-clip ">
        <div className=" max-w-[1164px] mx-auto px-4 mt-4 md:mt-10">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-4 justify-between bg-card shadow-2xl shadow-inner p-8 rounded-2xl">
            <div
              className="max-w-[500px] flex  gap-10 flex-col"
              data-aos="fade-right"
            >
              <h1
                className={cn(
                  "text-2xl  md:text-4xl font-bold   text-[#1D2939] dark:text-white"
                )}
              >
                Tokenizing The Most Bullish Narratives
              </h1>

              <p className="text-muted-foreground text-black dark:text-white">
                Decentralized Protocol For Narrative-Driven
                Index Funds. Never miss a rotation, Never
                miss a Pump.
              </p>

              <div className="flex items-center gap-4 ">
                <Button size="lg">Get started</Button>
                <Button
                  variant="link"
                  size="lg"
                  className="text-primary mx-0"
                  asChild
                >
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

          <Swiper
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
            ]}
            slidesPerGroup={1}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            }}
            pagination={{clickable: true}}
            scrollbar={{draggable: true}}
          >
            <SwiperSlide>
              <CarouselCard
                title="Solana Narrative"
                badge="$N-Sol"
                vectorColor="blue"
                price="$500"
                tvl="$760.000"
                images={[
                  "/assets/site/coins/coin1.png",
                  "/assets/site/coins/coin2.png",
                  "/assets/site/coins/coin3.png",
                  "/assets/site/coins/coin1.png",
                  "/assets/site/coins/coin2.png",
                  "/assets/site/coins/coin3.png",
                ]}
              />
            </SwiperSlide>

            <SwiperSlide>
              <CarouselCard
                title="AI Narrative"
                badge="$N-AI"
                vectorColor="red"
                price="$500"
                tvl="$760.000"
                images={[
                  "/assets/site/coins/coin4.png",
                  "/assets/site/coins/coin5.png",
                  "/assets/site/coins/coin6.png",
                ]}
              />
            </SwiperSlide>

            <SwiperSlide>
              <CarouselCard
                title="MEME Narrative"
                badge="$N-MEME"
                vectorColor="blue"
                price="$500"
                tvl="$760.000"
                images={[
                  "/assets/site/coins/coin7.png",
                  "/assets/site/coins/coin8.png",
                  "/assets/site/coins/coin9.png",
                ]}
              />
            </SwiperSlide>

            <SwiperSlide>
              <CarouselCard
                title="EVM Narrative"
                badge="$N-EVM"
                vectorColor="blue"
                price="$500"
                tvl="$760.000"
                images={[
                  "/assets/site/coins/coin10.png",
                  "/assets/site/coins/coin11.png",
                  "/assets/site/coins/coin12.png",
                ]}
              />
            </SwiperSlide>

            <SwiperSlide>
              <CarouselCard
                title="DeFi Narrative"
                badge="$N-Defi"
                vectorColor="red"
                price="$500"
                tvl="$760.000"
                images={[
                  "/assets/site/coins/coin13.png",
                  "/assets/site/coins/coin14.png",
                  "/assets/site/coins/coin15.png",
                ]}
              />
            </SwiperSlide>

            <SwiperSlide>
              <CarouselCard
                title="DePin Narrative"
                badge="$N-DePin"
                vectorColor="blue"
                price="$500"
                tvl="$760.000"
                images={[
                  "/assets/site/coins/coin16.png",
                  "/assets/site/coins/coin17.png",
                  "/assets/site/coins/coin18.png",
                ]}
              />
            </SwiperSlide>

            <SwiperSlide>
              <CarouselCard
                title="GameFi Narrative"
                badge="$N-GameFi"
                vectorColor="blue"
                price="$500"
                tvl="$760.000"
                images={[
                  "/assets/site/coins/coin19.png",
                  "/assets/site/coins/coin20.png",
                  "/assets/site/coins/coin21.png",
                ]}
              />
            </SwiperSlide>

            <SwiperSlide>
              <CarouselCard
                title="RWA Narrative"
                badge="$N-RWA"
                vectorColor="red"
                price="$500"
                tvl="$760.000"
                images={[
                  "/assets/site/coins/coin22.png",
                  "/assets/site/coins/coin23.png",
                  "/assets/site/coins/coin24.png",
                ]}
              />
            </SwiperSlide>

            <SwiperSlide>
              <CarouselCard
                title="BRC20 Narrative"
                badge="$N-BRC20"
                vectorColor="blue"
                price="$500"
                tvl="$760.000"
                images={[
                  "/assets/site/coins/coin25.png",
                  "/assets/site/coins/coin26.png",
                  "/assets/site/coins/coin27.png",
                ]}
              />
            </SwiperSlide>
          </Swiper>
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
              <Image
                src={`/assets/site/companies/${
                  theme === "dark" ? "dark" : "light"
                }/company1.png`}
                width={100}
                height={100}
                alt="company logo"
                data-aos="zoom"
              />
              <Image
                src={`/assets/site/companies/${
                  theme === "dark" ? "dark" : "light"
                }/company2.png`}
                width={100}
                height={100}
                alt="company logo"
                data-aos="zoom"
              />

              <Image
                src={`/assets/site/companies/${
                  theme === "dark" ? "dark" : "light"
                }/company3.png`}
                width={100}
                height={100}
                alt="company logo"
                data-aos="zoom"
              />

              <Image
                src={`/assets/site/companies/${
                  theme === "dark" ? "dark" : "light"
                }/company4.png`}
                width={100}
                height={100}
                alt="company logo"
                data-aos="zoom"
              />

              <Image
                src={`/assets/site/companies/${
                  theme === "dark" ? "dark" : "light"
                }/company5.png`}
                width={100}
                height={100}
                alt="company logo"
                data-aos="zoom"
              />
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
            <div
              className="flex flex-col gap-8 max-w-[500px] "
              data-aos="fade-right"
            >
              <h3 className="text-2xl  md:text-4xl font-bold">
                Earn Up to 25% APY Staking Narratives $N
              </h3>
              <p>
                Participate in the network and earn rewards
                by leveraging our built-in staking
                mechanism. Narratives Protocol encourages
                users to stake their assets.
              </p>

              <div className="flex items-center gap-2">
                <Button
                  size="lg"
                  className="bg-white  text-primary hover:bg-white hover:opacity-80"
                >
                  Buy $N
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

            <div
              className="flex items-center justify-center w-full"
              data-aos="fade-left"
            >
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
            Welcome to Narratives Protocol, a cutting-edge
            cryptocurrency protocol platform designed to
            revolutionize the way we interact with digital
            assets. Here&apos;s why Narratives Protocol
            stands out:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeaturedCard
              title="Diversify With Ease"
              description="Narratives allows users to gain exposure into a whole sector with just one token. For example, instead of buying 8-10 “AI” tokens we enable users to track the whole sector with just one “AI Narrative” token."
              icon="/assets/site/icons/box-remove.png"
              vectorColor="blue"
            />

            <FeaturedCard
              title="Reduce Risk"
              description="Often times tokens are spread out between multiple chains, exchanges and wallets. With Narratives we reduce complexity by bringing all assets into one place without the need of bridging, swapping and multiple exchanges."
              icon="/assets/site/icons/security-safe.png"
              vectorColor="red"
            />

            <FeaturedCard
              title="Exposure to Upside"
              description="Never Miss a Pump, Never miss a rotation. Narrative Tokens give you the ability to always have exposure to multiple tokens in a sector so you never have to choose between tokens and miss out on gains."
              icon="/assets/site/icons/chart.png"
              vectorColor="blue"
            />

            <FeaturedCard
              title="Governance Token"
              description="Narratives Holders will be able to vote on key decisions such as asset allocation and new asset onboarding. Narratives is a decentralized Index fund with rewards to all holders."
              icon="/assets/site/icons/trade.png"
              vectorColor="blue"
            />

            <FeaturedCard
              title="Built-in Staking"
              description="Participate in the network and earn rewards by leveraging our built-in staking Protocol. $N stakers will get protocol fees distributed directly into their wallet. "
              icon="/assets/site/icons/archive.png"
              vectorColor="red"
            />

            <FeaturedCard
              title="Low Fees"
              description="Narratives Protocol is launching on the Base blockchain which offers extremely low fees compared to Mainnet."
              icon="/assets/site/icons/money-recive.png"
              vectorColor="blue"
            />
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
