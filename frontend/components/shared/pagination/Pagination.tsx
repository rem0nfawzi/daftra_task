import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationRounded() {
  return (
    <div className="mt-9">
      <Stack spacing={2} alignItems="center">
        <Pagination
          count={10}
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
