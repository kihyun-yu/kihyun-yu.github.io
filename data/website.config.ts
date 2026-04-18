export interface SocialMediaLink {
  name: string;
  url: string;
}

export interface PersonalInfo {
  name: string;
  profilePicture?: string;
  role: string;
  university: string;
  universityWebsite: string;
  socialMedia: SocialMediaLink[];
}

export interface WebsiteInfo {
  title: string;
  description: string;
}

export interface NavigationItem {
  name: string;
  route: string;
}

export interface HomepageSection {
  AboutSection?: boolean;
  EducationSection?: boolean;
  NewsSection?: boolean;
  SelectedPublicationsSection?: boolean;
  ProjectSection?: boolean;
}

export type FontStyle = "sans" | "serif" | "mono";

export const personalInfo: PersonalInfo = {
  name: "Kihyun Yu",
  role: "M.S.-Ph.D. Student",
  university: "KAIST",
  universityWebsite: "https://www.kaist.ac.kr/en/",
  socialMedia: [
    { name: "Email", url: "mailto:khyu99@kaist.ac.kr" },
    {
      name: "Google Scholar",
      url: "https://scholar.google.com/citations?user=ya1HqdsAAAAJ&hl=en",
    },
  ],
};

export const websiteInfo: WebsiteInfo = {
  title: personalInfo.name,
  description: "Reinforcement learning theory researcher",
};

export const navigations: NavigationItem[] = [
  { name: "Projects", route: "/projects" },
  { name: "Publications", route: "/publications" },
  { name: "News", route: "/news" },
  { name: "CV", route: "/cv/cv.pdf" },
];

export const homepageSection: HomepageSection = {
  AboutSection: true,
  EducationSection: true,
  NewsSection: false,
  SelectedPublicationsSection: true,
  ProjectSection: false,
};

export const fontStyle: FontStyle = "sans"; // "sans" | "serif" | "mono"
