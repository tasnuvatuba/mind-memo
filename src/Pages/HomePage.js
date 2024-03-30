import React from 'react'
import "../App.css"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";
import { Container } from 'react-bootstrap';
import { FormModal } from "../Components/Editor/FormModal";
import {JournalCards} from "../Components/JournalCards";
import { useState, useEffect } from "react";
import useJournalStore from '../journalStore';
import { uid } from "uid";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { formatDateWithTime } from "../services/DateTimeFormatService";
import { SearchComponent } from "../Components/SearchComponent";


export const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [editClicked, setEditClicked] = useState(false);
  const [defaultJournal, setDefaultJournal] = useState();
  const journals = useJournalStore((state) => state.journals);
  const [journalsOnScreen, setJournalsOnScreen] = useState(journals);
  const setJournals = useJournalStore((state) => state.addJournal);
  const modifyJournals = useJournalStore((state) => state.updateJournal);
  const deleteJournal = useJournalStore((state) => state.deleteJournal);

  useEffect(() => {
    setJournalsOnScreen(journals)
  }, [journals]);
  
  
  const addJournal = (journal) => {
    setJournals(journal);
    setDefaultJournal({
      id: uid(),
      title: "New Journal",
      desc: "",
      category: "Food & Dining",
      mood: "Sad",
      createdAt: formatDateWithTime(new Date()),
      lastModified: formatDateWithTime(new Date()),
    });
    setShowModal(false);
    console.log(defaultJournal);

  }

  const updateJournal = (newJournal) => {
    newJournal.lastModified = formatDateWithTime(new Date());
    modifyJournals(newJournal.id, newJournal);
    setShowModal(false);
    setDefaultJournal();
    setEditClicked(false);
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

  const filterBySearch = (searchQuery) => {
    if (!searchQuery) {
      setJournalsOnScreen(journals);
    } else {
      const filteredJournals = journals.filter(
        (journal) =>
          journal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          journal.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
          journal.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          journal.mood.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setJournalsOnScreen(filteredJournals);
    }
  };


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
        
        {editClicked && <FormModal showModal={showModal} onClose={onClose} defaultJournal={defaultJournal} submit={updateJournal} label = "Update"> </FormModal>}
        {!editClicked && <FormModal showModal={showModal} onClose={onClose} defaultJournal={defaultJournal} submit={addJournal} label="Add"></FormModal>}
        <Row>
          <Col className='pb-3'>
            <SearchComponent filterBySearch={filterBySearch}/>
          </Col>
        </Row>
        <Row xs={1} md={1} className="g-4">
          {journalsOnScreen.map((journal, idx) => (
            <Col key={idx}>
              <JournalCards journal = {journal} handleStarClicked={handleStarClicked} handleEditClick={handleEditClick} deleteJournal={deleteJournal}/>
            </Col>
          ))}
        </Row>
    </Container>
    
  );
}
