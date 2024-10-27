import React, { useEffect } from "react";
import Footballnavbar from "../components/Footballnavbar";
import { fetchFixtures } from "../lib/fetch.data";
const Football = () => {
  const fetchData = async () => {
    const fixtures = await fetchFixtures();
    console.log(fixtures);
  };
  useEffect(() => {
    fetchData();
  });
  return (
    <div className="">
      <Footballnavbar />
    </div>
  );
};

export default Football;
