import React from "react";
import Child from "./Child";

export default function Parent() {

  const name1 = "Kamal";
  const age1 = 25;
  const city1 = "Salem";

  const name2 = "Arun";
  const age2 = 24;
  const city2 = "Chennai";

  const name3 = "Hari";
  const age3 = 23;
  const city3 = "Coimbatore";

  const name4 = "Vijay";
  const age4 = 26;
  const city4 = "Madurai";

  const name5 = "Suresh";
  const age5 = 21;
  const city5 = "Tiruvannamalai";

  return (
    <>
      <h2>User Details</h2>
      
      <Child name={name1} age={age1} city={city1} />
      <Child name={name2} age={age2} city={city2} />
      <Child name={name3} age={age3} city={city3} />
      <Child name={name4} age={age4} city={city4} />
      <Child name={name5} age={age5} city={city5} />

    </>
  );
}