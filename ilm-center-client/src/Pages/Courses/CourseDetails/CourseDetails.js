import jsPDF from "jspdf";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import html2canvas from "html2canvas";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFFile from "./PDFFile/PDFFile";

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const { id, name, image, details, fee, duration, instructor } = courseDetails;
  console.log(courseDetails);
 
  return (
    <div>
      
      <div className="min-w-screen min-h-screen bg-gray-100 flex items-center p-5 lg:p-10 overflow-hidden relative">
        <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div className="relative">
                <img
                  src={image}
                  className="w-full relative z-10"
                  alt="coursephoto"
                />
                <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
              <div className="mb-10">
                <div className="flex justify-between items-center">
                  <h1 className="font-bold uppercase text-xl md:text-3xl mb-5">{name}</h1>

                  <PDFDownloadLink  document={<PDFFile courseDetails ={courseDetails} />} filename="FORM">
      {({loading}) => (loading ? <button>Loading Document...</button> : <button  className=" bg-blue-700 opacity-75 hover:opacity-100 text-white hover:text-gray-900 rounded-full px-10 py-2 font-semibold">Download
                    </button> )}
      </PDFDownloadLink>
                  
                   
                </div>
                <h1 className="font-bold  mb-5">
                  <span className="font-serif text-lg md:text-2xl ">Instructor: </span>
                  <span className="font-serif text-lg md:text-xl italic ">
                    {instructor}{" "}
                  </span>
                </h1>
                <p className="text-lg">{details}</p>
              </div>
              <div className="">
                <div className="inline-block align-bottom mr-5">
                  <span className="text-2xl leading-none align-baseline">
                    $
                  </span>
                  <span className="font-bold text-5xl leading-none align-baseline">
                    {fee}
                  </span>
                </div>
                <div className="inline-block align-bottom mr-5">
                  <span className="font-bold text-5xl leading-none align-baseline">
                    {duration}
                  </span>
                  <span className="text-2xl leading-none align-baseline">
                    Weeks
                  </span>
                </div>
                <div className=" mt-5 flex justify-around ">
                  <Link
                    to={`/checkout/${id}`}
                    className="bg-blue-700 opacity-75 hover:opacity-100 text-white hover:text-gray-900 rounded-full px-10 py-2 font-semibold"
                  >
                    <i className="mdi mdi-cart -ml-2 mr-2"></i>Get premium
                    access
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <Link
            to={`/checkout/${id}`}
            title="enroll"
            target="_blank"
            className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              className="object-cover object-center w-full h-full rounded-full"
              src="https://i.ibb.co/Gpf3N2v/logo.jpg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
