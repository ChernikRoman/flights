import checkUndefined from '../../utils/checkUndefined';
import generateCarrierString from '../../utils/generateCarrierString';
import FlightDates from '../FlightDates/FlightDates';
import FlightTransfer from '../FlightTransfer/FlightTransfer';
import './Flight.css';

export default function Flight(props) {
  const flightInfo = {
    firstCarrier: props.flightInfo.segments[0].airline.caption,
    secondCarrier: props.flightInfo.segments[props.flightInfo.segments.length - 1].airline.caption,
    departureCity: checkUndefined(props.flightInfo.segments[0].departureCity),
    departureAirport: props.flightInfo.segments[0].departureAirport.caption,
    departureAirportUid: props.flightInfo.segments[0].departureAirport.uid,
    arrivalCity: checkUndefined(props.flightInfo.segments[props.flightInfo.segments.length - 1].arrivalCity),
    arrivalAirport: props.flightInfo.segments[props.flightInfo.segments.length - 1].arrivalAirport.caption,
    arrivalAirportUid: props.flightInfo.segments[props.flightInfo.segments.length - 1].arrivalAirport.uid,
    departureDate: props.flightInfo.segments[0].departureDate,
    duration: props.flightInfo.duration,
    arrivalDate: props.flightInfo.segments[props.flightInfo.segments.length - 1].arrivalDate,
    hasTransfer: props.flightInfo.segments.lenght !== 0,
  }

  return(
    <article className="flight">
      <div className="flight__direction">
        <span className="flight__airport">{`${flightInfo.departureCity}, ${flightInfo.departureAirport}`}</span>
        {` (${flightInfo.departureAirportUid}) `}
        &#8594;
        <span className="flight__airport">{` ${flightInfo.arrivalCity}, ${flightInfo.arrivalAirport}`}</span>
        {` (${flightInfo.arrivalAirportUid}) `}
      </div>
      <hr className="flight__horizontal-line"/>
      <FlightDates date={
        {
          departureDate: flightInfo.departureDate,
          duration: flightInfo.duration,
          arrivalDate: flightInfo.arrivalDate,
        }
      }/>
      <FlightTransfer hasTransfer={flightInfo.hasTransfer}/>
      <span className="flight__carrier">Рейс выполняет:
        {generateCarrierString(flightInfo.firstCarrier, flightInfo.secondCarrier)}
      </span>
    </article>
  )
}