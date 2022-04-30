import './FlightsList.css';
import Ticket from '../Ticket/Ticket';
import { nanoid } from 'nanoid';
import Preloader from '../Preloader/Preloader';

export default function FlightsList(props) {

  const moreBtnClickHandler = () => {
    props.onHandleMoreBtnClick()
  }

  return(
    <section className="flights-list">
      {props.showPreloader && <Preloader />}
      {
        props.renderedTickets.map((elm) => {
          return <Ticket ticket={elm.flight} key={nanoid()}/>
        })
      }
      {props.showButton && <button className="flights-list__show-more-btn" onClick={moreBtnClickHandler}>Показать еще</button>}
    </section>
  )
}