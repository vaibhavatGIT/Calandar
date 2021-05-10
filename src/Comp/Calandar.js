import React, { useState } from 'react'
import { Days } from './Days';
import { getMonthName, daysName } from '../utils';
import './Calandar.css';


const Calandar = () => {
  const date = new Date();
  const [month, setMonth] = useState(date.getMonth());
  const handleChange = isNext => () => {
    const mon = isNext ? month + 1 : month - 1;
    setMonth(mon % 12);
  }

  return (
    <div className="container">
      <div className="calendar">
        <div className='top'>
          <div className='today-top'>
            <i className="fa fa-calendar"></i>
          Today
          </div>
          <div className="month">
            <i onClick={handleChange(false)} className="fas fa-angle-left prev" ></i>
            <div className="date">
              <h1>{getMonthName(month) + ' ' + date.getFullYear()}</h1>
            </div>
            <i onClick={handleChange(true)} className="fas fa-angle-right next"></i>
          </div>
        </div>
        <div className="weekdays">
          {daysName.map((day, i) => <div key={i}>{day}</div>)}
        </div>
        <Days month={month} date={date} />
      </div>
    </div>
  )
}

export { Calandar };
