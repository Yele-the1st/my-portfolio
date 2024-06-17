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
    period: { start: "Jun 23", end: "Present" },
    position: "Lead Frontend Developer",
    location: "Lagos, Nigeria",
    summary:
      "As the Frontend Lead at Tramango, a travel tech company, I led the development from the initial stages to production. I built the UI components from scratch and implemented key features. The company successfully raised $5 million in marketing funds.",
    keyFocus: [
      "React",
      "Nextjs",
      "Agile Methodology",
      "Redux & RTK",
      "Jest",
      "Playwright",
      "Tailwind CSS",
      "SCSS",
      "Radix primitives",
    ],
  },
  {
    id: 2,
    logo: "/images/work-experience/ourpass.png",
    name: "Ourpass",
    period: { start: "Sep 21", end: "May 23" },
    position: "Senior Frontend engineer",
    location: "Lagos, Nigeria",
    summary:
      "As a Software Engineer at Ourpass, a leading fintech company, I played a crucial role in developing and maintaining secure, scalable financial solutions. I optimized the application to ensure peak performance and collaborated with cross-functional teams to enhance both user experience and system efficiency. My contributions were instrumental in the company's successful acquisition of $1 million in pre-seed funding.",
    keyFocus: [
      "React",
      "React Native",
      "AWS",
      "GCP",
      "Data Modelling",
      "NodeJs",
      "Microservices",
    ],
  },
  {
    id: 3,
    logo: "/images/work-experience/buildingyou.webp",
    name: "Building you",
    period: { start: "May 19", end: "Jul 21" },
    position: "Frontend Developer",
    location: "Lagos, Nigeria",
    summary:
      "At Building You, a software development agency focused on creating solutions for brands and businesses looking to scale and automate repetitive tasks, I worked as a Frontend Developer. I played a pivotal role in transforming creative ideas into robust, scalable, and user-centric digital experiences. My responsibilities included optimizing user interfaces, ensuring responsive design across devices, and enhancing overall performance. I collaborated closely with clients to deliver tailored solutions that met their unique needs, contributing to our reputation for excellence and innovation.",
    keyFocus: [
      "JavaScript",
      "React",
      "Redux",
      "Responsive Design",
      "Performance Optimization",
      "Client Collaboration",
    ],
  },
  {
    id: 4,
    logo: "/images/work-experience/shell2.svg",
    name: "Shell Nigeria Exploration and Production Company ",
    period: { start: "Apr 19", end: "Dec 19" },
    position: "Engineering Mananger (Internship)",
    location: "Lagos, Nigeria",
    summary: "",
    keyFocus: [
      "Leadership",
      "Corperate Management",
      "Agile Sprint Planning",
      "Incident Management",
      "Change Management",
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
