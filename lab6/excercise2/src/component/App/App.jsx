import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, Route,Routes} from 'react-router-dom';
import Home from '../Pages/Home';
import Consulting from '../Pages/Consulting';
import HotelInfo from '../Pages/Hotelinfo';
import TravelGuide from '../Pages/TravelGuid';
const logo = [{src:'4.avif'}];

function App() {
  return (
    <div className="App">
    <div className="d-flex w-100 h-100 flex-column">
      <header className="w-100 d-flex justify-content-around">
          <Link to={'/'} className='link'><h2 className="text-success fw-semibold pt-2">Travel <span className='text-info'>Agency</span></h2></Link>
          <ul className="d-flex list-unstyled mb-0">
            <li className='mx-1 mt-3 fw-bolder'>Connect with us: </li>
            <li className='mx-1 mt-3'><i class="bi bi-facebook"></i></li>
            <li className='mx-1 mt-3'><i class="bi bi-twitter"></i></li>
            <li className='ms-1 bg-success p-2 d-flex align-items-center text-light'><i class="bi bi-telephone-fill mx-2"></i>
            <ul className='d-flex flex-column list-unstyled  bg-success'>
              <li>Call us More Information</li>
              <li className='fw-bolder'>(847) 613-8094</li>
            </ul>
            </li>
          </ul>
      </header>
      
      <div className="bg-light position-relative w-100">
        {logo.map(img =>(
        <img src={`/img/${img.src}`} className='logo' />
        ))}
      <div className="container-fluid p-5 position-relative w-100 text-light">
        <h1 className="display-5 fw-normal">See what the BUZZ is all about!</h1>
        <p className="col-md-8 fs-4 fw-bold">International Travel Agency</p>
        <button className="btn btn-primary btn-danger fw-semibold" type="button">GET THE BEST OFFER</button>
      </div>
    </div>

    <main className='position-reative w-100 d-md-flex justify-content-evenly py-4 bg-dark bg-opacity-10 d-sm-block'>
    <Link to={'/consulting'} className='d-flex p-4 py-5 al bg-danger text-light link'>
    <i className="bi bi-wechat fs-3"></i>
    <h2 className='mx-3'>Consulting</h2>
    </Link>
    <Link to={'/travelguide'} className='d-flex p-4 py-5 bg-info text-light link'>
    <i className="bi bi-airplane-fill fs-3"></i>
    <h2 className='mx-3'>Travel Guide</h2>
    </Link>
      <Link to={'/hotelinfo'} className='d-flex p-4 py-5 bg-success text-light link'>
    <i className="bi bi-journal-richtext fs-3"></i>
    <h2 className='mx-3'>Hotel Info</h2>
    </Link>
    </main>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/consulting' element={<Consulting></Consulting>}></Route>
      <Route path='/hotelinfo' element={<HotelInfo></HotelInfo>}></Route>
      <Route path='/travelguide' element={<TravelGuide></TravelGuide>}></Route>
      <Route></Route>
    </Routes>
      <footer className="pt-2 text-center bg-dark">
        <p className='fs-5 text-light'>&copy; Nanaliuchuang-2022</p>
      </footer>
    </div>
    </div>
  );
}

export default App;
