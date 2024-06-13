import Tippy from "@tippyjs/react";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";
import { Section } from "@/types/Sections";
import { getSectionHeading } from "@/utils";

const DISPLAY_COUNT = 3;

type WorkExperience = {
  id: number;
  logo: string;
  name: string;
  period: { start: string; end: string };
  position: string;
  location: string;
  summary: string;
  keyFocus: string[];
};

const workExperiences: WorkExperience[] = [
  {
    id: 1,
    logo: "/images/work-experience/Tramango-White.png",
    name: "Tramango.com",
    period: { start: "Jul 23", end: "Present" },
    position: "Lead Frontend Developer",
    location: "Lagos, Nigeria",
    summary:
      "As the Frontend Lead at Tramango, a travel tech company, I led the development from the initial stages to production. I built the UI components from scratch and implemented key features. The company successfully raised $5 million in marketing funds.",
    keyFocus: [
      "React",
      "Tailwind CSS",
      "GraphQL (Hasura)",
      "Building Reusable Design Components",
    ],
  },
  {
    id: 2,
    logo: "/images/work-experience/ourpass.png",
    name: "Ourpass",
    period: { start: "Mar 21", end: "Jun 23" },
    position: "Software Engineer",
    location: "Lagos, Nigeria",
    summary:
      "As a software engineer at Ourpass, a financial tech company, I developed and maintained secure, scalable financial solutions, optimized backend services, and collaborated with cross-functional teams to enhance user experience and system performance.The company successfully raised $1 million in pre-seed funds.",
    keyFocus: [
      "SQL",
      "AWS",
      "GCP",
      "Data Modelling",
      "NodeJs",
      "Microservices",
    ],
  },
  {
    id: 3,
    logo: "/images/work-experience/shell2.svg",
    name: "Shell Nigeria Exploration and Production Company ",
    period: { start: "Apr 21", end: "Jan 22" },
    position: "Frontend Developer",
    location: "Berlin, Germany",
    summary:
      "As part of the Dashboard Squad, I was tasked to build user engagement features, tackle user support issues and incidents faced across the e-commerce platform, and design/build pages that were used for marketing new and exciting product launches.",
    keyFocus: [
      "React/React Native",
      "NestJS",
      "GSAP Animation Library",
      "Agile Sprint Planning",
      "Incident Management",
    ],
  },
];

type Props = {
  data: WorkExperience;
  isFirst: boolean;
  isLast: boolean;
};

const WorkExperience: React.FC<Props> = ({ data, isFirst, isLast }) => (
  <div className="flex group">
    <div
      className={clsx("ml-1 w-1 flex-shrink-0 bg-neutral-500/25", {
        "rounded-t": isFirst,
        "rounded-b": isLast,
      })}
    />

    <div className="-ml-2 mt-8 flex-shrink-0 relative w-3 h-3 rounded-full shadow-lg bg-teal-500/80 dark:bg-white/80 group-hover:w-6 transition-[width]" />

    <div className="mt-5 ml-8 grid gap-2 pb-2">
      <div className="relative w-[100px] h-10">
        <Image
          src={data.logo}
          alt={data.name}
          fill
          className="object-contain"
        />
      </div>

      <div>
        <h3>
          <span className="text-base font-bold">{data.name}</span>{" "}
          <span className="text-xs">
            ({data.period.start} - {data.period.end})
          </span>
        </h3>
        <h4>{data.position}</h4>
      </div>

      <h5 className="my-1 flex gap-2 items-center text-xs">
        <FaLocationArrow />
        <span>{data.location}</span>
      </h5>

      <p className="prose prose-sm prose-neutral dark:prose-invert">
        {data.summary}
      </p>

      <p className="text-xs leading-relaxed prose-sm prose-neutral dark:prose-invert">
        <strong>Key Focus:</strong> {data.keyFocus.join(", ")}
      </p>
    </div>
  </div>
);

const WorkExperienceTimeline = () => {
  const [showMore, setShowMore] = useState(
    workExperiences.length > DISPLAY_COUNT ? false : true
  );

  return (
    <div id={Section.WorkExperience}>
      {getSectionHeading(Section.WorkExperience)}

      <div className="flex flex-col">
        {workExperiences
          .filter((_, index) => (showMore ? true : index < DISPLAY_COUNT))
          .map((data, index) => (
            <WorkExperience
              key={data.id}
              data={data}
              isFirst={index === 0}
              isLast={index === 2}
            />
          ))}
      </div>

      {!showMore && (
        <Tippy
          content={`Show ${workExperiences.length - DISPLAY_COUNT} More`}
          placement="right"
        >
          <div
            className="inline-block ml-8 p-2 cursor-pointer"
            onClick={() => setShowMore(true)}
          >
            <MdMoreHoriz size="24" />
          </div>
        </Tippy>
      )}
    </div>
  );
};

export default WorkExperienceTimeline;
