import React from 'react';

function Gallery() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
    <div>
      <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8 mt-6 ml-6 mr-6 mb-6">
        <div>
          <img src="/images/1.jpg" alt="" loading="lazy" className="w-full h-auto"/>
        </div>
        <div className="col-start-3">
          <img src="/images/2.jpg" alt="" loading="lazy" className="w-full h-auto"/>
        </div>
        <div>
          <img src="/images/3.jpg" alt="" loading="lazy" className="w-full h-auto"/>
        </div>
        <div>
          <img src="/images/4.jpg" alt="" loading="lazy" className="w-full h-auto"/>
        </div>
        <div className="row-start-1 col-start-2 col-span-2">
          <img src="/images/5.jpg" alt="" loading="lazy" className="w-full h-auto"/>
        </div>
      </div>
    </div></main>
  );
}

export default Gallery;
