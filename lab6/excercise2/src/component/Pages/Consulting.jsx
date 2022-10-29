import React from "react";
const albums = [
    {src: '5.avif',title: 'INDONESIA', cate: 'Bali'},
    {src: '6.avif',title: 'THAILAND', cate: 'Bangkok'},
    {src: '7.avif',title: 'SPAIN', cate: 'Barcelona'},
    {src: '8.avif',title: 'CHINA', cate: 'Beijing'},
    {src: '9.avif',title: 'GERMANY', cate: 'Berlin'},
    {src: '10.avif',title: 'CARIBEAN + BERMUDA', cate: 'Bermuda'},
    {src: '11.avif',title: 'UNITED STATES', cate: 'Boston'},
    {src: '12.avif',title: 'ARGENTINA', cate: 'Buenos Aires'},
    {src: '13.avif',title: 'SOUTH AFRICA', cate: 'Cape Town'}
]
export default function Consulting(){
    return(
        <div className="container px-4 py-5">
            <h2 className="pb-2 text-center fw-bolder fs-1">What We Offer</h2>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit perspiciatis </p>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        {albums.map(img =>(
          <div className="col d-flex align-items-start" >
                <div className="text-center bg-dark bg-opacity-10 border border-success p-2 mb-2 border-opacity-25 h-100">
                <img src={`/img/${img.src}`} className='w-100 img'/>
              <h3 className="fs-6 fw-bolder text-info mt-2">{img.title}</h3>
              <p className="fs-4">{img.cate}</p>
            </div>
          </div>
            ))}
        </div>
        </div>
    )
}