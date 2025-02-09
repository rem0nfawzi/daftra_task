import React from "react";
import { Attribute } from "@/lib/globalTypes";

interface AttributesProps {
  attributes: Attribute[];
}
const Attributes = ({ attributes }: AttributesProps) => {
  if (attributes.length === 0) return null;
  return (
    <div className="flex gap-3 mb-[18px] px-[41px]">
      {attributes.map((attribute) => (
        <div key={attribute.id} className="flex items-center gap-1.5">
          {attribute.icon}
          <p className="text-md text-gray-600">{attribute.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Attributes;
