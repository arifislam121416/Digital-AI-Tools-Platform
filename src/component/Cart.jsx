

const Cart = ({carts,setCarts}) => {

    const tottalPrice = carts.reduce((sum,items) => sum + items.price,0)
    
   const handlePayment = () =>{
    setCarts([])
   }

    return (
        <div className='bg-gray-300 rounded-3xl p-10 mt-6 space-y-2'>
            <h1>Your Cart</h1>
            <div className="space-y-5">
{
    carts.map(item => <div className="border p-3 bg-gray-100 gap-3 rounded-3xl" key={item.id}>

    <div className="flex justify-between gap-2 items-center">
       <div className="flex  gap-2 items-center">
         <img className=" w-20 h-20 rounded-full object-contain" src={item.image} />
        <div>
            <h1 className="text-2xl font-semibold">{item.name}</h1>
            <p>$ {item.price}</p>
        </div>
       </div>
        <button className="btn btn-error rounded-full">Remove</button>
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
        </div>
    );
};

export default Cart;