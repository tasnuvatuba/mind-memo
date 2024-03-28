import React from 'react'
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import { Input } from "./Input";
import { Select } from "./Select";
import { Journal } from 'react-bootstrap-icons';
import { useState, useEffect } from "react";
import { uid } from "uid";
import { TextEditor } from "./TextEditor";
import { Container, Row, Col } from "react-bootstrap";

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

export const FormModal = ({showModal, setShowModal, addJournal, updateJournal, defaultJournal, label}) => {
  const [journal, setJournal] = useState({});
  const [resetCounter, setResetCounter] = useState(0);


  // useEffect(() => {
  //   console.log("triggering useEffect")
  //   reset();
  // }, [defaultJournal]);

  useEffect(() => {
    console.log("journal chnaged" );
    reset()
  }, [journal])
  

  const reset = () => {
    setJournal(
      defaultJournal? defaultJournal :
      {
        id: uid(),
        title: "New Journal",
        desc: "",
        category: "Food & Dining",
        mood: "Sad",
        createdAt: formatDateWithTime(new Date()),
        lastModified: formatDateWithTime(new Date()),
     }   
    );
    setResetCounter(resetCounter + 1);  
    console.log(journal);
  }

  const onChangeHandler = (e) => {
    switch (e.target.name) {
      case "title":
        setJournal({ ...journal, title: e.target.value })
        break
      case "desc":
        setJournal({ ...journal, desc: e.target.value })
        break
      case "category":
        setJournal({ ...journal, category: e.target.value })
        break
      case "mood":
        setJournal({ ...journal, mood: e.target.value })
        break
      case "img":
        setJournal({ ...journal, img: e.target.value })
        break
      default:
        break
    }
  }

  const handleProcedureContentChange = (content) => {
      //console.log("content---->", content);
      setJournal({ ...journal, desc: content })
  };

  const submit = (journal) =>{
    if(label == 'add'){
      addJournal(journal);
    }
    else if(label == 'update'){
      updateJournal(journal.id, journal)
    }
    reset();
  }

  const close = () =>{
    setShowModal(false);
    reset();
    
}
  return (
    <Modal show={showModal} onHide={close} size="lg" centered >
      <Modal.Header closeButton>
        <Modal.Title>Title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Container>
           <Button onClick={() => console.log(journal)}>print object</Button>
            <Row>
              <Col>
                <Input
                  label={"Title"}
                  fieldName="title"
                  onChangeHandler={onChangeHandler}
                  resetCounter={resetCounter}
                  defaultValue={journal.title}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Select
                  label="Category"
                  fieldName="category"
                  options={['Travelling', 'Food & Dining', 'Art & Creativity', 'Relationships', 'Learning', 'Self Reflection']}
                  onChangeHandler={onChangeHandler}
                  resetCounter={resetCounter}
                  defaultValue={journal.category}
                />
              </Col>
              <Col>
              <Select
                label="Mood"
                fieldName="mood"
                options={["Happy", "Sad", "Neutral", "Angry"]}
                onChangeHandler={onChangeHandler}
                resetCounter={resetCounter}
                defaultValue={journal.mood}
              />
              </Col>
              <Col>
              <Input
                label={"Image"}
                fieldName="img"
                onChangeHandler={onChangeHandler}
                resetCounter={resetCounter}
                defaultValue={journal.img}
              />
              </Col>
            </Row>
            <Row className='mb-3'>
              <Col>
                <TextEditor
                  label={"Details"}
                  fieldName="desc"
                  onChangeHandler={handleProcedureContentChange}
                  resetCounter={resetCounter}
                  defaultValue={journal.desc}
                />
              </Col>
            </Row>
          </Container> 
        </Form>  
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => {console.log(journal); submit(journal)}}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
