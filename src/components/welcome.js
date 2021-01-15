import React from "react";
// import { Link } from "gatsby";

function Welcome() {
  return (
    <section className="max-w-lg">
      <h1 className="font-bold tracking-tight text-2xl my-8 text-gray-900">
        Cohort Membership Dashboard
      </h1>

      <p className="text-xl text-gray-700 pb-2">
        This dashboard contains data and statistics on the previous cohort members.
        Use this as a comprehensive view into the overall retention and activity of
        the previous cohorts.
      </p>

      {/* <p className="text-xl text-gray-700 py-2">
        Here is a link to another{" "}
        <Link className="text-blue-600" to="pagetwo">
          page
        </Link>{" "}
        to show you how multiple pages in Gatsby work.
      </p>
      <p className="text-xl text-gray-700 py-2">
        When you build your project, you will want to make sure to create
        components in the components folder and import them into index.js to
        display them on the page, just like this component. For example, you can
        create a table.js component or a completionStat.js component!
      </p>

      <p className="text-xl text-gray-700 py-2">
        Please reach out to Samay via Discord or email (samay@enlight.nyc) if
        you have any questions or run into any issues. We are here to help.
      </p> */}
    </section>
  );
}

export default Welcome;
