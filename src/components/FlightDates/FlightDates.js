import FlightDate from '../FlightDate/FlightDate';
import FlightDuration from '../FlightDuration/FlightDuration';
import './FlightDates.css';

export default function FlightDates(props) {
  return(
  <div className="flight-dates">
    <FlightDate date={props.date.departureDate} reverse={false}/>
    <FlightDuration duration={props.date.duration}/>
    <FlightDate date={props.date.arrivalDate} reverse={true}/>
  </div>
  )
}