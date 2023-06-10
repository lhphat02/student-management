import Topbar from '@/components/Topbar';
import React, { useEffect, useMemo, useState } from 'react';
import Table from '@/components/Table';
import { useTable } from 'react-table';
import { yearColumn } from '@/components/year-dashboard/year-column';
import YearTable from '@/components/year-dashboard/year-table';

const Dashboard = () => {
  let curr_year = new Date().getFullYear();

  return (
    <div className="">
      <Topbar NamePage="Student Management" />
      <div className="flex flex-col items-center justify-center w-full">
        <p>Current study year {curr_year} </p>
        <YearTable />
      </div>
    </div>
  );
};

export default Dashboard;
