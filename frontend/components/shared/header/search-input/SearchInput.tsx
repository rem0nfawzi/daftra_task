"use client";
import React from "react";
import { InputAdornment, OutlinedInput } from "@mui/material";
import { cn } from "@/lib/utils";
import Search from "../../icons/Search";

const SearchInput = () => {
  return (
    <div className={cn("hidden", "xl:block")}>
      <OutlinedInput
        placeholder="Search by name, job title, ..."
        startAdornment={
          <InputAdornment position="start" className="mr-4">
            <span
              className={cn(
                "w-[47px] h-[47px] bg-primary-300 rounded-full flex items-center justify-center"
              )}
            >
              <Search width={21} height={24} />
            </span>
          </InputAdornment>
        }
        color="primary"
        sx={{
          display: "hidden",
          width: "451px",
          height: "61px",
          backgroundColor: "#fff",
          borderRadius: "31px",
          paddingTop: "17px",
          paddingBottom: "17px",
          paddingRight: "17px",
          outline: 0,
          "&:hover": {},
        }}
      />
    </div>
  );
};

export default SearchInput;
