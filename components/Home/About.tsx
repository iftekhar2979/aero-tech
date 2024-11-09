import React from "react";
import aboutUs from "../../public/Aerotech-pan-31.jpg";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="bg-white py-8 md:py-10 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center md:text-left">
          About Us
        </h2>
        <hr className="border-t-2 border-gray-900 w-20 sm:w-32 mx-auto md:mx-0 mb-6 md:mb-8" />
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-center md:text-left">
          Aerotech has been providing General Aviation Maintenance and Continued
          Airworthiness Management Services for over 25 years.
        </p>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4 text-center md:text-left">
          We are a CAA Part CAO approved facility with in-house FAA A&P with
          Inspection Authorization based at Coventry Airport.
        </p>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4 text-center md:text-left">
          Our engineers have experience working in Europe, Africa & the USA,
          ranging from Scheduled Maintenance, Accident Recovery & Pre-Purchase
          Inspections, with the ability to ferry any aircraft to the destination
          of your choice.
        </p>
      </div>
      <div className="mt-8 md:mt-12 lg:mt-16 flex justify-center">
        <Image
          src={aboutUs}
          alt="Aerotech facility"
          className="rounded-lg shadow-lg"
          layout="responsive"
          width={800}
          height={400}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 50vw"
        />
      </div>
    </section>
  );
};

export default AboutUs;
