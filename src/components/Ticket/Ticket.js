import './Ticket.css';
import logo from '../../images/carriers/carrier.jpg';
import Flight from '../Flight/Flight';
import { nanoid } from 'nanoid';

export default function Ticket(props) {

  return(
    <article className="ticket">
      <div className="ticket__header">
        <img className="ticket__carier-logo" src={logo} alt="Carrier logo" />
        <div className="ticket__price-wrapper">
          <span>{props.ticket.price.total.amount}&#8381;</span>
          Стоимость за одного взрослого пассажира
        </div>
      </div>
      {
        props.ticket.legs.map((elm)=>{
          return <Flight flightInfo={elm} key={nanoid()}/>
        })
      }
      <button className="ticket__submit-btn">ВЫБРАТЬ</button>
    </article>
  )
}