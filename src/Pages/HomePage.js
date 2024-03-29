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
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


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
  const [editClicked, setEditClicked] = useState(false);
  const [defaultJournal, setDefaultJournal] = useState();
  const journals = useJournalStore((state) => state.journals);
  const setJournals = useJournalStore((state) => state.addJournal);
  const modifyJournals = useJournalStore((state) => state.updateJournal);
  const deleteJournal = useJournalStore((state) => state.deleteJournal);
  
  const addJournal = (journal) => {
    setJournals(journal);
    setShowModal(false);
    setDefaultJournal();
  }

  const updateJournal = (newJournal) => {
    newJournal.lastModified = formatDateWithTime(new Date());
    modifyJournals(newJournal.id, newJournal);
    setShowModal(false);
    setDefaultJournal();
  }   

  const handleEditClick = (journal) => {
    setDefaultJournal(journal);
    setEditClicked(true);
    setShowModal(true);
  }
  
  const handleStarClicked = (journal) => {
    journal.fav = !journal.fav;  //directly modifying object is not recommeneded in react
    modifyJournals(journal.id, journal)
  }


  const onClose = () =>{
    setShowModal(false);
    setDefaultJournal();
  }


  return (

    <Container className='pd-md-10'>
        <Fab
          color="primary"
          aria-label="Add"
          style={{ position: 'fixed', bottom: '30px', right: '10%', zIndex: '1000' }}
          onClick={() => setShowModal(true)}
        >
          <AddIcon />
        </Fab>
        
        {editClicked && <FormModal showModal={showModal} onClose={onClose} defaultJournal={defaultJournal} submit={updateJournal} label = "update"> </FormModal>}
        {!editClicked && <FormModal showModal={showModal} onClose={onClose} submit={addJournal} label="add"></FormModal>}
        <Row xs={1} md={1} className="g-4">
          {journals.map((journal, idx) => (
            <Col key={idx}>
              <JournalCards journal = {journal} handleStarClicked={handleStarClicked} handleEditClick={handleEditClick} deleteJournal={deleteJournal}/>
            </Col>
          ))}
        </Row>
    </Container>
    
  );
}
