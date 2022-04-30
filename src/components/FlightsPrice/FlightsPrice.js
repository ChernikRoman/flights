import './FlightsPrice.css';

export default function FlightsPrice(props) {
  return(
        <fieldset className="flights-price">
        <span className="flights-price__description">
            Цена
        </span>
        {
          props.flightsInfo !== undefined
          &&
          <>
            <label className="price-place">
              От
              <input className="price-place__input" type="number" name="minPrice" placeholder={props.flightsInfo.minPrice}/>
            </label>
            <label className="price-place">
              До
              <input className="price-place__input" type="number" name="maxPrice" placeholder={props.flightsInfo.maxPrice}/>
            </label>
          </>
        }
    </fieldset>
  )
}