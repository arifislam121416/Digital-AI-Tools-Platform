import React from 'react';

const Herosection = () => {
    return (
        <div className="hero  bg-base-200 min-h-screen">
  <div className="hero-content sm:text-center flex-col lg:flex-row-reverse">
  <div className=''>
      <img
      src="https://i.ibb.co.com/YB945drb/banner.png"
      className="max-w-sm rounded-lg shadow-2xl"
    />
  </div>
    <div className='w-[50%]  sp-6'>
        <p className="badge py-4 mb-2 badge-soft badge-secondary">New: AI-Powered Tools Available</p>
      <h1 className="text-2xl md:text-5xl font-bold">Supercharge Your Digital Workflow</h1>
      <p className="py-6">
        Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.

Explore Products
      </p>
     <div className='md:flex lg:flex justify-center gap-4'>
         <button className="btn btn-primary rounded-full">Explore Products</button>
      <button className="btn btn-soft btn-primary rounded-full">Watch Demo</button>
     </div>
    </div>
  </div>
</div>
    );
};

export default Herosection;