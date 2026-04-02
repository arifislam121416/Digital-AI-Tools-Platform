import React, {useEffect, useState } from 'react';
import ModelCart from './ModelCart';


const Models = ({modelPromise,carts,setCarts}) => {

   const [models, setModels] = useState([]);

  useEffect(() => {
    modelPromise.then(data => setModels(data));
  }, []);
    
   
    return (
            <div className='space-y-4 mt-10'>
            <div className='grid sm:grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3' >
                
                {models.map(model=>

                <ModelCart key={model.id} model={model} carts={carts} setCarts={setCarts} />

            )}
            </div>


            </div>
        
    );
};

export default Models;