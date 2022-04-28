import './Ticket.css';
import logo from '../../images/carriers/carrier.jpg';
import Flight from '../Flight/Flight';

export default function Ticket(props) {

  return(
    <article className="ticket">
      <div className="ticket__header">
        <img className="ticket__carier-logo" src={logo} alt="Carrier logo" />
        <div className="ticket__price-wrapper">
          <span>{props.ticket.flight.price.total.amount}</span>
          Стоимость за одного взрослого пассажира
        </div>
      </div>
      {
        props.ticket.flight.legs.map((elm)=>{
          console.log(elm)
          return <Flight flightInfo={elm} key={elm.duration / Math.round(Math.random()*10)}/>
        })
      }
      <button className="ticket__submit-btn">ВЫБРАТЬ</button>
    </article>
  )
}