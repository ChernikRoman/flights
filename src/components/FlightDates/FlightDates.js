import FlightDate from '../FlightDate/FlightDate';
import FlightDuration from '../FlightDuration/FlightDuration';
import './FlightDates.css';

export default function FlightDates() {
  return(
  <div className="flight-dates">
    <FlightDate date="2020-08-18T20:40:00" reverse={false}/>
    <FlightDuration duration={885}/>
    <FlightDate date="2020-08-18T20:40:00" reverse={true}/>
  </div>
  )
}