import type { Project } from "@/types/Sections";

const projectsList: Project[] = [
  {
    id: 1,
    image: "/images/projects/Letsgo.png",
    name: "Letsgo",
    summary:
      "Streamlines event ticketing and vendor collaboration with tools for simplifying event management.",
    tags: [
      "Saas",
      "payment",
      "fullstack",
      "react",
      "express",
      "tailwindcss",
      "Nodejs",
    ],
    link: {
      web: "https://letsgo-events.vercel.app",
      github: "",
    },
  },
  {
    id: 2,
    image: "/images/projects/Lincher.png",
    name: "Vesil",
    summary:
      "An eLearning platform where experts create structured learning roadmaps using YouTube videos.",
    tags: ["opensource", "react", "dayjs", "tailwindcss"],
    link: {
      web: "https://www.vesil.xyz/",
      github: "https://github.com/Yele-the1st/lincher_v2",
    },
  },
  {
    id: 3,
    image: "/images/projects/nextjs-starter.png",
    name: "Nextjs Starter",
    summary:
      "A boilerplate for Next.js projects, providing essential tools to build modern, performant web applications.",
    tags: ["opensource", "react", "dayjs", "tailwindcss"],
    link: {
      web: "https://nextjs-starter-kit-omega.vercel.app/",
    },
  },
  {
    id: 4,
    image: "/images/projects/superauth.png",
    name: "Super Auth",
    summary:
      "An Authjs template that includes complete authentication flow, user authorization, credentials and OAuth login, and protected routes.",
    tags: ["opensource", "appdev", "flutter", "firebase", "android"],
    link: {
      web: "https://super-auth-iota.vercel.app",
      github: "https://github.com/Yele-the1st/super_auth",
    },
  },
  {
    id: 5,
    image: "/images/projects/superfilter.png",
    name: "Super Filter",
    summary:
      "Super Filter is part of a template set for advanced filtering and sorting of products.",
    tags: ["opensource", "webdev", "gamedev", "react", "tailwindcss"],
    link: {
      web: "https://super-filter.vercel.app",
      github: "https://github.com/Yele-the1st/super-filter",
    },
  },
  {
    id: 6,
    image: "/images/projects/supersearch.png",
    name: "Super Search",
    summary:
      "Super Search uses semantic search with a vector database and an LLM model for embedding, rather than lexical search.",
    tags: ["opensource", "fintech", "scraping", "python", "angular"],
    link: {
      web: "https://super-search-one.vercel.app",
      github:
        "https://github.com/AmruthPillai/MutualFund-Investment-Calculator",
    },
  },
  {
    id: 7,
    image: "/images/projects/dona8.png",
    name: "Afri-Charity",
    summary:
      "Afri-Charity serves as a hub for unity and action, bringing together individuals, nonprofits, and charities to create positive change.",
    tags: ["webdev", "php", "mysql", "seo"],
    link: {
      web: "https://dona8v2.vercel.app",
      github: "https://github.com/Yele-the1st/dona8v2",
    },
  },
];

export default projectsList;
