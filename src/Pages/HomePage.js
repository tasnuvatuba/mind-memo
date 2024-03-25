import React from 'react'
import "../App.css"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";
import { Container } from 'react-bootstrap';
import { FormModal } from "../Components/FormModal";
import {JournalCards} from "../Components/JournalCards";
import { useState } from "react";
import useJournalStore from '../journalStore';


export const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const journals = useJournalStore((state) => state.journals);
  const setJournals = useJournalStore((state) => state.addJournal);
  const modifyJournals = useJournalStore((state) => state.updateJournal);
  const [isUpdatePressed, setIsUpdatePressed] = useState(false)
  const [defaultJournal, setDefaultJournal] = useState({})
  
  const addJournal = (journal) => {
    console.log(journal);
    setJournals(journal);
    setShowModal(false);
  }

  const updateJournal = (journalId, newJournal) => {
    modifyJournals(journalId, newJournal);
    setIsUpdatePressed(false);
  }

  return (
    <Container>
      <Row xs={1} md={1} className="g-4">
        {journals.map((journal, idx) => (
          <Col key={idx}>
            <JournalCards journal = {journal} setIsUpdatePressed = {setIsUpdatePressed} setDefaultJournal = {setDefaultJournal}/>
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <Button onClick={() => setShowModal(true)}>Add</Button>
        </Col>
      </Row>
      {showModal && <FormModal showModal={showModal} onClose={() => setShowModal(false)} addJournal={addJournal}  />}
      {isUpdatePressed && <FormModal showModal={isUpdatePressed} onClose={() => setIsUpdatePressed(false)} updateJournal={updateJournal} defaultJournal={defaultJournal}  />}
    </Container>

    
  )
}
