import './App.css';
import {BrowserRouter} from "react-router-dom";
import Main from './Components/Main';

function App() {

  const exitPreloader = () => {
    var preloader = document.getElementById('preloader');
    var circle = document.getElementById('circle');
    preloader.style.display= 'none';
    circle.style.display = 'none';
  }

  return (
    <div onLoad={exitPreloader}>
      <div id="preloader" style={{display:"flex"}}>
        <div id="circle"></div>
        <div id="borderCircle1"></div>
        <div id="borderCircle"></div>
      </div>

      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    </div>
  );
}

export default App;
