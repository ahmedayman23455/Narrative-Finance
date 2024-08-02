"use client";

import React, {useEffect, useState} from "react";

import {Navigation, Pagination, Scrollbar, A11y} from "swiper/modules";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import CarouselCard from "@/components/site/carousel-card";

const FeaturedNarratives = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return;
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
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
          link="/dashboard/narrativeFunds/1"
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
            "/assets/site/coins/coin4.png",
            "/assets/site/coins/coin5.png",
            "/assets/site/coins/coin6.png",
          ]}
          link="/dashboard/narrativeFunds/2"
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
            "/assets/site/coins/coin7.png",
            "/assets/site/coins/coin8.png",
            "/assets/site/coins/coin9.png",
          ]}
          link="/dashboard/narrativeFunds/3"
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
            "/assets/site/coins/coin10.png",
            "/assets/site/coins/coin11.png",
            "/assets/site/coins/coin12.png",
          ]}
          link="/dashboard/narrativeFunds/4"
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
            "/assets/site/coins/coin13.png",
            "/assets/site/coins/coin14.png",
            "/assets/site/coins/coin15.png",
          ]}
          link="/dashboard/narrativeFunds/5"
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
            "/assets/site/coins/coin16.png",
            "/assets/site/coins/coin17.png",
            "/assets/site/coins/coin18.png",
          ]}
          link="/dashboard/narrativeFunds/6"
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
            "/assets/site/coins/coin19.png",
            "/assets/site/coins/coin20.png",
            "/assets/site/coins/coin21.png",
          ]}
          link="/dashboard/narrativeFunds/7"
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
            "/assets/site/coins/coin22.png",
            "/assets/site/coins/coin23.png",
            "/assets/site/coins/coin24.png",
          ]}
          link="/dashboard/narrativeFunds/8"
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
            "/assets/site/coins/coin25.png",
            "/assets/site/coins/coin26.png",
            "/assets/site/coins/coin27.png",
          ]}
          link="/dashboard/narrativeFunds/9"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default FeaturedNarratives;
