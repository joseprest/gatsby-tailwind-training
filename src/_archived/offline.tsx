// import { graphql } from "gatsby";
// import React from "react";
// import DefaultLayout from "../components/layouts/DefaultLayout";
// import SEO from "../components/layouts/SEO";

// const about = () => {
//   return (
//     <DefaultLayout>
//       <SEO
//         title="Classroom Based Training For Data Engineers | Timeflow Academy"
//         url="https://timeflow.academy/about"
//         desc="Timeflow Academy is an online, hands-on platform for improving your Data Engineering skills using open source and cloud native platforms incluuding DBT, Clickhouse, Snowflake, Kafka, Spark and Airflow"
//         ogImage="https://timeflow.academy/assets/img/home.png"
//       />
//       <div
//         className="bg-right-top bg-no-repeat bg-cover py-9"
//         style={{ backgroundImage: "url(/assets/img/page-cover.png)" }}
//       >
//         <div className="container mx-auto px-5">
//           <h1 className="text-3xl font-bold text-center text-white">
//             Classroom Based Training
//           </h1>
//         </div>
//       </div>

//       <div className="container py-12 md:py-20 px-5 mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-6 md:gap-6 gap-y-5">
//           <div className="flex md:justify-end col-span-2">
//             <h2 className="md:max-w-sm text-2xl md:text-4xl text-black">
//               Public Scheduled Training
//             </h2>
//           </div>
//           <div className="col-span-4 space-y-6 text-black prose prose-lg max-w-none">
//             <p>
//               We also complement our hands online training with a range of
//               classroom based courses, delivered by Timeflow Academy
//               instructors. Public classes are scheduled periodically in cities
//               around the globe.
//             </p>

//             <table className="table-auto">
//               <thead>
//                 <tr>
//                   <td>Course Title</td>
//                   <td>Location</td>
//                   <td>Date</td>
//                   <td>Cost</td>
//                   <td>Booking</td>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>Snowflake Fundamentals</td>
//                   <td>London</td>
//                   <td>22nd January 2021</td>
//                   <td>$550/person</td>
//                   <td>
//                     <a href="/contact">Contact Us</a>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Snowflake Fundamentals</td>
//                   <td>London</td>
//                   <td>23nd January 2021</td>
//                   <td>$550/person</td>
//                   <td>
//                     <a href="/contact">Contact Us</a>
//                   </td>
//                 </tr>

//                 <tr>
//                   <td>Snowflake Fundamentals</td>
//                   <td>Paris</td>
//                   <td>28th January 2021</td>
//                   <td>$550/person</td>
//                   <td>
//                     <a href="/contact">Contact Us</a>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Snowflake Fundamentals</td>
//                   <td>Paris</td>
//                   <td>29th January 2021</td>
//                   <td>$550/person</td>
//                   <td>
//                     <a href="/contact">Contact Us</a>
//                   </td>
//                 </tr>

//                 <tr>
//                   <td>Snowflake Fundamentals</td>
//                   <td>Berlin</td>
//                   <td>22nd March 2021</td>
//                   <td>$550/person</td>
//                   <td>
//                     <a href="/contact">Contact Us</a>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Snowflake Fundamentals</td>
//                   <td>Berlin</td>
//                   <td>23nd March 2021</td>
//                   <td>$550/person</td>
//                   <td>
//                     <a href="/contact">Contact Us</a>
//                   </td>
//                 </tr>

//                 <tr>
//                   <td>Snowflake Fundamentals</td>
//                   <td>Dubai</td>
//                   <td>10th February 2021</td>
//                   <td>$550/person</td>
//                   <td>
//                     <a href="/contact">Contact Us</a>
//                   </td>
//                 </tr>

//                 <tr>
//                   <td>Kafka Fundamentals</td>
//                   <td>London</td>
//                   <td>24th January 2021</td>
//                   <td>$550/person</td>
//                   <td>
//                     <a href="/contact">Contact Us</a>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Kafka Fundamentals</td>
//                   <td>London</td>
//                   <td>25th January 2021</td>
//                   <td>$550/person</td>
//                   <td>
//                     <a href="/contact">Contact Us</a>
//                   </td>
//                 </tr>

//                 <tr>
//                   <td>Kafka Fundamentals</td>
//                   <td>Paris</td>
//                   <td>30th January 2021</td>
//                   <td>$550/person</td>
//                   <td>
//                     <a href="/contact">Contact Us</a>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Kafka Fundamentals</td>
//                   <td>Paris</td>
//                   <td>31st January 2021</td>
//                   <td>$550/person</td>
//                   <td>
//                     <a href="/contact">Contact Us</a>
//                   </td>
//                 </tr>

//                 <tr>
//                   <td>Kafka Fundamentals</td>
//                   <td>Berlin</td>
//                   <td>24th March 2021</td>
//                   <td>$550/person</td>
//                   <td>
//                     <a href="/contact">Contact Us</a>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Kafka Fundamentals</td>
//                   <td>Berlin</td>
//                   <td>25th March 2021</td>
//                   <td>$550/person</td>
//                   <td>
//                     <a href="/contact">Contact Us</a>
//                   </td>
//                 </tr>

//                 <tr>
//                   <td>Kafka Fundamentals</td>
//                   <td>Dubai</td>
//                   <td>11th February 2021</td>
//                   <td>$550/person</td>
//                   <td>
//                     <a href="/contact">Contact Us</a>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>

//             <p>
//               If you would like us to deliver training in your city, please{" "}
//               <a href="/contact">contact us</a> to make a request.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="container py-12 md:py-20 px-4 mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-6 gap-y-4 md:gap-6">
//           <div className="flex md:justify-end col-span-2">
//             <h2 className="md:max-w-sm text-2xl md:text-4xl text-black">
//               Private Bespoke Training
//             </h2>
//           </div>
//           <div className="col-span-4 space-y-6 text-black prose prose-lg max-w-none">
//             <p>
//               We are also able to offer private training courses in our focus
//               technologies, either delivered on-site in person anywhere in the
//               world, or virtually. Please <a href="/contact">contact us</a> to
//               discuss your requirements.
//             </p>
//           </div>
//         </div>
//       </div>
//     </DefaultLayout>
//   );
// };

// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//         description
//         siteUrl
//       }
//     }
//   }
// `;

// export default about;
