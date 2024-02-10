import React from 'react';

const CurrentDate = () => {
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Ensure two digits for month, date, hours, minutes, and seconds
    month = month < 10 ? `0${month}` : month;
    date = date < 10 ? `0${date}` : date;
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
  };

  return getCurrentDate();

};

export default CurrentDate;