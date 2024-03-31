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
