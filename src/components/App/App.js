import { useEffect, useState } from 'react';
import filteringFlights from '../../utils/filteringFligts';
import flightsApi from '../../utils/FlightsApi';
import sortingFlights from '../../utils/sortingFlights';
import FlightsList from '../FlightsList/FlightsList';
import FlightsSetting from '../FlightsSetting/FlightsSetting';
import SafariAttention from '../SafariAttention/SafariAttention';
import './App.css';

function App() {
  const [flights, setFlights] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [filterParam, setFilterParam] = useState({});
  const [sortParam, setSortParam] = useState('sortByMinPrice');
  const [renderedTickets, setRenderedTickets] = useState([]);
  const [quantityTickets, setQuantityTickets] = useState(5);
  const [showButton, setShowButton] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  const filterHandler = (param) => {
    setFilterParam(param);
  }

  const sortHandler = (param) => {
    setSortParam(param);
  }

  const handleMoreBtnClick = () => {
    if(filteredTickets.length > quantityTickets) {
      setQuantityTickets(quantityTickets + 2);
      setRenderedTickets(filteredTickets.slice(0, quantityTickets + 2));
    } else {
      setShowButton(false);
    }
  }

  useEffect(() => {
    const filteringTickets = filteringFlights(flights, filterParam);
    setFilteredTickets(sortingFlights(filteringTickets, sortParam));
    setQuantityTickets(5);
  }, [filterParam, sortParam])

  useEffect(()=>{
    setRenderedTickets([...filteredTickets].slice(0, quantityTickets));
    if (filteredTickets.length !== 0) {
      setShowButton(true);
    } else {
      setShowButton(false);
    };
  }, [filteredTickets, quantityTickets])

  useEffect(() => {
    const cachedFlights = JSON.parse(localStorage.getItem('result'));
    if(!cachedFlights) {
      flightsApi.getFlights()
        .then((data)=>{
          localStorage.setItem('result', JSON.stringify({ flights: data.result.flights }));
          setFlights(data.result.flights);
          setShowPreloader(false)
        })
        .catch(err => {
          console.log(err);
          setShowPreloader(false);
        })
    } else {
      setFlights(cachedFlights.flights);
      setShowPreloader(false);
    }
  }, [])

  return (
    <div className="App">
      {window.navigator.vendor.includes('Apple') && <SafariAttention />}
      <>
        <FlightsSetting onFilterHandler={filterHandler} onSortHandler={sortHandler} flights={flights} renderedTickets={renderedTickets}/>
        <FlightsList
          renderedTickets={renderedTickets}
          onHandleMoreBtnClick={handleMoreBtnClick}
          showButton={showButton}
          showPreloader={showPreloader}
        />
      </>
    </div>
  );
}

export default App;
