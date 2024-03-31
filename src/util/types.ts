export type ExperienceDescription = {
  title: string;
  subtitle: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: Technology[];
};

export type Technology =
  | "java"
  | "javascript"
  | "typescript"
  | "react"
  | "nodejs"
  | "kotlin";

export type PersonalProjectInfo = {
  title: string;
  description: string;
  imageSrc: string;
  technologies: Technology[];
  link?: string;
};
