import React from "react";

const Landing = () => {
  return (
    <>
      <div class="hero h-screen bg-base-300 mt-16">
        <div class="hero-content flex-col lg:flex-row">
          <div>
            <p>Best Quality</p>
            <h1 class="text-5xl font-bold">Professional Cleaning Service</h1>
            <p class="py-6">
              Connecting Homeowners & Housekeepers · How Does It Work? · Learn
              More About Our Services · Refer your friends and earn credits.{" "}
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
          <img 
            src="https://i.ibb.co/8XcyvYh/young-smiling-cleaner-woman-smiyoung-isolated-over-white-background-ling-isolated-over-white-backgro.jpg"
            class="max-w-sm rounded"
            alt=""
          />
        </div>
      </div>
      <div className="mx-auto shadow-lg rounded-2xl p-10 bg-base-100 relative mt-[-50px] w-5/6">
          <h1 className='text-2xl mb-4'>Get Free Estimate</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          <input type="text" placeholder="Type here" class="input input-bordered w-full" />
          <input type="text" placeholder="Type here" class="input input-bordered w-full" />
          <input type="text" placeholder="Type here" class="input input-bordered w-full" />
          <input type="text" placeholder="Type here" class="input input-bordered w-full" />
          <input type="text" placeholder="Type here" class="input input-bordered w-full" />
          <input type="text" placeholder="Type here" class="input input-bordered w-full" />
          <input type="text" placeholder="Type here" class="input input-bordered w-full" />
          <input type="text" placeholder="Type here" class="input input-bordered w-full" />
          </div>
          <button class="btn btn-primary m-4">Get a Quote</button>
      </div>
    </>
  );
};

export default Landing;
