import React from "react";
import Navbar from "../../components/navbar/Navbar";

import DataTable from "./DataTable";
import Header from "./Header";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Header />
      <DataTable />
    </>
  );
};

export default Dashboard;
