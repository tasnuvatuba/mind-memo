import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'
import { formatDateWithTime, getDateString } from "../../services/DateTimeFormatService";

const CustomCalendar = ({journals}) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const emoji = {
    happy: '😀',
    sad: '😥',
    neutral: '😐',
    angry: '😡'
  }

  const handleDateClick = (date) => {
    setSelectedDate(date);
    
  };


  useEffect(() => {
    console.log(selectedDate);
  }, [selectedDate])
  

  return (
    <div className="calendar-container">
      <Calendar className="calendar"
        onClickDay={handleDateClick}
        tileContent={({ date }) => {
          const journal = journals.find(journal => getDateString(journal.createdAt) === getDateString(formatDateWithTime(date)));

          return journal?.img ? (
            <img src={journal.img} alt={`Journal entry for ${date}`} className="journal-image" />
            
          ) : (
            <div className="custom-tile" />
          );
        }}
        
      />
    </div>
  );
};

export default CustomCalendar;
