import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { cn } from "@/lib/utils";

export default function PaginationRounded() {
  return (
    <div className={cn("mt-4", "md-mt-9")}>
      <Stack spacing={2} alignItems="center">
        <Pagination
          count={4}
          variant="outlined"
          shape="rounded"
          size="large"
          sx={{
            "& .Mui-selected": {
              backgroundColor: "#48A74C !important",
              color: "white !important",
              "&:hover": {
                backgroundColor: "#3d8d40 !important",
              },
            },
          }}
        />
      </Stack>
    </div>
  );
}
