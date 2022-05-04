import './FlightsSort.css';

export default function FlightsSort(props) {
  function changeFormHandler(evt) {
    props.onSortHandler(evt.target.value)
  }

  return(
      <form className="flights-sort" onChange={(evt) => changeFormHandler(evt)}>
          <span className="flights-sort__description">
              Сортровка
          </span>
          <label className="sort-button">
              <input className="sort-button__input" type="radio" name="flights-sort" value="sortByMinPrice" defaultChecked/>
              - по возрастанию цены
          </label>
          <label className="sort-button">
              <input className="sort-button__input" type="radio" name="flights-sort" value="sortByMaxPrice"/>
              - по убыванию цене
          </label>
          <label className="sort-button">
              <input className="sort-button__input" type="radio" name="flights-sort" value="sortByDuration"/>
              - по времени в пути
          </label>
      </form>
  )
}