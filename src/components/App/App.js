import { useEffect, useState } from 'react';
import bestPriceConverter from '../../utils/bestPriceConverter';
import flightsApi from '../../utils/FlightsApi';
import FlightsList from '../FlightsList/FlightsList';
import FlightsSetting from '../FlightsSetting/FlightsSetting';
import './App.css';

function App() {
  const [renderedTickets, setRenderedTickets] = useState([]);
  const [sortParam, setSortParam] = useState('sortByMinPrice');

  const sortHandler = (sortParam) => {
    setSortParam(sortParam);
  }

  useEffect(()=>{
    if(renderedTickets.length === 0) return
    const renderedTicketsCopy = JSON.parse(JSON.stringify(renderedTickets));
    setRenderedTickets(renderedTicketsCopy.sort(sortParam.callback))
  }, [sortParam])

  useEffect(() => {
    const cachedFlights = JSON.parse(localStorage.getItem('result'));
    if(!cachedFlights) {
      flightsApi.getFlights()
        .then((data)=>{
          localStorage.setItem('result', JSON.stringify({ flights: data.result.flights,  bestPrices: bestPriceConverter(data) }));
          setRenderedTickets(data.result.flights.slice(0, 3));
        })
    } else {
      setRenderedTickets(cachedFlights.flights.slice(0, 15));
    }
  }, [])

  return (
    <div className="App">
      <FlightsSetting onSortHandler={sortHandler}/>
      <FlightsList renderedTickets={renderedTickets}/>
    </div>
  );
}

export default App;
