import './App.css';
import logo from '../../logo.png'
import Button from '../Button/button';
import Footer from '../Footer/footer';
function App() {

  const onTimesup = () => {
    alert(`Thời gian đã hết!`)
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='content'>
        <div className='imgBx'>
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>Countdown đếm ngược</p>
        </div>
        <div className='clock'>
          <span></span>
          <Button></Button>
        </div>
      </header>
      <div className='container'>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;