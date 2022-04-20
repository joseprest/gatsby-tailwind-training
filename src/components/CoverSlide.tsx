import { Link } from "gatsby";
import React from "react";

export default function CoverSlide() {
  return (
    <>
      <div className="flex flex-wrap px-40" style={{ "background": "linear-gradient(90deg, #c569cf 0%, #ee609c 100%)" }}>
        <div className="w-1/2 py-16">
          <h2 className=" text-white uppercase text-4xl font-bold mb-3">Timeflow academy</h2>
          <h4 className="text-white font-medium text-1xl mb-4">Hands On Training For Data Engineers</h4>
          <p className="text-white">
            Timeflow Academy is an online, hands-on platform for improving your
            Data Engineering skills using open source tools including Spark, DBT,
            Airflow and Kafka.
          </p>
          <Link to="/categories/dbt/" className="px-5 py-2 bg-white rounded-md text-orange inline-flex mt-6">
            Learn More
          </Link>
        </div>
        <div className="w-1/2">
          <img src="/assets/img/cover.png" alt="cover image" />
        </div>
      </div>
    </>
  );
}
