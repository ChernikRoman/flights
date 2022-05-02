import { useEffect, useState } from 'react';
import bestPriceConverter from '../../utils/bestPriceConverter';
import filteringFlights from '../../utils/filteringFligts';
import flightsApi from '../../utils/FlightsApi';
import sortingFlights from '../../utils/sortingFlights';
import FlightsList from '../FlightsList/FlightsList';
import FlightsSetting from '../FlightsSetting/FlightsSetting';
import './App.css';

function App() {
  const [flights, setFlights] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [filterParam, setFilterParam] = useState({});
  const [sortedTickets, setSortedTickets] = useState([]);
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
    if(sortedTickets.length > quantityTickets) {
      setQuantityTickets(quantityTickets + 2);
      setRenderedTickets(sortedTickets.slice(0, quantityTickets + 2));
    } else {
      setShowButton(false);
    }
  }

  useEffect(() => {
    setFilteredTickets(filteringFlights(flights, filterParam));
    setQuantityTickets(5);
  }, [filterParam])

  useEffect(()=>{
    setSortedTickets([...sortingFlights(filteredTickets, sortParam)]);
  }, [filteredTickets, sortParam]);

  useEffect(()=>{
    setRenderedTickets([...sortedTickets].slice(0, quantityTickets));
    if (sortedTickets.length !== 0) setShowButton(true);
  }, [sortedTickets, quantityTickets])

  useEffect(() => {
    const cachedFlights = JSON.parse(localStorage.getItem('result'));
    if(!cachedFlights) {
      flightsApi.getFlights()
        .then((data)=>{
          localStorage.setItem('result', JSON.stringify({ flights: data.result.flights,  bestPrices: bestPriceConverter(data) }));
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
