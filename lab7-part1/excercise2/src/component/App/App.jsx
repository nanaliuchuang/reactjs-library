import { useSelector } from 'react-redux';
import Login from '../Login&Signup/Login';
import Logout from '../Login&Signup/Logout';
import Signup from '../Login&Signup/Signup';
import { selectUser } from '../Login&Signup/userSlice';
import './App.css';
const App = () => {

  const user = useSelector(selectUser)

  return (
    <div className="App">
      {user ? <Logout></Logout>: <Login></Login>}
    </div>
  );
}

export default App;
