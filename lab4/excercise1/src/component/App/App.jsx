import './App.css';
import Footer from '../Footer/footer';
import TemperatureConverter from '../Temperature/TemperatureInput';
export default function App() {

  return (
    <div className="App">
      <TemperatureConverter></TemperatureConverter>
      <Footer></Footer>
    </div>
  );
}
