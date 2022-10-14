import React from "react";
import Footer from "../Footer/footer";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Timer from "../CountDownload/CountDownload";
import my from '../../my.avif'
export default function App() {
	return (
		<div className="App">
			<img src={my} alt="" />
			<div className="fs-1 text-center">
				<p><i class="fw-bold bi bi-calendar2-heart"></i></p>
				<p className="fw-bold">We're comming soon</p>
				<p className="fw-bolder fs-4 text-center">We are working very hard on the new version of our site. <br />
				It will bring a lot of new features. Stay tuned!</p>
				<p className="fst-italic fw-bolder rounded-pill border border-danger p-3 border border-5"><Timer duration={25 * 32 * 56 * 46 * 1000}></Timer></p>
				</div>
			<Footer></Footer>
		</div>
	)
}