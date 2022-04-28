import './FlightsList.css';
import Ticket from '../Ticket/Ticket';

export default function FlightsList(props) {
  return(
    <section className="flights-list">
      {
        props.renderedFlights.map((elm) => {
          return <Ticket ticket={elm} key={elm.flightToken}/>
        })
      }
      <button className="flights-list__show-more-btn">Показать еще</button>
    </section>
  )
}