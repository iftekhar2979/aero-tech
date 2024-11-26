import { FaMapMarkerAlt, FaPhoneAlt, FaStar } from "react-icons/fa";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-around items-center my-0 md:my-4 py-10 px-5 md:px-20 lg:px-40 space-y-8 md:space-y-0 md:space-x-8">
      {/* Address Section */}
      <div className="flex flex-col items-center text-center p-6 rounded-lg transition hover:scale-105 transform hover:bg-gray-100 ">
        <FaMapMarkerAlt className="text-red-600 text-3xl mb-2 transition-transform transform hover:scale-110" />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Address</h2>
        <p className="text-gray-700">
          Airpark Flight Centre <br />
          Coventry Airport <br />
          Rowley Road <br />
          Baginton <br />
          Coventry, CV3 4FR
        </p>
      </div>

      {/* Telephone Section */}
      <div className="flex flex-col items-center text-center p-6 rounded-lg transition transform hover:scale-105 hover:bg-gray-100">
        <FaPhoneAlt className="text-red-600 text-3xl mb-2 transition-transform transform hover:scale-110" />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Telephone Number
        </h2>
        <p className="text-gray-700 font-semibold">02476 306888</p>
      </div>

      {/* Social Section */}
      <div className="flex flex-col items-center text-center p-6 rounded-lg transition transform hover:scale-105 hover:bg-gray-100">
        <FaStar className="text-red-600 text-3xl mb-2 transition-transform transform hover:scale-110" />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Social</h2>
        <div className="flex ">
        <a
            href="https://www.facebook.com/aerotechaircraftmaintenanceltd/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer  px-4"
          >
            <FaFacebook className="text-2xl" />
          </a>

          {/* Twitter Link */}
          <a
            href="https://twitter.com/aerotech_ltd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-black transition-colors cursor-pointer "
          >
            <FaXTwitter className="text-2xl " />
          </a>
        </div>
       
      </div>
    </div>
  );
};

export default ContactInfo;
