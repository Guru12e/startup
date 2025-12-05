import {
  Home,
  GraduationCap,
  FileText,
  Mic,
  Video,
  BookOpen,
} from "lucide-react";

export const navItems = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "Education",
    href: "/education",
    icon: Home,
    subItems: [
      {
        name: "Home",
        href: "/education",
        icon: Home,
      },
      {
        name: "Courses",
        icon: GraduationCap,
        href: "/education/courses",
        items: [
          {
            name: "Web Development",
            href: "/education/courses/web",
          },
          {
            name: "AI / ML",
            href: "/education/courses/ai",
          },
        ],
      },
      {
        name: "Articles",
        href: "/education/articles",
        icon: FileText,
      },
      {
        name: "Founder Interviews",
        href: "/education/interviews",
        icon: Mic,
      },
      {
        name: "Podcast",
        href: "/education/podcast",
        icon: Mic,
      },
      {
        name: "Videos",
        href: "/education/videos",
        icon: Video,
      },
      {
        name: "Playbooks",
        href: "/education/playbooks",
        icon: BookOpen,
      },
    ],
  },
  {
    name: "Events",
    href: "/events/upcoming",
    icon: <Home />,
    subItems: [
      { name: "Upcoming", href: "/events/upcoming", icon: Home },
      { name: "Workshops", href: "/events/workshops", icon: Home },
      {
        name: "Group Meetings",
        href: "/events/group-meetings",
        icon: Home,
      },
      { name: "Office Hours", href: "/events/office-hours", icon: Home },
      { name: "My Events", href: "/events/my-events", icon: Home },
    ],
  },
  {
    name: "Funding",
    href: "/investors/matching",
    icon: <Home />,
    subItems: [
      { name: "Investor Matching", href: "/investors/matching" },
      { name: "Investor Database", href: "/investors/investor-database" },
      { name: "Funding Resources", href: "/investors/funding-resources" },
    ],
  },
  {
    name: "Answers",
    href: "/posts",
    icon: <Home />,
  },
  {
    name: "Members",
    href: "/members/matching",
    icon: <Home />,
    subItems: [
      { name: "Matching", href: "/members/matching" },
      { name: "Founders", href: "/members/founders" },
      { name: "Experts", href: "/members/experts", icon: Home },
    ],
  },
  {
    name: "Perks",
    href: "/perks",
    icon: <Home />,
  },
];

export const navItems1 = [
  {
    name: "Tour",
    href: "/tour",
  },
  {
    name: "About",
    href: "/about",
    subItems: [
      { name: "Membership Plans", href: "/about/membership-plans" },
      { name: "Tour", href: "/about/tour" },
      { name: "Support", href: "/about/support" },
    ],
  },
  {
    name: "Login",
    href: "/login",
  },
];

export const courses = [
  {
    name: "Finding Investors",
    href: "/education/courses/finding-investors",
    color: "#118A8B",
  },
  {
    name: "How Funding Works",
    href: "/education/courses/how-funding-works",
  },
  {
    name: "Pitch Deck Bootcamp",
    href: "/education/courses/pitch-deck-bootcamp",
    para: "This course will guide you through defining the key information you'll need to build a Pitch Deck for your startup.",
  },
  {
    name: "Pitching Investors",
    href: "/education/courses/pitching-investors",
  },
  {
    name: "Product MVP",
    href: "/education/courses/product-mvp",
  },
  {
    name: "Idea Validation Bootcamp",
    href: "/education/courses/idea-validation-bootcamp",
    para: "This course will walk you through the steps to evaluate your startup idea: research, expert validation, customer discovery, and crafting an elevator pitch.",
  },
];
