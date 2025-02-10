import { cn } from "@/lib/utils";
import React from "react";
import Tag from "../tag/Tag";
import Link from "next/link";
import Favourite from "./favourite/Favourite";
import Employer from "./employer/Employer";
import Attributes from "./attributes/Attributes";
import { Job } from "@/lib/globalTypes";

const JobCard = ({ job }: Job) => {
  const {
    image,
    title,
    url,
    attributes,
    location,
    isFavourite,
    tags,
    category,
  } = job;
  return (
    <Link
      href={url}
      className={cn(
        "block relative bg-white border border-gray-300 rounded-[5px] py-[11px] transition hover:border-primary-300 mb-1.5 last-of-type:mb-0 hover:bg-primary-100",
        "md:py-[35px] md:mb-[14px]"
      )}
    >
      <Favourite isFavourite={isFavourite} />
      <Employer image={image} title={title} location={location} />
      <Attributes attributes={attributes} />
      <div
        className={cn(
          "flex gap-1 mb-2 px-[17px]",
          "md:px-[41px] md:mb-[26.5px]"
        )}
      >
        {tags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div>
      <p
        className={cn(
          "border-t border-gray-300 px-[17px] pt-[12px] text-gray-600 text-xs",
          "md:px-[41px] md:pt-[22.5px] md-text-[17px]"
        )}
      >
        {category}
      </p>
    </Link>
  );
};

export default JobCard;
