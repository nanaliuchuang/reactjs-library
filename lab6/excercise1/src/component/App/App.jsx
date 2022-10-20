import { Link, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../../Page/Home';
import Manage from '../../Page/Manage';
import bg from '../../bg.png';
import './App.css';
import { Nav} from 'react-bootstrap'
function App() {
  return (
    <div className='App'>
      <main >
        <div class="container py-2">
          <img src={bg} alt="" className='img-fluid w-100 rounded' />
          <div class="row align-items-md-stretch">
            <div class="col-md-9 pt-2">
              <div class="h-100 px-3 py-3 text-bg-light">
                <Routes>
                  <Route path='/' element={<Home></Home>}></Route>
                  <Route path='/manage' element={<Manage></Manage>}></Route>
                </Routes>
              </div>
            </div>
            <div class="col-md-3 pt-2 link">
              <div class="h-100 p-0 pb-5 bg-light bg-opacity-25">
                <Nav defaultActiveKey="/home" className="flex-column">
                  <Nav.Link className='border-bottom border-info'>
                    <Link to='/' className='text-decoration-none text-info fw-semibold fs-5'>Balo Laptop</Link>
                  </Nav.Link>
                  <Nav.Link className='border-bottom border-info'>
                    <Link to='/' className='text-decoration-none text-info fw-semibold fs-5'>Balo Camera</Link>
                  </Nav.Link>
                  <Nav.Link className='border-bottom border-info'>
                    <Link to='/' className='text-decoration-none text-info fw-semibold fs-5'>Túi xách</Link>
                  </Nav.Link>
                  <Nav.Link className='border-bottom border-info'>
                    <Link to='/' className='text-decoration-none text-info fw-semibold fs-5'>Vali</Link>
                  </Nav.Link>
                  <Nav.Link className='border-bottom border-info'>
                    <Link to='/manage' className='text-decoration-none text-info fw-semibold fs-5'>Quản lý</Link>
                  </Nav.Link>
                </Nav>
              </div>
            </div>
          </div>

          <footer class="pt-3 mt-4 text-muted border-top text-center">
            &copy; Nanaliuchuang-2022
          </footer>
        </div>
      </main>

    </div>
  )
}

export default App;
