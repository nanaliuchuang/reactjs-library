import './App.css';

function App() {
  return (
    <div className='text'>
      <h1>Hello, I am Clock</h1>
      <h6>{(calcTime('Viet Nam ', '+7'))}</h6>
    </div>
  );
}
function calcTime(city, offset) {



  var d = new Date();



  var utc = d.getTime() + (d.getTimezoneOffset() * 60000);



  var nd = new Date(utc + (3600000*offset));



  return "Now"+' '+ city +" is "+ nd.toLocaleString();

}
export default App;