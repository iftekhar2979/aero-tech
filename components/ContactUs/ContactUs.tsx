import React, { useRef, useState } from "react";
// import { SimpleCaptcha } from "react-simple-captcha";
const ContactUs: React.FC = () => {
   
  
  return (
    <section className=" py-10 px-5 md:px-20 lg:px-40">
      <div className="max-w-4xl mx-auto bg-white ">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
        <hr className="border-t-2 border-gray-900 w-32 mb-8" />
        <p className="text-gray-900 mb-8">
        We aim to exceed customer expectation and are dedicated to providing a high quality service. 
        Please feel free to contact us so we can discuss looking after either a single aircraft or a fleet. 
          <span className="font-semibold"> Try us, you will be happy with the result.</span>
        </p>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name <span className="text-red-500">*</span></label>
              <input type="text" className="w-full border-gray-300 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email <span className="text-red-500">*</span></label>
              <input type="email" className="w-full border-gray-300 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Company <span className="text-red-500">*</span></label>
              <input type="text" className="w-full border-gray-300 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Telephone <span className="text-red-500">*</span></label>
              <input type="tel" className="w-full border-gray-300 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Message <span className="text-red-500">*</span></label>
            <textarea className="w-full border-gray-300 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" ></textarea>
          </div>
          
          <div className="flex items-start">
            <input type="checkbox" className="w-5 h-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mr-3" />
            <label className="text-gray-700">
              I agree to Aerotech collecting and storing data I submit through this form <span className="text-red-500">*</span>
            </label>
          </div>
          
          <div className="flex items-center justify-center my-6">
  
        <div className="w-full md:w-1/2 lg:w-1/3">
         
        </div>
      </div>

          <div className="text-center">
            <button type="submit" className="bg-red-600 text-white font-bold py-3 px-8 rounded-lg shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
