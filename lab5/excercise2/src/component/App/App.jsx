import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ba from '../../img/1.avif';
import { Button } from 'react-bootstrap'
import img1 from '../../img/2.avif'
import img2 from '../../img/3.avif'
import img3 from '../../img/4.avif'
export default function App() {
	return (
		<div className="App">
			<header className="d-flex justify-content-between align-items-center mx-5 bg-light">
				<a href="#" className="fs-1 logo text-success text-decoration-none fw-semibold">Travel <span className="text-info">Agency</span></a>
				<div className="d-flex justify-content-around align-items-center ">
					<p className="my-3">Connect with us: </p>
					<div className="sci mx-2">
						<i class="bi bi-facebook mx-2"></i>
						<i class="bi bi-twitter"></i>
					</div>
					<div className="d-flex justify-content-between align-items-center bg-success text-light">
						<i class="bi bi-telephone-fill fs-3 mx-2 mb-4"></i>
						<div className="mx-2">
							<p className="my-2 fs-5">Call us for More information</p>
							<p className="fs-4">(847) 613-8094</p>
						</div>
					</div>
				</div>
			</header>
			<div className="imgBx">
				<img src={ba} className="w-100" />
				<div className="position-relative text-light d-flex justify-content-center px-5 pt-1 flex-column">
					<h2 className="pt-5 fw-light">See what the Buzz is all About</h2>
					<h1 className="mb-4">International Travel Agency</h1>
				</div>
				<Button variant="danger" className="position-relative mx-5 position-relative text-uppercase fw-bolder">Get the best offer</Button>
			</div>
			<div class="position-fixed top-30 w-100 bg-secondary bg-opacity-25">
				<div className="position-relative d-flex justify-content-center align-items-center">
			<Button variant="danger" className="p-4 m-3 fs-4 text-uppercase fw-bolder text-light"><i class="bi bi-wechat me-2"></i>Consulting</Button>
			<Button variant="info" className="p-4 m3-3 fs-4 text-uppercase fw-bolder text-light"><i class="bi bi-airplane-fill me-2"></i>Travel Guide</Button>
			<Button variant="success" className="p-4 m-3 fs-4 text-uppercase fw-bolder text-light"><i class="bi bi-calendar3 me-2"></i>Hotel info</Button>
			</div>
			<div className="position-relative w-100 bg-light">
				<h1 className="fw-bold text-center ">Whet We Offer</h1>
				<p className="fs-5 text-uppercase fw-semibold text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
				<div className="d-flex justify-content-evenly px-5">
					<div className="d-flex flex-column px-5 b">
				<img src={img1} className="w-100 a" />
				<h2 className="fw-bold ">Loren Ipsum Dolor</h2>
				<p>Optatibus consectetur non soluta iste ullam nisi ipsum, nam earum fugit officia dignissimos voluptate minus eos porro?</p>
					</div>
					<div className="d-flex flex-column px-5 b">
				<img src={img2} className="w-100 a" />
				<h2 className="fw-bold ">Set Ut Perspiciatis</h2>
				<p>Optatibus consectetur non soluta iste ullam nisi ipsum, nam earum fugit officia dignissimos voluptate minus eos porro?</p>
					</div>
					<div className="d-flex flex-column px-5 b">
				<img src={img3} className="w-100 a" />
				<h2 className="fw-bold ">Tempor Incididunt</h2>
				<p>Optatibus consectetur non soluta iste ullam nisi ipsum, nam earum fugit officia dignissimos voluptate minus eos porro?</p>
					</div>
				</div>
			</div>
			<footer className="position-relative w-100 bg-dark text-light text-center">
				 <p className="fs-6" >&copy; Copyright 2022.All Rights Reverved | Designed by nanaliuchuang@gmail.com </p>
			</footer> 
			</div>
		</div>
	)
}