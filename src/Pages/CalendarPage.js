import React from 'react'
import "../App.css"
import CustomCalendar from "../Components/Calendar/Calendar";
import useJournalStore from "../journalStore";

export const CalendarPage = () => {
  const journals = useJournalStore((state) => state.journals);
  return (
    <div >
    <CustomCalendar journals={journals}/>
    </div>
  )
}
