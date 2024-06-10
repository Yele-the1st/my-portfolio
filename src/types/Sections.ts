import type { IconType } from "react-icons";

export enum Section {
  "AboutMe" = "about-me",
  "Achievements" = "achievements",
  "Blog" = "blog",
  "Certifications" = "certifications",
  "Education" = "education",
  "Languages" = "languages",
  "Philantrophy" = "philantrophy",
  "Projects" = "projects",
  "Skills" = "skills",
  "WorkExperience" = "work-experience",
  "Photography" = "photography",
  "Music" = "music",
  "Designs" = "designs",
  "Resume" = "resume",
  "Contact" = "contact",
  "AboutLetsgo" = "aboutletsgo",
}

export type SectionMap = Record<Section, { icon: IconType; title: string }>;

export type SectionArray = {
  id: Section;
  title: string;
  icon: IconType;
}[];

export type Article = {
  id: number;
  title: string;
  description: string;
  url: string;
  public_reactions_count: number;
  social_image: string;
  published_at: string;
  tag_list: string[];
};

export type Language = {
  id: number;
  text: string;
  language: string;
  translation?: string;
};

export type Project = {
  id: number;
  image: string;
  name: string;
  summary: string;
  tags: string[];
  link?: {
    web?: string;
    github?: string;
  };
};

export type Achievement = {
  id: number;
  title: string;
  subtitle: string;
};

export type Certification = {
  id: number;
  title: string;
  subtitle: string;
};

export type Philantrophy = {
  id: number;
  title: string;
  description: string;
};

export type InstagramMedia = {
  id: string;
  media_url: string;
  permalink: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM" | "REELS";
};

export type DribbbleShot = {
  id: number;
  title: string;
  html_url: string;
  images: {
    hidpi: string;
  };
};

export const sampleArticles: Article[] = [
  {
    id: 1,
    title: "Understanding TypeScript: A Beginner's Guide",
    description:
      "An in-depth look at TypeScript, its benefits, and how to get started.",
    url: "https://example.com/typescript-guide",
    public_reactions_count: 150,
    social_image: "https://example.com/images/typescript-guide.jpg",
    published_at: "2023-06-01T10:00:00Z",
    tag_list: ["TypeScript", "JavaScript", "Programming"],
  },
  {
    id: 2,
    title: "10 Tips for Effective Remote Work",
    description:
      "Essential tips to improve productivity and maintain a work-life balance while working remotely.",
    url: "https://example.com/remote-work-tips",
    public_reactions_count: 200,
    social_image: "https://example.com/images/remote-work-tips.jpg",
    published_at: "2023-06-02T14:30:00Z",
    tag_list: ["Remote Work", "Productivity", "Work-Life Balance"],
  },
  {
    id: 3,
    title: "The Future of Artificial Intelligence",
    description:
      "Exploring the potential advancements and ethical considerations in AI technology.",
    url: "https://example.com/future-of-ai",
    public_reactions_count: 300,
    social_image: "https://example.com/images/future-of-ai.jpg",
    published_at: "2023-06-03T08:45:00Z",
    tag_list: ["AI", "Technology", "Ethics"],
  },
  {
    id: 4,
    title: "Mastering React Hooks",
    description:
      "A comprehensive guide to understanding and utilizing React Hooks in your projects.",
    url: "https://example.com/react-hooks",
    public_reactions_count: 250,
    social_image: "https://example.com/images/react-hooks.jpg",
    published_at: "2023-06-04T12:00:00Z",
    tag_list: ["React", "JavaScript", "Web Development"],
  },
  {
    id: 5,
    title: "Cybersecurity Best Practices",
    description:
      "Learn how to protect your data and stay safe online with these cybersecurity best practices.",
    url: "https://example.com/cybersecurity",
    public_reactions_count: 180,
    social_image: "https://example.com/images/cybersecurity.jpg",
    published_at: "2023-06-05T15:15:00Z",
    tag_list: ["Cybersecurity", "Online Safety", "Data Protection"],
  },
];

export const sampleDribbbleShots: DribbbleShot[] = [
  {
    id: 101,
    title: "Creative Mobile App Design",
    html_url: "https://dribbble.com/shots/1234567-Creative-Mobile-App-Design",
    images: {
      hidpi:
        "https://cdn.dribbble.com/users/1234/screenshots/1234567/creative-mobile-app-design.png",
    },
  },
  {
    id: 102,
    title: "Modern Web Dashboard",
    html_url: "https://dribbble.com/shots/2345678-Modern-Web-Dashboard",
    images: {
      hidpi:
        "https://cdn.dribbble.com/users/2345/screenshots/2345678/modern-web-dashboard.png",
    },
  },
];
