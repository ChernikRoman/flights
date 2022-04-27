import './FlightsPrice.css';

export default function FlightsPrice() {
  return(
        <fieldset className="flights-price">
        <span className="flights-price__description">
            Цена
        </span>
        <label className="price-place">
            От
            <input className="price-place__input" type="number" name="flights-price" value=""/>
        </label>
        <label className="price-place">
            До
            <input className="price-place__input" type="number" name="flights-price" value=""/>
        </label>
    </fieldset>
  )
}