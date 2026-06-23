import React from "react";
import Hero from "./home/components/hero";
import Pain from "./home/components/pain";
import Modules from "./home/components/modules";
import CommandCenter from "./home/components/command-center";
import Personas from "./home/components/personas";
import Stats from "./home/components/stats";
import Steps from "./home/components/steps";
import FAQ from "./home/components/faq";
import CTA from "./home/components/cta";

export default function HomePage() {
  return (
    <div className="relative">
      <Hero />
      <Pain />
      <Modules />
      <CommandCenter />
      <Personas />
      <Stats />
      <Steps />
      <FAQ />
      <CTA />
    </div>
  );
}
