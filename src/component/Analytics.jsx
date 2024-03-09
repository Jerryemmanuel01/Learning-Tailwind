import React from "react";
import laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={laptop} alt="/" className="w-[500px] mx-auto my-4 " />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold "> DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-3">Manage Data Analytics Centrally</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            reprehenderit, optio sit culpa, magnam asperiores obcaecati amet
            veritatis dicta eius quia, repellendus aperiam temporibus.
            Laudantium quidem eum tenetur error modi.
          </p>
          <button className="text-[#00df9a] w-[200px] rounded-md my-6 md:mx-0 mx-auto px-6 py-3 bg-black font-medium ">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
