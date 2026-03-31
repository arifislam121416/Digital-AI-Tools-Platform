import React, { useState } from 'react';
import { IoMdCheckmarkCircle } from "react-icons/io";

const Modelcart = ({model}) => {
    const [ modelCart ,setModelCart] = useState(false)

    return (
           <div>
            <div>
                   
                     <div  className='bg-[#f1eded] min-h-96 w-[380px]  space-y-1 shadow-gray-400 p-6 gap-1 rounded-2xl'>
                    <div className='flex justify-between gap-2'>
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
                        <p className='flex gap-2 items-center'><span className="text-green-500"><IoMdCheckmarkCircle /></span>{model.features}</p>
                        <p className='flex gap-2 items-center'><span className="text-green-500"><IoMdCheckmarkCircle /></span>{model.feature}</p>
                        <p className='flex gap-2 items-center'><span className="text-green-500"><IoMdCheckmarkCircle /></span>{model.featur}</p>
                    
                        <button onClick={() => setModelCart(!modelCart)} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full w-full">
                        {modelCart ? "Added" : "Buy Now"}
                        </button>
                        </div>
                </div>
        </div>
    );
};

export default Modelcart;