import React from 'react'
import { ModalTemplate } from "../ModalTemplate";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import { Input } from "./Input";
import { Select } from "./Select";
import { Journal } from 'react-bootstrap-icons';
import { useState, useEffect } from "react";
import { uid } from "uid";
import { TextEditor } from "./TextEditor";
import { Container, Row, Col } from "react-bootstrap";
import { formatDateWithTime } from "../../services/DateTimeFormatService";



export const FormModal = ({showModal, onClose, submit, defaultJournal, label}) => {
  const [journal, setJournal] = useState({});
  const [resetCounter, setResetCounter] = useState(0);

  useEffect(() => {
    console.log("default journal changed +++++++++");
    console.log(defaultJournal);
    reset();
  }, [defaultJournal]);

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
    //setResetCounter(resetCounter + 1); 
  }

  useEffect(() => {
    console.log("journal chnaged+++++++++" );
    console.log(defaultJournal);
    console.log(journal);
    setResetCounter(resetCounter + 1);  
    console.log(resetCounter);
  }, [journal])
  


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
      console.log("content---->", content);
      setJournal({ ...journal, desc: content })
  };

  const submitFormModal = () => {
    submit(journal);
  }


  return (
      <ModalTemplate showModal={showModal} onClose={onClose} submit={submitFormModal} label={label}>
        <Form>
          <Container>
           {/* <Button onClick={() => console.log(journal)}>print object</Button> */}
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
    </ModalTemplate>
  );
}
