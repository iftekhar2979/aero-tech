/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { sendContactForm } from "@/lib/api";
import React, { useState } from "react";
import { z } from "zod";
import Swal from "sweetalert2";

// Define Zod schema for validation
const contactSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  company: z.string().min(1, { message: "Company is required" }),
  telephone: z
    .string()
    .min(1, { message: "Telephone is required" })
    .regex(/^[\d+]+$/, {
      message: "Telephone can only contain numbers and plus sign",
    }),
  message: z.string().min(1, { message: "Message is required" }),
  agree: z
    .boolean()
    .refine((val) => val === true, { message: "You must agree to continue" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    telephone: "",
    message: "",
    agree: false,
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  // Handle form input changes
  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data with Zod
    const validation = contactSchema.safeParse(formData);

    if (validation.success) {
      console.log("Form Data:", formData); // If valid, log the form data
      setErrors({}); // Clear any previous errors

      try {
        await sendContactForm(formData);
        
        // Show success alert
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Your message has been sent.",
        });

        // Clear the form after success
        setFormData({
          name: "",
          email: "",
          company: "",
          telephone: "",
          message: "",
          agree: false,
        });

      } catch (error) {
        console.log(error);

        // Show error alert
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again.",
        });
      }
    } else {
      // Map errors for easy display
      const fieldErrors = validation.error.flatten().fieldErrors;
      setErrors(fieldErrors as Partial<ContactFormData>);
      console.log("Validation Errors:", fieldErrors);
    }
  };

  return (
    <section className="py-10 px-5 md:px-20 lg:px-40">
      <div className="max-w-4xl mx-auto bg-white ">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
        <hr className="border-t-2 border-gray-900 w-32 mb-8" />
        <p className="text-gray-900 mb-8">
          We aim to exceed customer expectation and are dedicated to providing a
          high-quality service. Please feel free to contact us so we can discuss
          looking after either a single aircraft or a fleet.
          <span className="font-semibold"> Try us, you will be happy with the result.</span>
        </p>

        <form onSubmit={handleSubmit} action="https://formsubmit.co/ahad.aiman2@gmail.com" method="POST"  className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-gray-300 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-gray-300 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Company <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full border-gray-300 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.company && (
                <p className="text-red-500 text-sm">{errors.company}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Telephone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                className="w-full border-gray-300 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.telephone && (
                <p className="text-red-500 text-sm">{errors.telephone}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border-gray-300 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows={5}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="w-5 h-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mr-3"
            />
            <label className="text-gray-700">
              I agree to Aerotech collecting and storing data I submit through
              this form <span className="text-red-500">*</span>
            </label>
            {errors.agree && (
              <p className="text-red-500 text-sm">{errors.agree}</p>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-red-600 text-white font-bold py-3 px-8 rounded-lg shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
