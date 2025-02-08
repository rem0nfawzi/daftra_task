import { FC } from "react";

const Message: FC<
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
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M26.2107 18.75C26.2107 19.413 25.9473 20.0489 25.4785 20.5178C25.0096 20.9866 24.3737 21.25 23.7107 21.25H8.71069L3.71069 26.25V6.25C3.71069 5.58696 3.97409 4.95107 4.44293 4.48223C4.91177 4.01339 5.54765 3.75 6.21069 3.75H23.7107C24.3737 3.75 25.0096 4.01339 25.4785 4.48223C25.9473 4.95107 26.2107 5.58696 26.2107 6.25V18.75Z"
        stroke={fill ?? "#E6E6E6"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default Message;
