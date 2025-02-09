import { ReactElement } from "react";

export interface Attribute {
  id: number;
  icon: ReactElement;
  text: string;
}
export interface Job {
  job: {
    id: number;
    image: string;
    title: string;
    url: string;
    location: string;
    attributes: Attribute[];
    isFavourite: boolean;
    tags: string[];
    category: string;
  };
}
