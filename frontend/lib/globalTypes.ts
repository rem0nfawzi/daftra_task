export const enum AttributeTypeEnum {
  LOCATION = "LOCATION",
  DATE = "DATE",
}
export interface Attribute {
  id: number;
  type: AttributeTypeEnum;
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
