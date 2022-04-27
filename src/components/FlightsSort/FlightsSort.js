import './FlightsSort.css';

export default function FlightsSort() {
    return(
        <fieldset className="flights-sort">
            <span className="flights-sort__description">
                Сортровка
            </span>
            <label className="radio-button">
                <input className="radio-button__input" type="radio" name="flights-sort"/>
                - по возрастанию цены
            </label>
            <label className="radio-button">
                <input className="radio-button__input" type="radio" name="flights-sort"/>
                - по убыванию цене
            </label>
            <label className="radio-button">
                <input className="radio-button__input" type="radio" name="flights-sort"/>
                - по времени в пути
            </label>
        </fieldset>
    )
}