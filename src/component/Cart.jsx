import { FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";

const Cart = ({carts,setCarts}) => {

    const tottalPrice = carts.reduce((sum,items) => sum + items.price,0)
    
   const handlePayment = () =>{
    setCarts([])
    toast.success("Successfull Payment")
   }

   const handleRemove = (item) =>{
    
    const filterArray = carts.filter(c => c.id !== item.id)

    setCarts(filterArray)
    toast.error("Delet to Cart")
   }

    return (
        <div className='bg-gray-300 rounded-3xl p-10 mt-6 space-y-2'>
            <h1 className="text-4xl font-bold mb-4">Your Cart</h1>

{
    carts.length === 0 ? <div className=" bg-gray-100 p-10 md:h-50 text-center md:w-150 rounded-3xl mx-auto items-center">
        <div>
            <p className="w-10 h-10 text-4xl mb-4 mx-auto"><FaShoppingCart /></p>
        </div>
       <div>
         <p className="text-4xl font-bold ">Cart is Empty</p>
         <p className="font-semibold mt-2">Pleace Select Product</p>
       </div>
    </div>
     :
      <>
    
    
            <div className="space-y-5">
{
    carts.map(item => <div className="border p-3 bg-gray-100 gap-3 rounded-3xl" key={item.id}>

    <div className="flex justify-between gap-2 items-center">
       <div className="flex  gap-2 items-center">
         <img className=" w-20 h-20 rounded-full object-contain" src={item.image} />
        <div>
            <h1 className="text-2xl font-bold">{item.name}</h1>
            <p className="text-2xl font-semibold">$ {item.price}</p>
        </div>
       </div>
        <button onClick={() => handleRemove(item)} className="btn btn-error rounded-full">Remove</button>
    </div>

    </div>
)
}
            </div>
<div className="flex justify-between bg-gray-100 mt-4 p-5 rounded-2xl">
    <div>
        <h1 className="text-3xl font-bold">Tottal</h1>
    </div>
    <div>
        <p className="text-3xl font-bold">$ {tottalPrice}</p>
    </div>
</div>

            <button onClick={handlePayment} className='btn text-2xl  rounded-full w-full bg-linear-to-r from-pink-600 to-blue-500 text-white'>Proceed to Checkout</button>
    </>
}

        </div>
    );
};

export default Cart;