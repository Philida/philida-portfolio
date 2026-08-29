export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  stack: string[];
  github: string;
  live: string;
 featured: boolean;

  overview?: string;
  features?: string[];

  architecture?: string[];
  authentication?: string[];

  databaseModels?: string[];
  databaseNotes?: string[];
}