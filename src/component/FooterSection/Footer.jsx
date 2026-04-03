import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='pt-20 pb-10 px-4 bg-[#101727] text-white'>

            <div className='flex justify-between gap-6'>

                <div>
                    <h1 className='text-4xl font-bold'>DigitalTools</h1>
                    <p className='w-50'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>

                </div>

                <div className='space-y-6'>
<h3 className='text-2xl font-semibold'>Product</h3>
<p>Features</p>
<p>Pricing</p>
<p>Templates</p>
<p>Integrations</p>
                </div>

                <div className='space-y-6'>
<h2 className='text-2xl font-semibold'>Company</h2>
<p>About</p>
<p>Blog</p>
<p>Careers</p>
<p>Press</p>
                </div>

                <div className='space-y-6'>
<h2 className='text-2xl font-semibold'>Resources</h2>
<p>Documentation</p>
<p>Help Center</p>
<p>Community</p>
<p>Contact</p>

                </div>

                <div>
                    <h2>Social Links</h2>
                    <div className='flex mt-4 gap-4'>
                        <p><FaInstagram className='bg-gray-200 w-10 h-10 rounded-full text-black p-2' /></p>
                        <p><FaFacebookSquare className='bg-gray-200 w-10 h-10 rounded-full text-black p-2' /></p>
                        <p><FaXTwitter className='bg-gray-200 w-10 h-10 rounded-full text-black p-2' /></p>
                    </div>
                </div>
            </div>
<hr className='mt-4 mb-4'/>
            <div className='flex justify-between'>
<p>© 2026 Digitools. All rights reserved.</p>
<div className='flex gap-6'>
    <p>Privacy Policy</p>
    <p>Terms of Service</p>
    <p>Cookies</p>
</div>
            </div>
        </div>
    );
};

export default Footer;