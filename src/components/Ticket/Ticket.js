import './Ticket.css';
import logo from '../../images/carriers/carrier.jpg';
import Flight from '../Flight/Flight';

export default function Ticket() {
  return(
    <article className="ticket">
      <div className="ticket__header">
        <img className="ticket__carier-logo" src={logo} alt="Carrier logo" />
        <div className="ticket__price-wrapper">
          <span>21049 р</span>
          Стоимость за одного взрослого пассажира
        </div>
      </div>
      <Flight flightInfo={{carrier: 'LOT Polish Airlines'}}/>
      <Flight flightInfo={{carrier: 'LOT Polish Airlines'}}/>
      <button className="ticket__submit-btn">ВЫБРАТЬ</button>
    </article>
  )
}