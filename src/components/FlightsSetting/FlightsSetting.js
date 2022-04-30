import './FlightsSetting.css';
import FlightsSort from '../FlightsSort/FlightsSort';
import FlightsFilter from '../FlightsFilter/FlightsFilter';
import FlightsPrice from '../FlightsPrice/FlightsPrice';
import FlightsCarrier from '../FlightsCarrier/FlightsCarrier';
import { useEffect, useState } from 'react';
import getFlightsInfo from '../../utils/getFlightsInfo';

export default function FlightsSetting(props) {
  const [transfer, setTransfer] = useState({});
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [carriers, setCarriers] = useState([]);
  const [flightsInfo, setflightsInfo] = useState({});

  const handleChangeForm = (evt) => {
    if(evt.target.name === 'transfer') setTransfer({...transfer, [evt.target.value]:evt.target.checked});
    if(evt.target.name === 'minPrice') setTimeout(()=>{setMinPrice(+evt.target.value)}, 1000);
    if(evt.target.name === 'maxPrice') setTimeout(()=>{setMaxPrice(+evt.target.value)}, 1000);
    if(evt.target.name === 'carrier') {
      if(evt.target.checked) {
        setCarriers([...carriers, {uid: evt.target.value}])
      } else {
        let indElm = carriers.findIndex((elm) => {
          return elm.uid === evt.target.value
        });
        const newArr = [...carriers];
        newArr.splice(indElm, 1);
        setCarriers(newArr);
      }
    };
  }

  useEffect(()=>{
    if(props.flights.length === 0) return
    const flightsInfo = getFlightsInfo(props.flights);
    setTransfer(flightsInfo.transfer)
    setMinPrice(flightsInfo.minPrice)
    setMaxPrice(flightsInfo.maxPrice)
    setCarriers(flightsInfo.carriers)
    setflightsInfo(getFlightsInfo(props.flights))
  }, [props.flights])

  useEffect(()=>{
    props.onFilterHandler({transfer, minPrice, maxPrice, carriers})
  }, [transfer, minPrice, maxPrice, carriers])

  return(
      <article className="flights-setting">
        <FlightsSort onSortHandler={props.onSortHandler}/>
        <form id="flights-setting" onChange={handleChangeForm}>
          <FlightsFilter transferCount={flightsInfo.transferCount}/>
          <FlightsPrice flightsInfo={flightsInfo}/>
          <FlightsCarrier carriers={flightsInfo.carriers} />
        </form>
      </article>
  )
}