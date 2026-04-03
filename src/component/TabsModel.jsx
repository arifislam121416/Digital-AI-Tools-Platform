import React from 'react';

const TabsModel = ({activeTabe,setActiveTabe,carts}) => {
   

    return (
      
<div className="tabs justify-center bg-linear-to-r  from-purple-900 to-blue-600 text-black text-2xl font-semibold m-10 rounded-full mx-auto items-center w-90 h-20  tabs-box mt-5 bg-transparent">
  
  <input onClick={()=>setActiveTabe("Product")} type="radio" name="my_tabs_1" className="tab font-bold text-xl w-40 rounded-full" aria-label="Product" defaultChecked />

  <input onClick={()=>setActiveTabe("Cart")} type="radio" name="my_tabs_1" className="tab font-bold text-xl w-40 rounded-full" aria-label={`Cart (${carts.length})`} />
  
</div>
    );
};

export default TabsModel;