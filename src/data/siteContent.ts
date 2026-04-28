export type NavLinkItem = {
  label: string;
  href: string;
  children?: NavLinkItem[];
};

export type NavGroup = {
  title: string;
  links: NavLinkItem[];
};

export type MegaMenu = {
  label: string;
  links: NavLinkItem[];
};

export const navPrimaryLinks: NavLinkItem[] = [];

export const navMegaMenus: MegaMenu[] = [
  {
    label: "EXPLORE",
    links: [
      { 
        label: "Foreword by Principal", 
        href: "#" 
      },
      { 
        label: "Aim & Objective", 
        href: "#" 
      },
      { 
        label: "History", 
        href: "#",
        children: [
          { label: "Overview of CCH", href: "#" },
          { label: "Founder Principal", href: "#" },
          { label: "Principals of CCH", href: "#" },
        ]
      },
      { 
        label: "Board of Governors", 
        href: "#",
        children: [
          { label: "Official Members", href: "#" },
          { label: "Non-Official Members", href: "#" },
        ]
      },
      { 
        label: "Campus at a Glance", 
        href: "#" 
      },
      { 
        label: "Facilities", 
        href: "#" 
      },
      { 
        label: "Current Administration", 
        href: "#" 
      },
      { 
        label: "News", 
        href: "/news" 
      },
    ],
  },
  {
    label: "ADMISSION",
    links: [
      { 
        label: "Online Admissions", 
        href: "/admissions" 
      },
      { 
        label: "Courses Offered", 
        href: "#" 
      },
      { 
        label: "Admission Intake", 
        href: "#",
        children: [
          { label: "Admission to Class A-Level", href: "#" },
          { label: "Admission to Class O-Level", href: "#" },
        ]
      },
      { 
        label: "Exam Preparation", 
        href: "#",
        children: [
          { label: "Syllabus for Entry Exam", href: "#" },
        ]
      },
      { 
        label: "Fee Structure", 
        href: "#" 
      },
    ],
  },
  {
    label: "ACADEMICS",
    links: [
      { 
        label: "Members of Faculty", 
        href: "/faculty" 
      },
      { 
        label: "Academic Excellence", 
        href: "#" 
      },
      { 
        label: "Position Holders", 
        href: "#" 
      },
      { 
        label: "Learning Resources", 
        href: "#" 
      },
      { 
        label: "Digital Library", 
        href: "#" 
      },
    ],
  },
  {
    label: "WIDER CURRICULUM",
    links: [
      { 
        label: "Community Service", 
        href: "#" 
      },
      { 
        label: "Clubs & Societies", 
        href: "#" 
      },
      { 
        label: "Duke of Edinburgh's Award", 
        href: "#" 
      },
      { 
        label: "Guidance & Placement Cell", 
        href: "#" 
      },
      { 
        label: "Mentorship", 
        href: "#" 
      },
      { 
        label: "Round Square", 
        href: "#" 
      },
      { 
        label: "SAT", 
        href: "#" 
      },
      { 
        label: "Well Being", 
        href: "#",
        children: [
          { label: "Policy Documents", href: "#" },
          { label: "Social and Emotional Learning", href: "#" },
          { label: "Other Activities", href: "#" },
        ]
      },
    ],
  },
  {
    label: "ALUMNI",
    links: [
      { 
        label: "Alumni Registration", 
        href: "/alumni" 
      },
      { 
        label: "Homecomings & Golden Jubilee", 
        href: "#" 
      },
      { 
        label: "Prominent Abdalian", 
        href: "#" 
      },
      { 
        label: "ABDALIAN-Keepsake", 
        href: "#" 
      },
    ],
  },
  {
    label: "ENDOWMENT FUND",
    links: [
      { 
        label: "Appeal by the Principal", 
        href: "#" 
      },
      { 
        label: "Board of Trustees", 
        href: "#" 
      },
      { 
        label: "Trust Deed & Certifications", 
        href: "#" 
      },
      { 
        label: "Account Details", 
        href: "#" 
      },
      { 
        label: "Audit Reports", 
        href: "#" 
      },
    ],
  },
  {
    label: "CADET LIFE",
    links: [
      { 
        label: "Activities", 
        href: "/campus-life" 
      },
      { 
        label: "Rules & Regulations", 
        href: "#" 
      },
      { 
        label: "CCH Newsletters", 
        href: "#" 
      },
      { 
        label: "Calendar of Events", 
        href: "#" 
      },
      { 
        label: "Mess Menu", 
        href: "#" 
      },
      { 
        label: "Digital Abdalian", 
        href: "#" 
      },
      { 
        label: "Wing & Mascots", 
        href: "#" 
      },
    ],
  },
  {
    label: "CAREER",
    links: [
      { 
        label: "Advertisements", 
        href: "/career" 
      },
      { 
        label: "Contact Us", 
        href: "/contact" 
      },
    ],
  },
];

export const navDropdownGroups: NavGroup[] = [
  {
    title: "Academics & Admissions",
    links: [
      { label: "Admissions", href: "/admissions" },
      { label: "Academics", href: "/academics" },
      { label: "Faculty", href: "/faculty" },
    ],
  },
  {
    title: "Campus & Community",
    links: [
      { label: "Campus Life", href: "/campus-life" },
      { label: "Alumni", href: "/alumni" },
      { label: "Endowment Fund", href: "/endowment-fund" },
      { label: "Career", href: "/career" },
    ],
  },
  {
    title: "Information",
    links: [
      { label: "About", href: "/about" },
      { label: "News", href: "/news" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
