import React from "react";
import ContactForm from "../components/ContactForm";
import DefaultLayout from "../components/layouts/DefaultLayout";
import SEO from "../components/layouts/SEO";

const contact = () => {
  return (
    <DefaultLayout>
      <SEO
        title="Contact Us | Timeflow Academy"
        url="https://timeflow.academy/contact"
        desc="Timeflow Academy is an online, hands-on platform for improving your Data Engineering skills using open source and cloud native platforms incluuding DBT, Clickhouse, Snowflake, Kafka, Spark and Airflow"
        ogImage="https://timeflow.academy/assets/img/home.png"
      />
      <div
        className="bg-right-top bg-no-repeat bg-cover py-9"
        style={{ backgroundImage: "url(/assets/img/page-cover.png)" }}
      >
        <div className="container mx-auto px-5">
          <h1 className="text-3xl font-bold text-center text-white">
            Contact Us
          </h1>
        </div>
      </div>
      <div className=" py-10 md:py-16">
        <div className="container mx-auto px-5">
          <div className="md:max-w-lg mx-auto md:text-center mb-14">
            <h2 className="mb-5 text-2xl font-bold text-black">
              Lets Start The Conversation
            </h2>
            <p>
              Please reach out using the contact form or via one of the routes
              below. A member of the team will respond within 24 hours.
            </p>
          </div>
          <div className="flex flex-wrap flex-col md:flex-row md:max-w-6xl mx-auto">
            <div className="md:w-1/3 md:px-5 py-4 md:text-center flex md:flex-col">
              <div className="flex items-center justify-center md:mx-auto mb-5 mr-7 rounded-full bg-grey-500 w-14 h-14">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5001 12.6901V14.9401C16.5009 15.1489 16.4581 15.3557 16.3745 15.5471C16.2908 15.7385 16.168 15.9103 16.0141 16.0515C15.8602 16.1927 15.6785 16.3002 15.4806 16.3671C15.2828 16.434 15.0731 16.4589 14.8651 16.4401C12.5572 16.1893 10.3403 15.4007 8.39257 14.1376C6.58044 12.9861 5.04407 11.4497 3.89257 9.63757C2.62506 7.68098 1.83625 5.45332 1.59007 3.13507C1.57133 2.92767 1.59598 2.71864 1.66245 2.52129C1.72892 2.32394 1.83575 2.14259 1.97615 1.98879C2.11654 1.83499 2.28743 1.7121 2.47792 1.62796C2.6684 1.54382 2.87433 1.50027 3.08257 1.50007H5.33257C5.69655 1.49649 6.04942 1.62538 6.32539 1.86272C6.60137 2.10006 6.78163 2.42966 6.83257 2.79007C6.92754 3.51012 7.10366 4.21712 7.35757 4.89757C7.45848 5.16602 7.48032 5.45776 7.4205 5.73823C7.36069 6.01871 7.22172 6.27616 7.02007 6.48007L6.06757 7.43257C7.13524 9.31023 8.68991 10.8649 10.5676 11.9326L11.5201 10.9801C11.724 10.7784 11.9814 10.6395 12.2619 10.5796C12.5424 10.5198 12.8341 10.5417 13.1026 10.6426C13.783 10.8965 14.49 11.0726 15.2101 11.1676C15.5744 11.219 15.9071 11.4025 16.145 11.6832C16.3828 11.9639 16.5092 12.3223 16.5001 12.6901Z"
                    stroke="#667085"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="mb-2 text-grey-lite">Phone Number</p>
                <p>+44 207 362431</p>
              </div>
            </div>
            <div className="md:w-1/3 md:px-5 py-4 md:text-center flex md:flex-col">
              <div className="flex items-center justify-center md:mx-auto mb-5 mr-7 rounded-full bg-grey-500 w-14 h-14">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1678:28182)">
                    <path
                      d="M15.75 7.5C15.75 12.75 9 17.25 9 17.25C9 17.25 2.25 12.75 2.25 7.5C2.25 5.70979 2.96116 3.9929 4.22703 2.72703C5.4929 1.46116 7.20979 0.75 9 0.75C10.7902 0.75 12.5071 1.46116 13.773 2.72703C15.0388 3.9929 15.75 5.70979 15.75 7.5Z"
                      stroke="#667085"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9 9.75C10.2426 9.75 11.25 8.74264 11.25 7.5C11.25 6.25736 10.2426 5.25 9 5.25C7.75736 5.25 6.75 6.25736 6.75 7.5C6.75 8.74264 7.75736 9.75 9 9.75Z"
                      stroke="#667085"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1678:28182">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>
                <p className="mb-2 text-grey-lite">Local Adress</p>
                <p>
                  Timeflow Systems, 1 Fore <br /> Street, London, EC1V 8AA
                </p>
              </div>
            </div>
            <div className="md:w-1/3 md:px-5 py-4 md:text-center flex md:flex-col">
              <div className="flex items-center justify-center md:mx-auto mb-5 mr-7 rounded-full bg-grey-500 w-14 h-14">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 4.5C16.5 3.675 15.825 3 15 3H3C2.175 3 1.5 3.675 1.5 4.5M16.5 4.5V13.5C16.5 14.325 15.825 15 15 15H3C2.175 15 1.5 14.325 1.5 13.5V4.5M16.5 4.5L9 9.75L1.5 4.5"
                    stroke="#667085"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="mb-2 text-grey-lite">Email Adress</p>
                <p>hello@timeflow.systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-grey-500 py-20">
        <div className="container mx-auto px-5">
          <h1 className="text-center font-bold text-3xl text-black mb-8">
            Contact Us
          </h1>
          <ContactForm />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default contact;
