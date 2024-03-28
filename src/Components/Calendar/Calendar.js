import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'

const CustomCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    
  };

  const tileClassName = ({date}) => {
    return 
  }

  useEffect(() => {
    console.log(selectedDate);
  }, [selectedDate])
  

  return (
    <div className="calendar-container">
      <Calendar className="calendar"
        onClickDay={handleDateClick}
        tileContent={({ date }) => {
          return <div className="custom-tile" />;
        }}
        // tileContent={({ date }) => {
        //   if (date.getDate() === selectedDate?.getDate()) {
        //     return <img src="image-url" alt="Image" />;
        //   }
        // }}
      />
    </div>
  );
};

export default CustomCalendar;
