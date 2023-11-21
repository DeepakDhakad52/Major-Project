import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-300 py-12 p-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6">
          <h3 className="text-2xl font-bold">Company<span className="text-yellow-500">logo</span></h3>
          <div className="text-gray-600">
            <a href="#/" className="block mb-2">Home</a>
            <a href="#/" className="block mb-2">Pricing</a>
            <a href="#/" className="block mb-2">About</a>
            <a href="#/" className="block">Contact</a>
          </div>
          <p className="text-gray-500">Company Name © 2015</p>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6">
          <div className="flex items-center mb-4">
            <i className="fa fa-map-marker text-gray-600 text-2xl mr-2"></i>
            <p><span className="text-gray-800">444 S. Cedros Ave</span> Solana Beach, California</p>
          </div>

          <div className="flex items-center mb-4">
            <i className="fa fa-phone text-gray-600 text-2xl mr-2"></i>
            <p>+1.555.555.5555</p>
          </div>

          <div className="flex items-center">
            <i className="fa fa-envelope text-gray-600 text-2xl mr-2"></i>
            <p><a href="mailto:support@company.com" className="text-blue-500">support@company.com</a></p>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6">
          <p className="text-gray-600">
            <span className="font-bold">About the company</span> Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
