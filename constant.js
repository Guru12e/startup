import {
  Home,
  GraduationCap,
  FileText,
  Mic,
  Video,
  BookOpen,
} from "lucide-react";

export const courses = [
  {
    name: "Idea Validation Bootcamp",
    href: "/education/courses/idea-validation-bootcamp",
    para: "This course will walk you through the steps to evaluate your startup idea: research, expert validation, customer discovery, and crafting an elevator pitch.",
    color: "#10898b",
    gradient: "to-[#10898b]/40",
    colorType: "hover:bg-course-idea",
    image: "/images/course2.png",
  },
  {
    name: "How Funding Works",
    href: "/education/courses/how-funding-works",
    color: "#b24b33",
    gradient: "to-[#b24b33]/40",
    colorType: "hover:bg-course-how",
    image: "/images/course3.png",
  },
  {
    name: "Finding Investors",
    href: "/education/courses/finding-investors",
    color: "#a22626",
    gradient: "to-[#a22626]/40",
    colorType: "hover:bg-course-finding",
    image: "/images/course4.png",
  },

  {
    name: "Pitch Deck Bootcamp",
    href: "/education/courses/pitch-deck-bootcamp",
    para: "This course will guide you through defining the key information you'll need to build a Pitch Deck for your startup.",
    color: "#723e7b",
    gradient: "to-[#723e7b]/40",
    colorType: "hover:bg-course-pitch",
    image: "/images/course5.png",
  },
  {
    name: "Pitching Investors",
    href: "/education/courses/pitching-investors",
    color: "#206096",
    gradient: "to-[#206096]/40",
    colorType: "hover:bg-course-pitching",
    image: "/images/course6.png",
  },
  {
    name: "Product MVP",
    href: "/education/courses/product-mvp",
    color: "#138b66",
    gradient: "to-[#138b66]/40",
    colorType: "hover:bg-course-product",
    image: "/images/course1.png",
  },
];

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
        items: courses,
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
      { name: "Founders", href: "/founders" },
      { name: "Experts", href: "/experts", icon: Home },
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
