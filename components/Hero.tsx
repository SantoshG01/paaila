'use client';

import Image from "next/image";
import Link from "next/link";

const SplitHero = () => {
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-[auto] flex flex-col md:flex-row">
      {/* Left Content Section */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
        <div className="max-w-lg mx-auto space-y-6">
          {/* <span className="inline-block px-4 py-2 bg-indigo-600 text-white  rounded-full text-sm font-bold">
            Festive Offer🎇
          </span> */}
          
          <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold text-gray-900">
            Walk Your Way With <br className="hidden sm:block" /> <span className="font-extrabold text-purple-600">PAAILA👟</span>
          </h1>
          
          <p className="text-lg text-gray-600">
            Explore Paila’s exclusive collection of shoes, crafted for ultimate comfort, modern style, and every step of your journey.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/products">
              <button className="px-6 py-3 bg-purple-700 text-white rounded hover:bg-purple-800 transition-colors">
                Shop Now
              </button>
            </Link>
            {/* <Link href="/products">
              <button className="px-6 py-3 border border-gray-300 rounded text-white bg-indigo-600 hover:bg-indigo-700 transition-colors">
                View Collection
              </button>
            </Link> */}
          </div>
          
          <div className="pt-6 flex items-center gap-4">
           
            {/* <span className="text-sm text-gray-500">
              Trusted by many customers . 
            </span> */}
          </div>
        </div>
      </div>

 {/* Right Image Section */}
<div
  className="w-full md:w-1/2 relative flex justify-center 
             h-[45vh] md:h-[52vh] lg:h-[60vh] max-h-[600px]
 
             mt-6 md:mt-0 md:mr-20"
>
  <Image
    src="https://res.cloudinary.com/ddgmeh112/image/upload/v1758962773/download_7_fafjf1.jpg"
    alt="Stylish models wearing summer collection"
    fill
    priority
    className="object-contain object-top md:mt-12 md:ml-6"
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
  />
</div>




    </section>
  );
};

export default SplitHero;
