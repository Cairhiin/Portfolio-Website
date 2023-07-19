import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface CardListData {
  backend: { icon: IconProp; data: Array<string> };
  frontend: { icon: IconProp; data: Array<string> };
  other: { icon: IconProp; data: Array<string> };
}

export interface ProjectsData {
  name: string;
  img: string;
  content: string;
  links: { icon: IconProp; url: string }[];
}
