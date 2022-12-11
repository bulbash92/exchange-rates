import './App.css';
import {Route, Routes} from 'react-router-dom';

import ExchangeRates from "./Pages/Exchange-Rates/exchangeRates";
import ExchangeDynamics from "./Pages/exchangeDynamics/exchangeDynamics";
import Navbar from "./components/navbar/navbar";
import logo
    from '../src/assets/png-transparent-drawing-cartoon-potato-face-food-photography.png'
import Converter from "./Pages/converter/converter";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className={'logo'}><img alt={'logo'} src={logo}/></div>
                <h1>Бульба Курс</h1>
                <Navbar/>
            </header>
            <Routes>
                <Route path='/' element={<ExchangeRates/>}/>
                <Route path='/dynamic' element={<ExchangeDynamics/>}/>
                <Route path='/converter' element={<Converter/>}/>
            </Routes>
        </div>
    );
}

export default App;
