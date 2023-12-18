import logo from './logo.svg';
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

    </div>
  );
}

export default App;
