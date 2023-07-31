import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface CardListData {
  backend: { icon: IconProp; data: Array<string> };
  frontend: { icon: IconProp; data: Array<string> };
  other: { icon: IconProp; data: Array<string> };
}

export interface ProjectsData {
  id: number;
  name: string;
  img: string;
  content: string;
  links: Link[];
  tech: string[];
}

export interface Link {
  url: string;
  icon: IconProp;
}
