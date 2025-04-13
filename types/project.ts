export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  image?: string;
  technologies: string[];
  features: string[];
  categories: string[];
  githubUrl: string;
  demoUrl: string;
}
