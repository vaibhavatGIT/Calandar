import React from 'react'
import { getMonthName, lastDayCalc } from '../utils';

const Days = ({ month, date }) => {
  date.setDate(1);
  const daysList = [];
  const lastDayVal = lastDayCalc(date, month);
  const lastDayIndex = lastDayVal.getDay();
  const nextDays = 7 - lastDayIndex;
  const lastDay = lastDayVal.getDate() + 1;
  const firstDayIndex = lastDayCalc(date, month, false).getDay();
  const prevLastDay = lastDayCalc(date, month, false).getDate()
  let styler = 1;

  for (let x = firstDayIndex; x > 0; x--) {
    const styleClass = (styler++ % 2 === 0) ? "bar prev-date" : "bar prev-date add-color";
    daysList.push(<div key={styler} className={styleClass}>{prevLastDay - x + 1}</div>);
  }

  for (let i = 1; i < lastDay; i++) {
    const thisDay = i.toString().length === 1 ? '0' + i : i;
    let styleClass = (styler++ % 2 === 0) ? "bar" : "bar add-color";
    if (
      i === new Date().getDate() &&
      month === new Date().getMonth()
    ) {
      daysList.push(<div key={styler} className={styleClass + ' today-day'}>{thisDay}
        <div className='month-name'>{getMonthName(month)}</div>
      </div>);
    } else {
      daysList.push(<div key={styler} className={styleClass}>{thisDay}</div>);
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    const thisDay = j.toString().length === 1 ? '0' + j : j;
    let styleClass = (styler++ % 2 === 0) ? "bar next-date" : "bar next-date add-color";
    daysList.push(<div key={styler} className={styleClass}>{thisDay}</div>);
  }

  return (
    <div className="days">
      {daysList}
    </div>
  );
}

export { Days };
