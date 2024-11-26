// components/StaticMap.js
// const StaticMap = () => {
//     return (
//       <div className="flex justify-center items-center py-4">
//         <div className="w-full max-w-4xl bg-gray-200 rounded-lg overflow-hidden shadow-md">
//           <div className="p-4">
//             <h2 className="text-lg font-semibold text-gray-800">Aerotech Ltd</h2>
//             <p className="text-sm text-gray-600">
//               Airpark Coventry Airport, Rowley Rd, Coventry CV3 4FR
//             </p>
//             <p className="text-sm text-gray-600">Rating: 5.0 </p>
//           </div>
//           <iframe
//             src="https://www.google.com/maps/place/The+Air+Ambulance+Service/@52.374137,-1.4784088,16z/data=!4m6!3m5!1s0x48774a18a29f66e9:0x7dcb0c9410b95992!8m2!3d52.3720869!4d-1.4820061!16s%2Fg%2F11g8yh912_?hl=en&entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
//             width="100%"
//             height="400"
//             loading="lazy"
//             className="w-[100vw] h-[400px] rounded-b-lg"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.869495282125!2d-1.4827158230796826!3d52.37278634711808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48774a18bb752431%3A0x2cc489415f0a194e!2sAerotech%20Ltd!5e0!3m2!1sen!2sbd!4v1731219493162!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
//         </div>
//       </div>
//     );
//   };

// components/StaticMap.js
const StaticMap = () => {
  return (
    <div className="flex justify-center items-center py-4">
      <div className="w-full max-w-4xl bg-gray-200 rounded-lg overflow-hidden shadow-md">
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">Aerotech Ltd</h2>
          <p className="text-sm text-gray-600">
            Airpark Coventry Airport, Rowley Rd, Coventry CV3 4FR
          </p>
          <p className="text-sm text-gray-600">Rating: 5.0</p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.869495282125!2d-1.4827158230796826!3d52.37278634711808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48774a18bb752431%3A0x2cc489415f0a194e!2sAerotech%20Ltd!5e0!3m2!1sen!2sbd!4v1731219493162!5m2!1sen!2sbd"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-[100vw] h-[400px] rounded-b-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default StaticMap;

  
  // export default StaticMap;
  