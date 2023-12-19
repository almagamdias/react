import './App.css';
import {Component} from 'react';

const Header = () => {
  return <h1>WELCOMEEN!</h1>;
}
/*const Field = () => {
  const styleField = {
    width: '300px',
    padding: '5px 10px'
  };
  return <input placeholder='HEREEEE!' type='text' style={styleField}/>
}*/

class Field extends Component {
  render() {
    const styleField = {
      width: '300px',
      padding: '5px 10px'
    };
    return <input placeholder='HEREEEE!' type='text' style={styleField}/> 
  }
}
class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: '+++'
    }
  }
  nextYear = () => {
    console.log('ADDED!');
    this.setState(state => ({
      years: state.years + 1
    }));
  }
  prevYear = () => {
    console.log('SubstractED!');
    this.setState(state => ({
      years: state.years - 1
    }));
  }
  render() {
    const {name, surname, link} = this.props;
    return (
      <div>
        <h1>My name is {name}, surname - {surname}, years - {this.state.years}</h1>
        <div>
          <button onClick={this.prevYear} >---</button>
          <a href={link}>GO HERE!!</a>
          <button onClick={this.nextYear} >{this.state.text}</button>
        </div>
      </div>
    )
  }
}
class Loto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    }
  }
  random = () => {
    console.log('RANDOM!');
    this.setState(state => ({
      number: Math.ceil(Math.random() * 90)
    }));
  }
  inc = () => {
    if (this.state.number < 90) {
      console.log('INCREASED!');
      this.setState(state => ({
        number: state.number + 1
      }));
    }
    else console.log('YOU CANNOT INCREASE!!!');
  }
  dec = () => {
    if (this.state.number > 0) {
      console.log('DECREASED!');
      this.setState(state => ({
        number: state.number - 1
      }));
    }
    else console.log("YOU CANNOT DECREASE!!!");
  }
  res = () => {
    console.log('RESETTED!');
    this.setState(state => ({
      number: state.number - state.number
    }));
  }
  render() {
    return (
      <div>
        <h1>Number is {this.state.number}</h1>
        <button onClick={this.random}>RAND</button>
        <button onClick={this.inc}>INC</button>
        <button onClick={this.dec}>DEC</button>
        <button onClick={this.res}>RES</button>
      </div>
    )
  }
}
const Button = () => {
  const text = () => {return 'LOGIN';}
  const logged = false;
  return <button>{logged ? 'Enter' : text()}</button>
}
function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Button/>
      <WhoAmI name='Dias' surname="Almagambetov" link="t.me/felixuscat"/>
      <WhoAmI name='John' surname="Smith" link="vk.com"/>
      <Loto number='12'/>
    </div>
  );
}

export default App;
