import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'
import { formatDateWithTime, getDateString } from "../../services/DateTimeFormatService";
import { JournalModal } from "../JournalModal";


const CustomCalendar = ({journals}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [journal, setJournal] = useState()

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

  const onClose = () =>{
    setShowModal(false);
  }

  const tileClickHandler = (journal) => {
    setShowModal(true);
    setJournal(journal);
  }
  

  return (
    <div className="calendar-container">
      <Calendar className="calendar"
        onClickDay={handleDateClick}
        tileContent={({ date }) => {
          const journal = journals.find(journal => getDateString(journal.createdAt) === getDateString(formatDateWithTime(date)));

          return (
            <div>
              {journal?(
                journal.img ? (
                  <img
                    src={journal.img}
                    alt={`Journal entry for ${date}`}
                    className="journal-image"
                    onClick={() => tileClickHandler(journal)} // Add onClick handler here
                  />
                ) : (
                  <div className="custom-tile" onClick={() => tileClickHandler(journal)} /> // Add onClick handler here
                )
              ):(<div className="custom-tile" ></div>)
              
              
              
              
              }
              
            </div>
          );
        }}
        
      />
      {showModal && <JournalModal showModal={showModal} onClose={onClose} journal={journal} label="Details" />} {/* Render FormModal conditionally */}
    </div>
  );
};

export default CustomCalendar;
