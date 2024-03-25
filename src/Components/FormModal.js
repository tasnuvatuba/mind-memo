import React from 'react'
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import { Input } from "./Input";
import { Select } from "./Select";
import { Journal } from 'react-bootstrap-icons';
import { useState, useEffect } from "react";
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

export const FormModal = ({showModal, onClose, addJournal, defaultJournal}) => {

  const [journal, setJournal] = useState({});
  const [resetCounter, setResetCounter] = useState(0);

  useEffect(() => {
    reset();
  }, [defaultJournal]);

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
  const reset = () => {
    setJournal(
      defaultJournal? defaultJournal :
      {
        id: uid(),
        title: "",
        desc: "",
        category: "Travelling",
        mood: "happy",
        createdAt: formatDateWithTime(new Date()),
        lastModified: formatDateWithTime(new Date()),
     }   
    )
    setResetCounter(resetCounter + 1)  
  }

  

  return (
    <Modal show={showModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Input
            label={"Title*"}
            fieldName="title"
            onChangeHandler={onChangeHandler}
            resetCounter={resetCounter}
            defaultValue={Journal.title}
            //isTitleEmpty = {isTitleEmpty}
            
          />
          <Input
            label={"Details"}
            fieldName="desc"
            onChangeHandler={onChangeHandler}
            resetCounter={resetCounter}
            defaultValue={Journal.desc}
          />
          <Select
            label="Category"
            fieldName="category"
            options={['Travelling', 'Food & Dining', 'Art & Creativity', 'Relationships', 'Learning', 'Self Reflection']}
            onChangeHandler={onChangeHandler}
            resetCounter={resetCounter}
            defaultValue={Journal.category}
          />
          <Select
            label="Mood"
            fieldName="mood"
            options={["Happy", "Sad", "Neutral", "Angry"]}
            onChangeHandler={onChangeHandler}
            resetCounter={resetCounter}
            defaultValue={Journal.mood}
          />
          <Input
            label={"Image"}
            fieldName="img"
            onChangeHandler={onChangeHandler}
            resetCounter={resetCounter}
            defaultValue={Journal.img}
          />
        </Form>  
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => {addJournal(journal)}}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
