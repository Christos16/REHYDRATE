import React from 'react';

function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">What We Do</h2>
             <p className="text-xl text-gray-600">The system is characterized as a microgrid which consists of a pump for pumping water from underground wells, a filtration system for filtering the pumped water into drinking water and an intelligent payment system specifically designed for reliable and transparent transactions in the form of water-credit tokens. The whole process is powered by a photovoltaic system that is installed on site for solar energy collection</p>

          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
          
          <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
  <div style={{padding: "10px", borderRadius: "100px", background: "linear-gradient(45deg, #216f96, #48bfd8)"}}>
  <img style={{width: "100px", height: "100px"}} src="https://drive.google.com/uc?id=1NyxHOUdGWQpghRxhu2hynj9uAtUfeaoy&export=download"/>
  </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Solar Water System</h4>
              <p className="text-gray-600 text-center">Further explanations...</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
  <div style={{padding: "10px", borderRadius: "100px", background: "linear-gradient(45deg, #216f96, #48bfd8)"}}>
  <img style={{width: "100px", height: "100px"}} src="https://drive.google.com/uc?id=1VSlkgidJuTqMgn4lCi4krL8lZ4ErSxwN&export=download"/>
  </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Smart Payment Cards</h4>
              <p className="text-gray-600 text-center">Further explanations...</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
  <div style={{padding: "10px", borderRadius: "100px", background: "linear-gradient(45deg, #216f96, #48bfd8)"}}>
  <img style={{width: "100px", height: "100px"}} src="https://drive.google.com/uc?id=1NxdxUoLH6iw9MVWhfgsAMsU5Rrj5d_rS&export=download"/>
  </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Water Management System</h4>
              <p className="text-gray-600 text-center">Further explanations...</p>
            </div>

            {/* 4th item 
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g transform="translate(22.857 19.429)" strokeWidth="2">
                    <path className="stroke-current text-white" strokeLinecap="square" d="M12.571 4.571V0H0v25.143h12.571V20.57" />
                    <path className="stroke-current text-white" d="M16 12.571h8" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M19.429 8L24 12.571l-4.571 4.572" />
                    <circle className="stroke-current text-blue-300" strokeLinecap="square" cx="12.571" cy="12.571" r="3.429" />
                  </g>
                </g>
              </svg>              
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Fast Prototyping</h4>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
*/}
            {/* 5th item 
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeLinecap="square" strokeWidth="2">
                    <path className="stroke-current text-white" d="M20.571 20.571h13.714v17.143H20.571z" />
                    <path className="stroke-current text-blue-300" d="M38.858 26.993l6.397 1.73-4.473 16.549-13.24-3.58" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Design Phase</h4>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
*/}
            {/* 6th item 
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-white" d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714" />
                    <path className="stroke-current text-white" d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286" />
                    <path className="stroke-current text-white" d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286" />
                    <path className="stroke-current text-blue-300" d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572" strokeLinecap="square" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Develop & Launch</h4>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
*/}
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
