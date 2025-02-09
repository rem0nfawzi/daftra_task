import AlertsBanner from "@/components/home/alerts-banner/AlertsBanner";
import Sorting from "@/components/home/sorting/Sorting";
import Calendar from "@/components/shared/icons/Calendar";
import Location from "@/components/shared/icons/Location";
import JobCard from "@/components/shared/job-card/JobCard";

export default function Home() {
  return (
    <>
      <Sorting />
      <AlertsBanner />
      <JobCard
        job={{
          id: 1,
          image: "/images/brand.svg",
          title: "Senior UI/UX Designer",
          url: "/",
          location: "Cairo, Egypt",
          attributes: [
            { id: 1, icon: <Location width={17} height={17} />, text: "Cairo" },
            {
              id: 1,
              icon: <Calendar width={17} height={17} />,
              text: "1 week ago",
            },
          ],
          isFavourite: true,
          tags: ["0 - 3y of exp", "full time", "hybrid"],
          category: "Creative / Design - IT / Software development",
        }}
      />
      <JobCard
        job={{
          id: 2,
          image: "/images/brand.svg",
          title: "Senior UI/UX Designer",
          url: "/",
          location: "Cairo, Egypt",
          attributes: [
            { id: 1, icon: <Location width={17} height={17} />, text: "Cairo" },
            {
              id: 1,
              icon: <Calendar width={17} height={17} />,
              text: "1 week ago",
            },
          ],
          isFavourite: false,
          tags: ["0 - 3y of exp", "full time", "hybrid"],
          category: "Creative / Design - IT / Software development",
        }}
      />
      <JobCard
        job={{
          id: 3,
          image: "/images/brand.svg",
          title: "Senior UI/UX Designer",
          url: "/",
          location: "Cairo, Egypt",
          attributes: [
            { id: 1, icon: <Location width={17} height={17} />, text: "Cairo" },
            {
              id: 1,
              icon: <Calendar width={17} height={17} />,
              text: "1 week ago",
            },
          ],
          isFavourite: true,
          tags: ["0 - 3y of exp", "full time", "hybrid"],
          category: "Creative / Design - IT / Software development",
        }}
      />
    </>
  );
}
