import './FlightsFilter.css';

export default function FlightsFilter(props) {
  return(
      <fieldset className="flights-filter">
      <span className="flights-filter__description">
          Фильтровать
      </span>
      {
        props.transferCount === 2
        ?
        <label className="checkbox-button">
          <input className="checkbox-button__input" type="checkbox" name="transfer" value="direct" form="flights-settings" defaultChecked/>
          - без пересадок
        </label>
        :
        props.transferCount === 3
        ?
        <>
          <label className="checkbox-button">
            <input className="checkbox-button__input" type="checkbox" name="transfer" value="oneConnection" form="flights-settings" defaultChecked/>
            - 1 пересадка
          </label>
          <label className="checkbox-button">
            <input className="checkbox-button__input" type="checkbox" name="transfer" value="direct" form="flights-settings" defaultChecked/>
            - без пересадок
          </label>
        </>
        :
        <>
          <label className="checkbox-button">
            <input className="checkbox-button__input" type="checkbox" name="transfer" value="twoConnection" form="flights-settings" defaultChecked/>
            - 2 пересадки
          </label>
          <label className="checkbox-button">
            <input className="checkbox-button__input" type="checkbox" name="transfer" value="oneConnection" form="flights-settings" defaultChecked/>
            - 1 пересадка
          </label>
          <label className="checkbox-button">
            <input className="checkbox-button__input" type="checkbox" name="transfer" value="direct" form="flights-settings" defaultChecked/>
            - без пересадок
          </label>
        </>
      }
  </fieldset>
  )
}