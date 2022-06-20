import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";

const monthArr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const App = () => {
  const [isYearClick, setIsYearClick] = useState(false);
  const [month, setMonth] = useState(Number(new Date().getMonth()));
  const [year, setYear] = useState(Number(new Date().getFullYear()));
  const [newYear, setNewYear] = useState(Number(new Date().getFullYear()));

  const date = 1;
  let classNum = 0;

  let dateArray = [];

  let dt = new Date();
  let m = dt.getMonth();
  let y = dt.getFullYear();
  let d = dt.getDate();
  let daysInMonth = new Date(year, Number(month) + 1, 0).getDate();
  let dt2 = new Date(year, month, date);
  let firstDay = dt2.getDay();
  let isFull = true;
  console.log(daysInMonth);
  let i = 0,
    k = 0;
  while (isFull) {
    let arr2 = [];
    for (let j = 0; j < 7; j++) {
      if (i < firstDay || i >= daysInMonth + firstDay) {
        arr2[j] = "";
      } else {
        arr2[j] = i - firstDay + 1;
      }
      i++;
    }
    dateArray[k] = arr2;
    k++;
    if (i >= firstDay + daysInMonth) {
      isFull = false;
    }
  }

  const changeYear = (event) => {
    event.preventDefault();
    setYear(newYear);
    setIsYearClick(false);
  };
  const changeMonth = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setMonth(event.target.value);
  };

  return (
    <div id="main">
      <div className="calendar-div">
        <div className="header">
          <h1 id="heading">Calendar</h1>
        </div>
        <div className="nav">
          <select name="" value={month} id="month" onChange={changeMonth}>
            {monthArr.map((item, index) => {
              return <option value={index}>{item}</option>;
            })}
          </select>
          {isYearClick ? (
            <form onSubmit={changeYear}>
              <input
                type="text"
                id="year-text-box"
                onChange={(event) => {
                  setNewYear(event.target.value);
                }}
              />
            </form>
          ) : null}
          <span
            id="year"
            onDoubleClick={() => {
              setIsYearClick(true);
            }}
          >
            {year}
          </span>
        </div>
        <div className="table">
          <table>
            <tbody>
              <tr>
                <td>Sunday</td>
                <td>Monday</td>
                <td>Tuesday</td>
                <td>Wednesday</td>
                <td>Thursday</td>
                <td>Friday</td>
                <td>Saturday</td>
              </tr>
              {dateArray.map((item) => {
                console.log("as");
                return (
                  <tr>
                    {item.map((value) => {
                      classNum++;
                      if (value == d && year == y && month == m) {
                        return <td id="today">{value}</td>;
                      }
                      return <td id={"cell" + classNum}>{value}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="buttons-div">
            <button
              id="previous-year"
              onClick={() => {
                setYear(year - 1);
              }}
            >
              &#60;&#60;
            </button>
            <button
              id="previous-month"
              onClick={() => {
                if(month>0)
                  setMonth(month - 1);
              }}
            >
              &#60;
            </button>
            <button
              id="next-month"
              onClick={() => {
                if(month < 11)
                  setMonth(month + 1);
              }}
            >
              &#62;
            </button>
            <button
              id="next-year"
              onClick={() => {
                setYear(year + 1);
              }}
            >
              &#62;&#62;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
