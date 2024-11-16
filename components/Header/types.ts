// types.ts
export enum Page {
  Home = "/",
  About = "/about",
  Projects = "/projects",
  Contact = "/contact",
  Article = "/article",
}

export interface MenuItem {
  label: string;
  url: Page;
  extra: string;
  mobileOnly?: true;
  icon: React.ReactNode;
}




