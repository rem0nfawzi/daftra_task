import { Switch } from "@mui/material";
import React from "react";
const label = { inputProps: { "aria-label": "Switch demo" } };

const CustomSwitch = () => {
  return <Switch {...label} defaultChecked />;
};

export default CustomSwitch;
