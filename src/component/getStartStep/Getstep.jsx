import React from 'react';
import UserImg from '../../assets/user.png'
import PackageImg from '../../assets/package.png'
import RocketImg from '../../assets/rocket.png'

const Getstep = () => {
    return (
        <div className='p-10 space-y-10  bg-gray-200 mt-6 text-center'>
            <div>
                <h1 className='text-4xl font-bold '>Get Started in 3 Steps</h1>
            <p className='m-2 font-semibold'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='grid space-y-4 lg:grid-cols-3 md:grid-cols-2 items-center justify-between gap-4 mt-4'>
<div className='bg-gray-50 text-center space-y-4  p-10 w-90 h-90 rounded-3xl' >
    <div className='flex justify-betwe/en'>
       <img className='w-30 m-2 bg-gray-200 p-4 rounded-full h-30 mx-auto' src={UserImg} alt="" />
        <button className='btn btn-primary rounded-full'>01</button>
    </div>
<h2 className='text-3xl font-bold'>Create Account</h2>
<p>Sign up for free in seconds. No credit card required to get started.</p>
</div>

<div className='bg-gray-50 p-6 space-y-4 w-90 h-90 rounded-3xl'>
    <div className='flex justify-between'>
        <img className='w-30 m-2 bg-gray-200 p-4 rounded-full h-30 mx-auto' src={PackageImg} alt="" />
        <button className='btn btn-primary rounded-full'>02</button>
    </div>
<h2 className='text-3xl font-bold'>Choose Products</h2>
<p>Browse our catalog and select the tools that fit your needs.</p>
</div>

<div className='bg-gray-50 space-y-4 p-6 w-90  h-90 rounded-3xl'>
    <div className='flex justify-between'>
        <img className='w-30 m-2 bg-gray-200 p-4 rounded-full h-30 mx-auto' src={RocketImg} alt="" />
         
        <button className='btn btn-primary rounded-full'>03</button>
    </div>
<h2 className='text-3xl font-bold'>Start Creating</h2>
<p>Download and start using your premium tools immediately.</p>
</div>
            </div>
        </div>
    );
};

export default Getstep;