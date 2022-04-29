import './FlightsList.css';
import Ticket from '../Ticket/Ticket';
import { nanoid } from 'nanoid';

export default function FlightsList(props) {

  return(
    <section className="flights-list">
      {
        props.renderedTickets.map((elm) => {
          return <Ticket ticket={elm.flight} key={nanoid()}/>
        })
      }
      <button className="flights-list__show-more-btn">Показать еще</button>
    </section>
  )
}