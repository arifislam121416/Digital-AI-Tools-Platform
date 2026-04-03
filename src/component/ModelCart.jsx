import { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";


const ModelCart = ({model,carts,setCarts}) => {
   
 const [isModel,setIsModel] = useState(false);

 const handleBuyNow = ()=>{
   setIsModel(true)

const isFound = carts.find(item => item.id === model.id)

if(isFound){
  toast.error("Allredy Cart Added")
  return
}

   setCarts([...carts, model])
   toast.success("Success Added to Cart")
 }
    
    return (
       
 <div className='min-h-96 w-[412px] p-8 space-y-4 rounded-4xl  bg-gray-200'>

                   <div className='flex justify-between'>
                     <img className='w-20 h-20 rounded-full bg-gray-100 p-2' src={model.image} alt="" />
                     <button className= "btn rounded-full btn-warning" >
                        {model.tag}
                     </button>
                   </div>

                    <h1 className='text-3xl font-bold'>{model.name}</h1>

                    <h1>{model.description}</h1>

                    <p><span className='text-3xl font-semibold'>$ {model.price}</span> / { model.period}</p>

                   <div>
                     <p className='flex gap-2 items-center '><IoMdCheckmarkCircleOutline className='text-green-500' /> {model.features}</p>

                    <p className='flex gap-2 items-center'><IoMdCheckmarkCircleOutline className='text-green-500' /> {model.feature}</p>

                    <p className='flex gap-2 items-center'><IoMdCheckmarkCircleOutline className='text-green-500' /> {model.featur}</p>
                   </div>
                   <button onClick={handleBuyNow} className='btn w-full text-xl bg-linear-to-r  from-purple-900 to-blue-600 text-white rounded-full'>
                    {isModel ? "Added" : "Buy Now"}
                    </button>
                  </div>

               
    );
};

export default ModelCart;