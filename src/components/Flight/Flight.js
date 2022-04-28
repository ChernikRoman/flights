import { useEffect } from 'react';
import generateCarrierString from '../../utils/generateCarrierString';
import FlightDates from '../FlightDates/FlightDates';
import FlightTransfer from '../FlightTransfer/FlightTransfer';
import './Flight.css';

export default function Flight(props) {
  useEffect(()=>{
    console.log(props.flightInfo)
  })

  return(
    <article className="flight">
      <div className="flight__direction">
        <span className="flight__airport">
          {`${props.flightInfo.segments[0].departureCity.caption}, ${props.flightInfo.segments[0].departureAirport.caption}`}
        </span>
        {` (${props.flightInfo.segments[0].departureAirport.uid}) `}
        &#8594;
        <span className="flight__airport">
          {` ${props.flightInfo.segments[props.flightInfo.segments.length - 1].arrivalCity.caption},
          ${props.flightInfo.segments[props.flightInfo.segments.length - 1].arrivalAirport.caption}`}
        </span>
        {` (${props.flightInfo.segments[props.flightInfo.segments.length - 1].arrivalAirport.uid}) `}
      </div>
      <hr className="flight__horizontal-line"/>
      <FlightDates date={
        {
          departureDate: props.flightInfo.segments[0].departureDate,
          duration: props.flightInfo.duration,
          arrivalDate: props.flightInfo.segments[props.flightInfo.segments.length - 1].arrivalDate,
        }
      }/>
      <FlightTransfer hasTransfer={props.flightInfo.segments.lenght !== 0}/>
      <span className="flight__carrier">Рейс выполняет: {
        generateCarrierString(props.flightInfo.segments[0].airline.caption, props.flightInfo.segments[props.flightInfo.segments.length - 1].airline.caption)
      }</span>
    </article>
  )
}