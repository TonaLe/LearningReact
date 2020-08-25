import React,{Component} from 'react';
import Calculator from './Component/LearningReact/Calculator'
import logo from './logo.svg';
import './App.css';
import Login from './Component/LearningReact/Todos'

// function App() {
//   return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //   {/* <FirstChildElement></FirstChildElement> */}
    // </div>
//   );
// }

// function FirstChildElement(){
//   return(
//     <div className="FirstChildElement">
//       <i class="fas fa-h1">First Child</i>
//     </div> 
//   )
// }

class App extends Component{

  render(){
    return(
    //   <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //   {/* <FirstChildElement></FirstChildElement> */}
    // </div>

    // <div className="App">
    //     <Calculator by={5}/>
    // </div>

    <div className="App">
        <Login/>
    </div>
    )
  }
}

export default App;
