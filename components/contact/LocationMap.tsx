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
            <p className="text-sm text-gray-600">Rating: 5.0 </p>
          </div>
          <iframe
            src="https://www.google.com/maps/place/The+Air+Ambulance+Service/@52.374137,-1.4784088,16z/data=!4m6!3m5!1s0x48774a18a29f66e9:0x7dcb0c9410b95992!8m2!3d52.3720869!4d-1.4820061!16s%2Fg%2F11g8yh912_?hl=en&entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
            width="100%"
            height="400"
            loading="lazy"
            className="w-[100vw] h-[400px] rounded-b-lg"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    );
  };
  
  export default StaticMap;
  