import './FlightTransfer.css';

export default function FlightTransfer(props) {
  return(
    <div className="flight-transfer">
      <span className={`flight-transfer__description ${props.hasTransfer || 'flight-transfer__description_hidden'}`}>{'1 пересадка'}</span>
    </div>
  )
}