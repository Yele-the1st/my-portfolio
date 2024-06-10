"use client";

import { useEffect, useState } from "react";
import AboutLetsgo from "@/sections/AboutLetsgo";
import AboutMe from "@/sections/AboutMe";
import Achievements from "@/sections/Achievements";
import Blog from "@/sections/Blog";
import Certifications from "@/sections/Certifications";
import Contact from "@/sections/Contact";
import Designs from "@/sections/Designs";
import EducationTimeline from "@/sections/Education";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Languages from "@/sections/Languages";
import Music from "@/sections/Music";
import Philantrophy from "@/sections/Philantrophy";
import Projects from "@/sections/Projects";
import Resume from "@/sections/Resume";
import Skills from "@/sections/Skills";
import WorkExperienceTimeline from "@/sections/WorkExperience";
import { getArticles } from "@/services";
import { Article, sampleDribbbleShots } from "@/types/Sections";

const Home = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const fetchedArticles = await getArticles();
      setArticles(fetchedArticles);
    };

    fetchArticles();
  }, []);

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
        <Blog articles={articles} />
        <Languages />

        <div className="grid lg:grid-cols-3 gap-12">
          <Achievements />
          <Certifications />
          <Philantrophy />
        </div>

        <Music />
        <Designs dribbbleShots={sampleDribbbleShots} />

        <Resume />
        <Contact />
        <AboutLetsgo />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
