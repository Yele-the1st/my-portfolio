import Tippy from "@tippyjs/react";
import { useTheme } from "next-themes";
import { sectionsArray } from "@/data/sections";
import useWindowDimensions, { Breakpoints } from "@/hooks/useWindowDimensions";
import Image from "next/image";
import { useContext, useMemo } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { animateScroll, scroller } from "react-scroll";
import { Section } from "@/types/Sections";
import { motion, Variants } from "framer-motion";

const Navigation = () => {
  const { width } = useWindowDimensions();
  const isDesktop = width > Breakpoints.lg;

  const { setTheme, theme } = useTheme();

  const variants: Variants = useMemo(() => {
    return {
      light: { x: 0 },
      dark: { x: 16 * -1 },
    };
  }, []);

  const toggleTheme = () => {
    const themes = ["dark", "light"];
    const currentIndex = themes.indexOf(theme as string);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];

    setTheme(nextTheme);
  };

  const goToSection = (section: Section) =>
    scroller.scrollTo(section, { duration: 500, smooth: true });

  if (!isDesktop) {
    return (
      <div className="fixed  inset-x-0 top-0 px-3 py-5 w-screen text-neutral-800 dark:text-neutral-200 flex items-center justify-between">
        <Tippy content={<small>Go to Top</small>} placement="right">
          <div
            onClick={animateScroll.scrollToTop}
            className=" ml-1 flex cursor-pointer grayscale hover:grayscale-0 transition-[filter]"
          >
            <Image src="/images/icon1.png" alt="yele" width={40} height={40} />
          </div>
        </Tippy>

        <Tippy content={<small>Toggle Theme</small>} placement="right">
          <div
            onClick={toggleTheme}
            className=" ml-1 w-4 cursor-pointer hover:text-teal-500 transition-colors overflow-hidden "
          >
            <motion.div animate={theme} variants={variants} className="flex">
              <FaSun size={16} className="shrink-0" />

              <FaMoon size={16} className="shrink-0" />
            </motion.div>
          </div>
        </Tippy>
      </div>
    );
  }

  return (
    <div className="fixed z-20 inset-y-0 w-16 py-5 h-screen text-neutral-800 dark:text-neutral-200 flex flex-col items-center justify-between">
      <Tippy content={<small>Go to Top</small>} placement="right">
        <div
          onClick={animateScroll.scrollToTop}
          className=" ml-2 flex cursor-pointer grayscale hover:grayscale-0 transition-[filter]"
        >
          <Image src="/images/icon1.png" alt="yele" width={50} height={50} />
        </div>
      </Tippy>

      <div className="flex-1 w-7 overflow-hidden flex justify-start items-center group">
        <div className="flex w-full transition-[margin] ml-2 group-hover:-ml-7">
          <FiMenu />
        </div>

        <div className="flex flex-col ml-2">
          {sectionsArray.map(({ id, icon: Icon, title }) => (
            <Tippy key={id} content={<small>{title}</small>} placement="right">
              <div
                className="cursor-pointer py-3"
                onClick={() => goToSection(id)}
              >
                <Icon />
              </div>
            </Tippy>
          ))}
        </div>
      </div>

      <Tippy content={<small>Toggle Theme</small>} placement="right">
        <div
          onClick={toggleTheme}
          className=" ml-1 w-4 cursor-pointer hover:text-teal-500 transition-colors overflow-hidden "
        >
          <motion.div animate={theme} variants={variants} className="flex">
            <FaSun size={16} className="shrink-0" />

            <FaMoon size={16} className="shrink-0" />
          </motion.div>
        </div>
      </Tippy>
    </div>
  );
};

export default Navigation;
