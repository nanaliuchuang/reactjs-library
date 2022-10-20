import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../1.avif';
import React, { Component } from "react";
export default class App extends React.Component {
  state = {
    break: 5,
    session: 32,
    pause: true,
    display: 1,
    showS: false,
    showM: false,
    timerOn: false,
    timerStart: 0,
    timerTime: 32 * 60,
    sessionrunning: true
  };
  startTimer = () => {
    let temp = this.state.timerTime
    console.log(temp)
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: this.state.timerTime
    });
    this.timer = setInterval(() => {
      console.log((this.state.timerTime / temp) * 100)
      const newTime = this.state.timerTime - 1;
      if ((this.state.timerTime / temp) * 100 < 50 && (this.state.timerTime / temp) * 100 > 10) {
        document.getElementById("time-left").style.color = "orange";
      }
      if ((this.state.timerTime / temp) * 100 < 10) {
        document.getElementById("time-left").style.color = "red";
      }

      if (newTime >= 0) {
        this.setState({
          timerTime: newTime
        });

      } else {

        document.getElementById("beep").play()
        document.getElementById("time-left").style.color = "gray";
        if (this.state.sessionrunning) {
          this.setState({ timerTime: this.state.timerStart * this.state.break, sessionrunning: false });

        }
        else {
          this.setState({ timerTime: this.state.timerStart * this.state.session, sessionrunning: true })
        }


      }
    }, 1000);
  };
  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  };
  resetTimer = () => {

    clearInterval(this.timer);
    document.getElementById("time-left").style.color = "gray";
    this.setState({
      timerOn: false,
      timerStart: 0,
      timerTime: 25 * 60,
      break: 5,
      session: 25,
      sessionrunning: true
    });

  };

  breakIncrement = () => {
    if (this.state.break !== 60&& this.state.timerOn===false)
    this.setState({ break: this.state.break + 1 });
  };
  breakDecrement = () => {
    if (this.state.break !==1 &&this.state.timerOn===false)
     this.setState({ break: this.state.break - 1 });
  };
  sesIncrement = () => {
    if (this.state.session !== 60 &&this.state.timerOn===false)
   this.setState({ session: this.state.session + 1 ,timerTime: this.state.timerTime + 1 * 60});
    
  };
  sesDecrement = () => {
    if (this.state.session !== 1 &&this.state.timerOn===false)
      this.setState({ session: this.state.session - 1,timerTime: this.state.timerTime - 1 * 60 });
    
  };
  render() {
    const { timerTime, timerStart, timerOn } = this.state;
    let seconds = ("0" + (Math.floor(timerTime % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((timerTime / 60) % 60)).slice(-2);
    let hadleChangeSeconds = e => {
      this.setState({showS: !this.state.showS});
    }
    let hadleChangeMinutes = e =>{
      this.setState({showM: !this.state.showM});
    }
    const x = this.state.showS;
    const y = this.state.showM;
    return (
      <div class="App">
        <img src={logo} alt="" />
        <div className='change'>
          {
            x &&(     
            <div class="">
            <div class="">
              <h1 id="break-label">Change seconds</h1>
            </div>
            <div className='textBox'>
              <span>{" "}</span>  
                <i
                  class="bi bi-arrow-down-circle-fill"
                  id="break-decrement"
                  onClick={this.breakDecrement}
                />
              <div  id="break-length">
                {this.state.break}
              </div>
                <i
                  class="bi bi-arrow-up-circle-fill"
                  id="break-increment"
                  onClick={this.breakIncrement}
                />
            </div>
            </div>
            )
          }
          {
            y &&(     
              <div class="">
              <div class="">
                <h1 id="session-label">Change minutes</h1>
              </div>
              <div className='textBox'>
                <span>{" "}</span>  
                  <i
                    class="bi bi-arrow-down-circle-fill"
                    id="session-decrement"
                    onClick={this.sesDecrement}
                  />
                <div  id="session-length">
                  {this.state.session}
                </div>
                  <i
                    class="bi bi-arrow-up-circle-fill"
                    id="session-increment"
                    onClick={this.sesIncrement}
                  />
              </div>
              </div>
              )
          }
        </div>
        <div id="time">
          <div id="time-left" className='timer'>
            <span className='minutes' onClick={hadleChangeMinutes} >{minutes}</span>
            <span className='seconds' onClick={hadleChangeSeconds} >{seconds}</span>
          </div>
          <div className='timer'>
            <span className='name'>Minutes</span>
            <span className='name'>Seconds</span>
          </div>
          <div className='content'>
            {this.state.timerOn === false ? <h1 id="start_stop" onClick={this.startTimer}>Start</h1> : <h1 id="start_stop" onClick={this.stopTimer}>Stop</h1>}

            <h1 id="reset" onClick={this.resetTimer}>Reset</h1>
          </div>
          </div>
          <footer>
            <h1 className='text-light text-center fw-normal fs-4'>&copy; Nanaliuchuang-2022</h1>
          </footer>
        </div>
    );
  }
}
