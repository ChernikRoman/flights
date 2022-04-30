import { useEffect, useState } from 'react';
import bestPriceConverter from '../../utils/bestPriceConverter';
import filteringFlights from '../../utils/filteringFligts';
import flightsApi from '../../utils/FlightsApi';
import FlightsList from '../FlightsList/FlightsList';
import FlightsSetting from '../FlightsSetting/FlightsSetting';
import './App.css';

function App() {
  const [flights, setFlights] = useState([]);
  const [renderedTickets, setRenderedTickets] = useState([]);
  const [quantityTickets, setQuantityTickets] = useState(10)
  const [sortParam, setSortParam] = useState('sortByMinPrice');

  const sortHandler = (sortParam) => {
    setSortParam(sortParam);
  }

  const filterHandler = (filterParam) => {
    setRenderedTickets(filteringFlights(flights, filterParam).slice(0, quantityTickets))
    // setSortParam(sortParam)
  }

  const handleMoreBtnClick = () => {
    // setQuantityTickets(quantityTickets + 2)
    // setRenderedTickets(flights.slice(0, quantityTickets + 2))
    // sortHandler(sortParam)
  }

  useEffect(()=>{
    if(renderedTickets.length === 0) return
    const renderedTicketsCopy = JSON.parse(JSON.stringify(renderedTickets));
    setRenderedTickets(renderedTicketsCopy.sort(sortParam.callback));
  }, [sortParam])

  useEffect(() => {
    const cachedFlights = JSON.parse(localStorage.getItem('result'));
    if(!cachedFlights) {
      flightsApi.getFlights()
        .then((data)=>{
          localStorage.setItem('result', JSON.stringify({ flights: data.result.flights,  bestPrices: bestPriceConverter(data) }));
          setFlights(data.result.flights);
          // setRenderedTickets(data.result.flights.slice(0, 3));
        })
    } else {
      setFlights(cachedFlights.flights);
      // setRenderedTickets(cachedFlights.flights.slice(0, 15));
    }
  }, [])

  const qqq = () => {
    console.log(sortHandler)
    sortHandler(sortParam)
  }

  return (
    <div className="App">
      <>
        <FlightsSetting onSortHandler={sortHandler} onFilterHandler={filterHandler} flights={flights}/>
        <FlightsList renderedTickets={renderedTickets} onHandleMoreBtnClick={handleMoreBtnClick}/>
      </>
    </div>
  );
}

export default App;
