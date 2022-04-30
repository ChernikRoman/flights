import { useEffect } from 'react';
import './FlightsSort.css';

export default function FlightsSort(props) {
  const sortingFunctions = {
    sortByMinPrice(a, b) {
      if(+a.flight.price.total.amount > +b.flight.price.total.amount) return 1;
      if(+a.flight.price.total.amount === +b.flight.price.total.amount) return 0;
      if(+a.flight.price.total.amount < +b.flight.price.total.amount) return -1;
    },
    sortByMaxPrice(a, b) {
      if(+a.flight.price.total.amount > +b.flight.price.total.amount) return -1;
      if(+a.flight.price.total.amount === +b.flight.price.total.amount) return 0;
      if(+a.flight.price.total.amount < +b.flight.price.total.amount) return 1;
    },
    sortByDuration(a, b) {
      if(a.flight.legs[0].duration + a.flight.legs[1].duration > b.flight.legs[0].duration + b.flight.legs[1].duration) return 1;
      if(a.flight.legs[0].duration + a.flight.legs[1].duration === b.flight.legs[0].duration + b.flight.legs[1].duration) return 0;
      if(a.flight.legs[0].duration + a.flight.legs[1].duration < b.flight.legs[0].duration + b.flight.legs[1].duration) return -1;
    }
  }

  function changeFormHandler(evt) {
    props.onSortHandler({callback:sortingFunctions[evt.target.value]})
  }

  useEffect(()=>{
    props.onSortHandler({callback:sortingFunctions.sortByMinPrice})
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