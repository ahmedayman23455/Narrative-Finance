import React from "react";
import FeaturedCard from "./featured-card";

const FeatureCards = () => {
  return (
    <>
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
    </>
  );
};

export default FeatureCards;
