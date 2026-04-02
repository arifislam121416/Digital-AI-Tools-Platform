import React from 'react';

const TabsModel = ({activeTabe,setActiveTabe}) => {
    console.log(activeTabe);

    return (
      
<div className="tabs justify-center tabs-box mt-4 bg-transparent">
  <input onClick={()=>setActiveTabe("Product")} type="radio" name="my_tabs_1" className="tab w-40 rounded-full" aria-label="Product" />
  <input onClick={()=>setActiveTabe("Cart")} type="radio" name="my_tabs_1" className="tab w-40 rounded-full" aria-label="Cart" defaultChecked />
  
</div>
    );
};

export default TabsModel;