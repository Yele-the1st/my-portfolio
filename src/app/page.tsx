"use client";

import AboutLetsgo from "@/sections/AboutLetsgo";
import AboutMe from "@/sections/AboutMe";
import Contact from "@/sections/Contact";
import EducationTimeline from "@/sections/Education";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Projects from "@/sections/Projects";
import Resume from "@/sections/Resume";
import Skills from "@/sections/Skills";
import WorkExperienceTimeline from "@/sections/WorkExperience";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid gap-24">
      <Header />
      <div className="w-5/6 mx-auto md:container grid gap-24 ">
        <AboutMe />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <WorkExperienceTimeline />
          <EducationTimeline />
        </div>
        <Skills />
        <Projects />
        <Resume />
        <Contact />
        <AboutLetsgo />
        <Footer />
      </div>
    </div>
  );
}
