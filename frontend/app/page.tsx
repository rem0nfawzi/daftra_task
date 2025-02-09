import AlertsBanner from "@/components/home/alerts-banner/AlertsBanner";
import Sorting from "@/components/home/sorting/Sorting";
import JobCard from "@/components/shared/job-card/JobCard";
import CustomPagination from "@/components/shared/pagination/Pagination";
import { jobs } from "@/data/jobs";

export default function Home() {
  return (
    <>
      <Sorting />
      <AlertsBanner />
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
      <CustomPagination />
    </>
  );
}
