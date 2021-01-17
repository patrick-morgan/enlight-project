import React from "react";
// import { Link } from "gatsby";

function Welcome() {
  return (
    <main className="relative mx-auto max-w-screen-xl">
      <section className="">
        <h2 className="text-3xl tracking-tight leading-10 font-extrabold text-gray-900   sm:leading-none md:text-6xl ">
          Cohort Membership 
          <span className="text-blue-600"> Dashboard</span>
        </h2>

        <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:mx-auto sm:text-lg sm:max-w-xl  md:mt-5 md:text-xl lg:mx-0">
          This dashboard contains data and statistics on the previous cohort members.
          Use this as a comprehensive view into the overall retention and activity of
          the previous cohorts.
        </p>
      </section>
    </main>
    
  );
}

export default Welcome;
