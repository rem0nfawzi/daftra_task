import AlertsBanner from "@/components/home/alerts-banner/AlertsBanner";
import MobileSidebarBtn from "@/components/home/mobile-sidebar-btn/MobileSidebarBtn";
import Sorting from "@/components/home/sorting/Sorting";
import JobCard from "@/components/shared/job-card/JobCard";
import CustomPagination from "@/components/shared/pagination/Pagination";
import { jobs } from "@/data/jobs";

export default function Home() {
  return (
    <>
      <Sorting />
      <div className="flex gap-1.5">
        <AlertsBanner />
        <MobileSidebarBtn />
      </div>

      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
      <CustomPagination />
    </>
  );
}
