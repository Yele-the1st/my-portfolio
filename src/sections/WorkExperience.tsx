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
    position: "Senior Software Engineer",
    location: "Lagos, Nigeria",
    summary:
      "As one of the pioneering developers at Tramango, led the backend migration from PHP to Node.js, reducing system response time by 30% and improving scalability. Designed and implemented a microservices architecture to enhance flexibility and performance, while leading efforts to integrate complex APIs, including Amadeus and Allianz. Developed security features such as OAuth and Time-Based One-Time Passwords (TOTP) for Multi-Factor Authentication, creating a highly secure system for users. Spearheaded performance optimizations, reducing load times by 40% and enhancing user engagement by 30% through frontend improvements. Contributed significantly to Tramango securing $5M in funding by delivering high-impact, reliable software solutions that impressed investors. Played a key role in mentoring junior engineers and conducting thorough code reviews to ensure code quality.",
    keyFocus: [
      "React",
      "TypeScript",
      "Nodejs",
      "Express",
      "Microservices",
      "Amadeus API",
      "Allianz API",
      "Docker",
      "Mongoose",
      "Mongo DB",
      "SQL",
      "Docker",
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
    position: "Software engineer",
    location: "Lagos, Nigeria",
    summary:
      "Led the development of a high-traffic fintech platform that processed over $5M in monthly transactions, focusing on scalable backend architecture and API development. Built and optimized APIs for integrating third-party services such as payment gateways and CRMs, reducing synchronization issues by 30%. Managed a team of five engineers to increase delivery speed by 35% through the implementation of CI/CD pipelines, allowing for faster updates and more frequent feature releases. Developed secure payment systems adhering to PCI-DSS standards, reducing transaction errors by 25% and significantly improving customer experience. Played an instrumental role in demonstrating the scalability and robustness of the platform, helping the company secure $1M in pre-seed funding. Additionally, refactored codebases and optimized database queries, boosting transaction processing speeds by 40%.",
    keyFocus: [
      "React",
      "React Native",
      "AWS",
      "GCP",
      "Data Modelling",
      "NodeJs",
      "Microservices",
      "TypeScript",
    ],
  },
  {
    id: 3,
    logo: "/images/work-experience/buildingyou.webp",
    name: "Building you",
    period: { start: "May 19", end: "Jul 21" },
    position: "Fullstack Developer",
    location: "Lagos, Nigeria",
    summary:
      "Worked as a fullstack developer at a freelance agency, leading the development of both frontend and backend components for a variety of client projects across industries such as e-commerce, healthcare, and education. Managed full project lifecycles, from gathering client requirements to deployment and ongoing maintenance, delivering high-performance web applications within budget and on time. Played a pivotal role in optimizing legacy systems, improving performance by 20% and ensuring scalability for future growth. Integrated third-party APIs and services, such as payment gateways and CRMs, enhancing the functionality and usability of client applications. Contributed to reducing development time for subsequent projects by 15% through the creation of reusable components and modules. Provided ongoing technical support, resolving 95% of reported issues within 24 hours, ensuring smooth operation and high client satisfaction.",
    keyFocus: [
      "JavaScript",
      "React",
      "Redux",
      "Responsive Design",
      "Performance Optimization",
      "Git",
      "Github",
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
