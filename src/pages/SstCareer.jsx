import React from "react";
import NavbarMain from "../components/NavbarMain";
import FooterMain from "../components/FooterMain";
import SatyaFooter from "../components/SatyaFooter";
import currentopeningpic from '../images/currentopeningpic.jpeg';

function SstCareer() {
  return (
    <div>
      <NavbarMain />
    <div className="bg-gradient-to-r from-gray-50 to-blue-50 min-h-screen">
      
      <img src={currentopeningpic} style={{width:"1280px"}} alt="Current Openings" />
      <main className="py-10">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700 flex items-center justify-center space-x-3 animate-bounce">
            <i className="fa-solid fa-door-open text-3xl" />
            <span>Current Openings</span>
          </h2>
          <p className="text-lg text-gray-800 mt-4 mx-auto max-w-2xl">
            <span className="font-semibold text-blue-800">
              Shri Satya Technologies
            </span>{" "}
            is a place where different people come together as one team, get
            creative, and deliver results. If you want to be part of a new and
            rising team and have the essential qualifications, you can send your
            updated resume as per the following:
          </p>
        </section>

        <section className="px-4 md:px-10">
          <ol className="relative border-l border-gray-300">
            {/* Job Listing 1 */}
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full -left-4 ring-8 ring-white">
                <i className="fa fa-bars text-xl text-blue-600" />
              </span>
              <h3 className="flex items-center mb-1 text-2xl font-semibold text-gray-900">
                Position Offered: Application Programmer
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-5 mt-4">
                <div className="list-disc pl-5">
                  <span className="font-semibold">Qualification:</span> B.Tech.
                  or MCA
                </div>
                <div className="list-disc pl-5">
                  <span className="font-semibold">Skills Required:</span>{" "}
                  ASP.Net With Good Command on SQL Server
                </div>
                <div className="list-disc pl-5">
                  <span className="font-semibold">Job Field:</span> IT/ Software
                  Services
                </div>
                <div className="list-disc pl-5">
                  <span className="font-semibold">Experience:</span> 1-2 Years
                  (Fresher may also apply)
                </div>
                <div className="list-disc pl-5">
                  <span className="font-semibold">Salary Offered:</span> Best in
                  the Industry
                </div>
                <div className="list-disc pl-5">
                  <span className="font-semibold">Location:</span> Sirsa
                </div>
              </div>
            </li>

            {/* Job Listing 2 */}
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full -left-4 ring-8 ring-white">
                <i className="fa-solid fa-money-bill-trend-up text-xl text-blue-600" />
              </span>
              <h3 className="flex items-center mb-1 text-2xl font-semibold text-gray-900">
                Position Offered: Marketing Executive
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-5 mt-4">
                <div className="list-disc pl-5">
                  <span className="font-semibold">Qualification:</span> Graduate
                  in any stream
                </div>
                <div className="list-disc pl-5">
                  <span className="font-semibold">Skills Required:</span> Good
                  Command in English with basic knowledge of Computer
                </div>
                <div className="list-disc pl-5">
                  <span className="font-semibold">Job Field:</span> IT/ Software
                  Services
                </div>
                <div className="list-disc pl-5">
                  <span className="font-semibold">Experience:</span> 0-6 Months
                  (Fresher may also apply)
                </div>
                <div className="list-disc pl-5">
                  <span className="font-semibold">Salary Offered:</span>{" "}
                  Attractive Salary + Incentive + TA + DA
                </div>
                <div className="list-disc pl-5">
                  <span className="font-semibold">Location:</span> Haryana,
                  Punjab, Rajasthan, Delhi, NCR, Chandigarh
                </div>
              </div>
            </li>

            {/* Job Listing 3 */}
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full -left-4 ring-8 ring-white">
                <i className="fa-solid fa-phone-volume text-xl text-blue-600" />
              </span>
              <h3 className="flex items-center mb-1 text-2xl font-semibold text-gray-900">
                Position Offered: Tele Caller (Female Only)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-5 mt-4">
                <div className="list-disc pl-5">
                  <span className="font-semibold">Qualification:</span> B.Tech.
                  or MCA
                </div>
                <div className="list-disc pl-5">
                  <span className="font-semibold">Skills Required:</span>{" "}
                  ASP.Net With Good Command on SQL Server
                </div>
                <div className="list-disc pl-5">
                  <span className="font-semibold">Job Field:</span> IT/ Software
                  Services
                </div>
                <div className="list-disc pl-5">
                  <span className="font-semibold">Experience:</span> 0-6 Months
                  (Fresher may also apply)
                </div>
                <div className="list-disc pl-5">
                  <span className="font-semibold">Salary Offered:</span>{" "}
                  Attractive Salary
                </div>
                <div className="list-disc pl-5">
                  <span className="font-semibold">Location:</span> Sirsa
                </div>
              </div>
            </li>
          </ol>
        </section>

        <section className="text-center my-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            <i className="fa-regular fa-file-pdf text-2xl" /> Submit Your Updated
            Resumes
          </h2>
          <p className="text-lg text-gray-800">
            <a
  href="mailto:resume@shrisatyait.com"
  className="inline-block px-4 py-2 text-white bg-gray-700 rounded-lg "
>
  Email Us: resume@shrisatyait.com
</a>

          </p>
        </section>

        <div className="flex justify-center items-center my-8 relative">
          <hr className="w-64 h-px bg-gray-200 border-0" />
          <span className="absolute px-3 font-medium text-gray-900 bg-white dark:text-white dark:bg-gray-900">
            or
          </span>
        </div>

        <section className="text-center my-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            <i className="fa-solid fa-phone text-2xl" /> You May Also Contact Our
            Support Lines
          </h2>
          <p className="text-lg text-gray-800">
            
          <a
  href="tel:+919254147455"
  className="inline-block px-4 py-2 text-white bg-gray-700 rounded-lg "
>
  Help Number: +91 92541 47455
</a>

          </p>
          <p className="text-lg text-gray-800 mt-2">
            <i className="fa fa-arrow-right text-lg" /> Our team works between
            9:00 AM to 6:30 PM IST Monday to Saturday. You can contact us as
            mentioned above.
          </p>
        </section>
      </main>
      
    </div>
    <SatyaFooter/>
    </div>
  );
}

export default SstCareer;
