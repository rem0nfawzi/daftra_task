import AlertsBanner from "@/components/home/alerts-banner/AlertsBanner";
import Sorting from "@/components/home/sorting/Sorting";
import JobCard from "@/components/shared/job-card/JobCard";

export default function Home() {
  return (
    <>
      <Sorting />
      <AlertsBanner />
      <JobCard />
    </>
  );
}
