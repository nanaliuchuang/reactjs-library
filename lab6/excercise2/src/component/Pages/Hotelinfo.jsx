import React from "react";
const imgages = [{src: '5.avif',title: 'INDONESIA', cate: 'Bali',price:'24'},
{src: '6.avif',title: 'THAILAND', cate: 'Bangkok',price:'59'},
{src: '7.avif',title: 'SPAIN', cate: 'Barcelona',price:'63'},
{src: '8.avif',title: 'CHINA', cate: 'Beijing',price:'42'},
{src: '9.avif',title: 'GERMANY', cate: 'Berlin',price:'36'},
{src: '10.avif',title: 'CARIBEAN + BERMUDA', cate: 'Bermuda',price:'48'},
{src: '11.avif',title: 'UNITED STATES', cate: 'Boston',price:'52'},
{src: '12.avif',title: 'ARGENTINA', cate: 'Buenos Aires',price:'45'},
{src: '13.avif',title: 'SOUTH AFRICA', cate: 'Cape Town',price:'64'}];
export default function HotelInfo(){
    return(
        <div className="container px-4 py-5" id="hanging-icons">
        <h2 className="pb-2 text-center fw-bolder fs-1">What We Offer</h2>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit perspiciatis </p>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        {imgages.map(img =>(
            <div class="card text-light border border-white">
            <img src={`/img/${img.src}`} class="card-img w-100 h-100 c" alt="..."/>
            <div class="card-img-overlay d-flex align-items-start flex-column mb-3">
              <div class="card-title mb-auto p-2"></div>
              <p class="card-text px-2 fs-3 fw-semibold">{img.cate}</p>
              <p class="card-text px-2 fs-3 fw-semibold">Hotel <small className="fw-bold text-warning">{img.price} &euro;</small></p>
            </div>
          </div>
        ))}
        </div>
      </div>
    )
}