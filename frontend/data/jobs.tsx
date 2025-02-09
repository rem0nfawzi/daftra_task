import { AttributeTypeEnum } from "@/lib/globalTypes";

export const jobs = [
  {
    id: 1,
    image: "/images/brand.svg",
    title: "Senior UI/UX Designer",
    url: "/",
    location: "Cairo, Egypt",
    attributes: [
      { id: 1, type: AttributeTypeEnum.LOCATION, text: "Cairo" },
      {
        id: 2,
        type: AttributeTypeEnum.DATE,
        text: "1 week ago",
      },
    ],
    isFavourite: true,
    tags: ["0 - 3y of exp", "full time", "hybrid"],
    category: "Creative / Design - IT / Software development",
  },
  {
    id: 2,
    image: "/images/brand.svg",
    title: "Senior UI/UX Designer",
    url: "/",
    location: "Cairo, Egypt",
    attributes: [
      { id: 1, type: AttributeTypeEnum.LOCATION, text: "Cairo" },
      {
        id: 2,
        type: AttributeTypeEnum.DATE,
        text: "1 week ago",
      },
    ],
    isFavourite: false,
    tags: ["0 - 3y of exp", "full time", "hybrid"],
    category: "Creative / Design - IT / Software development",
  },
  {
    id: 3,
    image: "/images/brand.svg",
    title: "Senior UI/UX Designer",
    url: "/",
    location: "Cairo, Egypt",
    attributes: [
      { id: 1, type: AttributeTypeEnum.LOCATION, text: "Cairo" },
      {
        id: 2,
        type: AttributeTypeEnum.DATE,
        text: "1 week ago",
      },
    ],
    isFavourite: true,
    tags: ["0 - 3y of exp", "full time", "hybrid"],
    category: "Creative / Design - IT / Software development",
  },
  {
    id: 4,
    image: "/images/brand.svg",
    title: "Senior UI/UX Designer",
    url: "/",
    location: "Cairo, Egypt",
    attributes: [
      { id: 1, type: AttributeTypeEnum.LOCATION, text: "Cairo" },
      {
        id: 2,
        type: AttributeTypeEnum.DATE,
        text: "1 week ago",
      },
    ],
    isFavourite: false,
    tags: ["0 - 3y of exp", "full time", "hybrid"],
    category: "Creative / Design - IT / Software development",
  },
];
