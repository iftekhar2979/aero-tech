import React from "react";
import aboutUs from "../../public/Aerotech-pan-31.jpg"
import Image from "next/image";
const AboutUs = () => {
  return (
    <section className="bg-white md:py-10 ">
      <div className="max-w-4xl mx-auto sm:px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
        <hr className="border-t-2 border-gray-900 w-32 mb-8" />
        <p className="text-gray-700 text-lg leading-relaxed">
        Aerotech has been providing a General Aviation Maintenance and Continued Airworthiness Management Services for over 25 years.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
        We are a CAA Part CAO approved facility with in-house FAA A&P with Inspection Authorisation based at Coventry Airport.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
        Our engineers have experience working in Europe, Africa & the USA, ranging from Scheduled Maintenance, Accident Recovery & Pre-Purchase Inspections with the ability to ferry any aircraft to the destination of your choice.
        </p>

      </div>
      {/* <div className="about-us-image">


      </div> */}
      <Image src={aboutUs} alt="Image" className="my-4"/>
      {/* <img src={aboutUs} alt="" className="" /> */}
    </section>
  );
};

export default AboutUs;
