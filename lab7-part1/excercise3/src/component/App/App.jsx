import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from "react-redux";
import Keypad from '../Page/Keypad';
import { Component } from 'react';
import { getDisplay } from '../reducers/Selector';
 class App extends Component {
  render() {
    return (
      <div className='App'>
        <Keypad display={this.props.display}></Keypad>
        <footer>
          <p className='text-center fs-2 text-light'>&copy; Nanaliuchuang-2022</p>
        </footer>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const displayValue = getDisplay(state);
  return ({
    display: displayValue,
  });
};

export default connect(
  mapStateToProps,
  null
)(App);
