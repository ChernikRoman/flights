import './FlightDate.css';
import { useState, useEffect } from 'react';
import DateConverter from '../../utils/DateConverter';

export default function FlightDate(props) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(()=>{
    const date = new DateConverter(props.date);
    setDate(date.getDate());
    setTime(date.getTime())
  }, [])

  return(
    <div className={`flight-date__wrapper ${props.reverse && 'flight-date__wrapper_reverse'}`}>
      <time className="flight__time" dateTime={time}>{time}</time>
      <time className="flight__date" dateTime={date}>{date}</time>
    </div>
  )
}