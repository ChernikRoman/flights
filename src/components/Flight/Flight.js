import FlightDates from '../FlightDates/FlightDates';
import FlightTransfer from '../FlightTransfer/FlightTransfer';
import './Flight.css';

export default function Flight(props) {
  return(
    <article className="flight">
      <div className="flight__direction">
        <span className="flight__airport">Москва, ШЕРЕМЕТЬЕВО</span>
        (SVO)
        &#8594;
        <span className="flight__airport"> ЛОНДОН, Лондон, Хитроу</span>
        (LHR)
      </div>
      <hr className="flight__horizontal-line"/>
      <FlightDates />
      <FlightTransfer hasTransfer={true}/>
      <span className="flight__carrier">Рейс выполняет: {props.flightInfo.carrier}</span>
    </article>
  )
}