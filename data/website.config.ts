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
  address: string[];
  email: string;
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
  AcademicServicesSection?: boolean;
  TeachingExperienceSection?: boolean;
  HonorsSection?: boolean;
  ExperienceSection?: boolean;
  LanguagesAndTechnicalSkillsSection?: boolean;
  OtherActivitiesSection?: boolean;
  SelectedPublicationsSection?: boolean;
}

export type FontStyle = "sans" | "serif" | "mono";

export const personalInfo: PersonalInfo = {
  name: "Kihyun Yu",
  role: "M.S.-Ph.D. Student",
  university: "KAIST",
  universityWebsite: "https://www.kaist.ac.kr/en/",
  address: [
    "Industrial and Systems Engineering, KAIST",
    "291 Daehak-ro, Yuseong-gu, Daejeon, Republic of Korea",
  ],
  email: "khyu99@kaist.ac.kr",
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
  { name: "Publications", route: "/publications" },
  { name: "CV", route: "/cv/cv.pdf" },
];

export const homepageSection: HomepageSection = {
  AboutSection: true,
  EducationSection: true,
  AcademicServicesSection: true,
  TeachingExperienceSection: true,
  HonorsSection: true,
  ExperienceSection: true,
  LanguagesAndTechnicalSkillsSection: true,
  OtherActivitiesSection: true,
  SelectedPublicationsSection: true,
};

export const fontStyle: FontStyle = "sans"; // "sans" | "serif" | "mono"
