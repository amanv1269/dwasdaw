import { Grid } from "@mui/material";
import React from "react";
import Achivment from "./Achivement";
import MonthlyOverView from "./MonthlyOverView";
import ProductTable from "./ProductTable";

const Dashboard = () => {
  return (
    <div className="p-10">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Achivment />
        </Grid>
        <Grid item xs={12} md={8}>
          <MonthlyOverView />
        </Grid>
        <Grid item xs={12} md={6}>
          <ProductTable />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
