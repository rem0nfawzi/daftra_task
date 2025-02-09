import { FC } from "react";

const ArrowBottom: FC<
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
      viewBox="0 0 24 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_5014_197)">
        <path
          d="M6.57999 2.95199L5.51999 4.01299L11.297 9.79199C11.3896 9.88514 11.4996 9.95907 11.6209 10.0095C11.7421 10.06 11.8722 10.0859 12.0035 10.0859C12.1348 10.0859 12.2648 10.06 12.3861 10.0095C12.5073 9.95907 12.6174 9.88514 12.71 9.79199L18.49 4.01299L17.43 2.95299L12.005 8.37699L6.57999 2.95199Z"
          fill={fill ?? "black"}
        />
      </g>
    </svg>
  );
};
export default ArrowBottom;
