import './FlightsCarrier.css';

export default function FlightsCarrier(props) {
    return(
        <fieldset className="flights-carrier">
        <span className="flights-carrier__description">
            Авиакомпании
        </span>
        {
          props.carriers === undefined
          ? <></>
          : props.carriers.map((elm, index) => {
            return(
              <label className="checkbox-carrier" key={index}>
                <input className="checkbox-carrier__input" type="checkbox" name="carrier" value={elm.uid} defaultChecked={true} />
                <span className="checkbox-carrier__carrier">- {elm.caption}</span>
                <span className="checkbox-carrier__price">от{` ${elm.price}`} р.</span>
              </label>
            )
          })
        }
    </fieldset>
    )
}