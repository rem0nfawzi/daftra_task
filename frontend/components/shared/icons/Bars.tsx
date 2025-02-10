import { FC } from "react";

const Bars: FC<
  React.SVGProps<SVGSVGElement> & {
    width: number;
    height: number;
    fill?: string;
  }
> = ({ width, height, fill = null, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.0769 4.19226H11.4904M3.0769 6.79643H11.4904M3.0769 9.40059H11.4904"
        stroke={fill ?? "#707070"}
        strokeWidth="1.20192"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
};
export default Bars;
