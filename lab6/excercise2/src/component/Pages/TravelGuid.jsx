import React from "react";
import css from "../App/App.css";
const background = [{src:'14.avif'}];
export default function TravelGuide(){
    return(
        <div className="bg-light position-relative w-100 hi">
        {background.map(img =>(
        <img src={`/img/${img.src}`} className='logo' />
        ))}
      <div className="container p-5 position-relative w-100 d-flex flex-column text-light align-items-center">
        <p className="fs-4 mt-5 fw-bold">World Travel Guide</p>
        <div class="input-group">
                <input class="form-control border-end-0 border rounded-pill bg-opacity-10 bg-light text-light text-center" type="search" value="Where would you like to go?" id="example-search-input"/>
                <span class="input-group-append">
                    <button class="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill ms-n5 bg-opacity-10 text-light" type="button">
                    <i class="bi bi-search"></i>
                    </button>
                </span>
            </div>
      </div>
    </div>
    )
}