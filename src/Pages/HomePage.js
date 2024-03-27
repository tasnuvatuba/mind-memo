import React from 'react'
import "../App.css"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";
import { Container } from 'react-bootstrap';
import { FormModal } from "../Components/Editor/FormModal";
import {JournalCards} from "./JournalCards";
import { useState } from "react";
import useJournalStore from '../journalStore';
import { uid } from "uid";

export function formatDateWithTime(date) {
  // Get the date components
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  const day = date.getDate().toString().padStart(2, '0');
  
  // Get the time components
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  
  // Construct the formatted string
  const dateString = `${year}-${month}-${day}`;
  const timeString = `${hours}:${minutes}`;
  const formattedDateTime = `${dateString}, ${timeString}`;
  
  return formattedDateTime;
}


export const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const journals = useJournalStore((state) => state.journals);
  const setJournals = useJournalStore((state) => state.addJournal);
  const modifyJournals = useJournalStore((state) => state.updateJournal);
  
  const addJournal = (journal) => {
    setJournals(journal);
    setShowModal(false);
  }

  const updateJournal = (journalId, newJournal) => {
    modifyJournals(journalId, newJournal);
  }

  return (
    
    <Container className='pd-md-10'>
      <Row>
        <Col>
          <Button onClick={() => setShowModal(true)}>Add</Button>
        </Col>
      </Row>
      <FormModal showModal={showModal} onClose={() => setShowModal(false)} addJournal={addJournal} ></FormModal>
      <Row xs={1} md={1} className="g-4">
        {journals.map((journal, idx) => (
          <Col key={idx}>
            <JournalCards journal = {journal} />
          </Col>
        ))}
      </Row>
      {/* {isUpdatePressed && <FormModal showModal={isUpdatePressed} onClose={() => setIsUpdatePressed(false)} updateJournal={updateJournal} defaultJournal={defaultJournal}  />} */}
    </Container>
    
  );
}
