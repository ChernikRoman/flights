import './FlightsList.css';
import Ticket from '../Ticket/Ticket';
import { nanoid } from 'nanoid';

export default function FlightsList(props) {

  const moreBtnClickHandler = () => {
    props.onHandleMoreBtnClick()
  }

  return(
    <section className="flights-list">
      {
        props.renderedTickets.map((elm) => {
          return <Ticket ticket={elm.flight} key={nanoid()}/>
        })
      }
      <button className="flights-list__show-more-btn" onClick={moreBtnClickHandler}>Показать еще</button>
    </section>
  )
}