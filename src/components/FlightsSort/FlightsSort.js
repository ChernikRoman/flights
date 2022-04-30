import { useEffect, useState } from 'react';
import './FlightsSort.css';

export default function FlightsSort(props) {
  const [sortBy, setSortBy] = useState('sortByMinPrice')

  function changeFormHandler(evt) {
    props.onSortHandler(evt.target.value)
  }

  useEffect(()=>{
    props.onSortHandler('sortByMinPrice')
  }, [])

  return(
      <form className="flights-sort" onChange={(evt) => changeFormHandler(evt)}>
          <span className="flights-sort__description">
              Сортровка
          </span>
          <label className="radio-button">
              <input className="radio-button__input" type="radio" name="flights-sort" value="sortByMinPrice" defaultChecked={true}/>
              - по возрастанию цены
          </label>
          <label className="radio-button">
              <input className="radio-button__input" type="radio" name="flights-sort" value="sortByMaxPrice"/>
              - по убыванию цене
          </label>
          <label className="radio-button">
              <input className="radio-button__input" type="radio" name="flights-sort" value="sortByDuration"/>
              - по времени в пути
          </label>
      </form>
  )
}