import './FlightDuration.css';
import timeConverter from '../../utils/timeConverter.js';
import watchImage from '../../images/flight-duration/watch.png';

export default function FlightDuration(props) {
  return(
    <div className="flight-duration">
      <img className="flight-duration__time-logo" src={watchImage} alt="Watch"/>
      <span>{timeConverter(props.duration)}</span>
    </div>
  )
}