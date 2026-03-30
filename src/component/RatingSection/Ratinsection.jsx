import React from 'react';

const Ratinsection = () => {
    return (
        <div className='bg-[#8b39f6d2] text-white flex-none md:flex md:justify-between py-15 px-[200px]'>
            <div>
                <h1 className='text-4xl font-bold'>50K+</h1> 
                <p className='mt-1'>Active Users</p>
            </div><hr className='w-[10%] rotate-90 items-center justify-center mt-10'></hr>
            <div>
                <h1 className='text-4xl font-bold'>200+</h1>
                <p className='mt-1'>Premium Tools</p>
            </div><hr className='w-[10%] rotate-90 items-center justify-center mt-10'></hr>
            <div>
                <h1 className='text-4xl font-bold'>4.9</h1>
                <p className='mt-1'>Rating</p>
            </div>
        </div>
    );
};

export default Ratinsection;