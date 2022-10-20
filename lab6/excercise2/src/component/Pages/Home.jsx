import React from "react";
const imgages = [{src: '1.avif',title: 'LOREM IPSUM DOLOR'},
{src: '2.avif',title: 'SET UP PERSPICIATIS'},{src: '3.avif',title:'TEMPOR INCIDIDUNT'}];

export default function Home(){
    return(
        <div className="container px-4 py-5" id="hanging-icons">
        <h2 className="pb-2 text-center fw-bolder fs-1">What We Offer</h2>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit perspiciatis </p>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        {imgages.map(img =>(
          <div className="col d-flex align-items-start ">
                <div >
                <img src={`/img/${img.src}`} className='img'/>
              <h3 className="fs-3 fw-bolder mt-2">{img.title}</h3>
              <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            </div>
          </div>
            ))}
        </div>
      </div>
    )
}