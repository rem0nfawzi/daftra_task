import React from "react";
import Image from "next/image";

interface EmployerProps {
  image: string;
  title: string;
  location: string;
}
const Employer = ({ image, title, location }: EmployerProps) => {
  return (
    <div className="flex gap-[22px] mb-[18px] px-[41px]">
      <Image src={image} width={70} height={70} alt="Name" />
      <div className="flex flex-col justify-between">
        <h3 className="text-2xl text-gray-500 font-medium">{title}</h3>
        <p className="text-lg text-primary-500 font-bold">{location}</p>
      </div>
    </div>
  );
};

export default Employer;
