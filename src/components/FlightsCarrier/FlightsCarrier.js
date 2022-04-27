import './FlightsCarrier.css';

export default function FlightsCarrier() {
  const price = 27000;

    return(
        <fieldset className="flights-carrier">
        <span className="flights-carrier__description">
            Авиакомпании
        </span>
        <label className="checkbox-carrier">
            <input className="checkbox-carrier__input" type="checkbox"/>
            <span className="checkbox-carrier__carrier">- LOT Polish Airlines</span>
            <span className="checkbox-carrier__price">от {price} р.</span>
        </label>
        <label className="checkbox-carrier">
            <input className="checkbox-carrier__input" type="checkbox"/>
            <span className="checkbox-carrier__carrier">- Аэрофлот - российсике авиалинии</span>
            <span className="checkbox-carrier__price">от {price} р.</span>
        </label>
    </fieldset>
    )
}