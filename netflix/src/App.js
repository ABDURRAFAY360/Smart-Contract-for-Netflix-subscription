import logo from './logo.svg';
import API from './ABI.json';
import {ethers} from 'ethers';
import './App.css';
import Header from './components/header';
import RegistrationForm from './components/registrationform'

function App() {
  // const subscription = async() =>{
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   await provider.send("eth_requestAccounts",[]);
  //   const customer = provider.getSigner();
  //   const netflix = new ethers.Contract("0xFdA4F242B5117975F300213Cd1dAbcE10631F11B",API, customer);
  //   await netflix.Charge({value:ethers.utils.parseEther("1000")});
  //   console.log(netflix);
  // }
  // subscription()
  return (
    
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
    // </div>
    <div className="App">
      <Header/>
      <RegistrationForm/>
    </div>
  );
}

export default App;
