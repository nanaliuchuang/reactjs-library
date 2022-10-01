import logo from '../.././logo.svg';
import CurentInput from '../Current/current';
import './App.css';
import Footer from '../Footer/footer';

function App() {
  return (
    <div className="App">
      <CurentInput currencies={{}}/>
      <Footer/>
    </div>
  );
}

export default App;
