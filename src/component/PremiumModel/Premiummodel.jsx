import { use } from 'react';
import Modelcart from "../ModelCart/Modelcart";



const Premiummodel = ({premiumPromise}) => {
   const premiumModel =use(premiumPromise)
   


    return (
       
       <div className='space-y-4 mt-4'>
         <div className='flex gap-3 justify-center'>
                        <button className="bg-gradient-to-r text-2xl font-bold from-indigo-500 to-purple-600 text-white p-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">Products</button>
                        <button className='btn rounded-full p-6 text-2xl font-bold'>Cart</button>
                    </div>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-[#ffffffFF]'>
            
            {
            premiumModel.map(model => (
  <Modelcart 
     key={model.id}
  model={model}
  />
))
                
            }
        </div>
       </div>
      
    );
};

export default Premiummodel;