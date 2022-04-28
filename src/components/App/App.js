import { useEffect, useState } from 'react';
import bestPriceConverter from '../../utils/bestPriceConverter';
import flightsApi from '../../utils/FlightsApi';
import FlightsList from '../FlightsList/FlightsList';
import FlightsSetting from '../FlightsSetting/FlightsSetting';
import './App.css';

function App() {
  const [renderedTicket, setRenderedTicket] = useState([]);

  useEffect(()=>{
    flightsApi.getFlights()
    .then((data)=>{
      console.log(data)
      localStorage.setItem('bestPrices', JSON.stringify(bestPriceConverter(data)));
      setRenderedTicket(data.result.flights.slice(0, 3))
    })
  }, [])

  return (
    <div className="App">
      <FlightsSetting />
      <FlightsList renderedFlights={renderedTicket} />
    </div>
  );
}

export default App;
