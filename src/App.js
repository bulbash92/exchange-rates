import './App.css';
import {Route, Routes} from 'react-router-dom';

import ExchangeRates from "./Pages/echangeRates/exchangeRates";
import ExchangeDynamics from "./Pages/exchangeDynamics/exchangeDynamics";
import Converter from "./Pages/converter/converter";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<ExchangeRates/>}/>
        <Route path='/dynamic' element={<ExchangeDynamics/>}/>
        <Route path='/converter' element={<Converter/>}/>
      </Routes>
    </div>
  );
}

export default App;
