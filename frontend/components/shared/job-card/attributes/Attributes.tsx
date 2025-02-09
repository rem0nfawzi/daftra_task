import React from "react";
import { Attribute, AttributeTypeEnum } from "@/lib/globalTypes";
import Location from "../../icons/Location";
import Calendar from "../../icons/Calendar";

interface AttributesProps {
  attributes: Attribute[];
}
const Attributes = ({ attributes }: AttributesProps) => {
  const getAttributeIcon = (type: AttributeTypeEnum) => {
    if (type === AttributeTypeEnum.LOCATION)
      return <Location width={17} height={17} />;
    else if (type === AttributeTypeEnum.DATE)
      return <Calendar width={17} height={17} />;
  };
  if (attributes.length === 0) return null;
  return (
    <div className="flex gap-3 mb-[18px] px-[41px]">
      {attributes.map((attribute) => (
        <div key={attribute.id} className="flex items-center gap-1.5">
          {getAttributeIcon(attribute.type)}
          <p className="text-md text-gray-600">{attribute.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Attributes;
