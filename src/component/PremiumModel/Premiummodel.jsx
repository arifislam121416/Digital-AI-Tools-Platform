import React, { use } from 'react';

const Premiummodel = ({premiumPromise}) => {
   const premiumModel =use(premiumPromise)
    console.log(premiumModel);
    return (
       
       <div className='space-y-4 mt-4'>
         <div className='flex gap-3 justify-center'>
                        <button className="bg-gradient-to-r text-2xl font-bold from-indigo-500 to-purple-600 text-white p-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">Products</button>
                        <button className='btn rounded-full p-6 text-2xl font-bold'>Cart</button>
                    </div>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-[#ffffffFF]'>
            
            {
                premiumModel.map(model =>
                <div>
                   
                     <div key={model.id}  className='bg-[#f1eded] w-[380px] h-[412px] space-y-2 shadow-gray-400 p-6 gap-4 rounded-2xl'>
                    <div className='flex justify-between gap-4'>
                    <img 
                    src={model.image} 
                    alt={model.name}
                    className="w-full h-40 object-cover rounded-xl"
                    />
                     <h1 className='btn rounded-3xl  p-4 bg-yellow-400'>{model.tagType}</h1>
                    </div>
                        <h1 className='text-3xl font-bold'>{model.name}</h1>
                        <h1>{model.description}</h1>
                        <div className='flex gap-2 items-center'>
                            <h1 className='text-3xl font-semibold'>{model.price}</h1>
                        <h1>{model.period}</h1>
                        </div>
                       
                       <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full w-full">
  Buy Now
</button>
                        </div>
                </div>
                )
            }
        </div>
       </div>
      
    );
};

export default Premiummodel;