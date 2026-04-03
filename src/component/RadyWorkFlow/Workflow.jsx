import React from 'react';

const Workflow = () => {
    return (
        <div className='text-center bg-linear-to-r  from-purple-900 to-blue-600 text-white p-30'>
            <div className='space-y-3'>
                <h1 className='text-4xl font-bold'>Ready to Transform Your Workflow?</h1>
                <p className='w-100 mx-auto'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
            </div>
            <div className='space-y-3'>
                <div className='mt-4 space-x-3'>
                    <button className='btn rounded-full bg-white'>Explore Products</button>
                    <button className='btn rounded-full bg-gray-600 btn-soft'>View Pricing</button>
                </div>
                <p>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Workflow;