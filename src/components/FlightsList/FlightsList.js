import './FlightsList.css';
import Ticket from '../Ticket/Ticket';

export default function FlightsList() {
  return(
    <section className="flights-list">
      <Ticket />
      <Ticket />
      <button className="flights-list__show-more-btn">Показать еще</button>
    </section>
  )
}