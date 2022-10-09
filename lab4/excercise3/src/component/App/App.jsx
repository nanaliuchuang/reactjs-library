import React from "react";
import Footer from "../Footer/footer";
import './App.css'
const photoAlbum = [
	{id:'1',src:'1.jpg',title:'img1'},
	{id:'2',src:'2.jpg',title:'img2'},
	{id:'3',src:'3.jpg',title:'img3'},
	{id:'4',src:'4.jpg',title:'img4'},
	{id:'5',src:'5.jpg',title:'img5'},
	{id:'6',src:'6.jpg',title:'img6'},
	{id:'7',src:'7.jpg',title:'img7'},
	{id:'8',src:'8.jpg',title:'img8'},
	{id:'9',src:'9.jpg',title:'img9'}
];

export default function App(){
	return(
		<div className="App">
			<h1>Album Image</h1>
			<div className="container">
			<div className="imgBx">{photoAlbum.map(image => <img src={`/img/${image.src}`} title={image.title} />)}
		<Footer></Footer>
			</div>
		</div>
		</div>
	)
}