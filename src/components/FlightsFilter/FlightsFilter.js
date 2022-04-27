import './FlightsFilter.css';

export default function FlightsFilter() {
    return(
        <fieldset className="flights-filter">
        <span className="flights-filter__description">
            Фильтровать
        </span>
        <label className="checkbox-button">
            <input className="checkbox-button__input" type="checkbox" name="flights-filter"/>
            - 1 пересадка
        </label>
        <label className="checkbox-button">
            <input className="checkbox-button__input" type="checkbox" name="flights-filter"/>
            - без пересадок
        </label>
    </fieldset>
    )
}