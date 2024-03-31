import React from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Star, StarFill, Trash, Pen } from "react-bootstrap-icons";
import { Col, Row } from 'react-bootstrap';
import { Stack } from 'react-bootstrap';
import { Emoji } from 'emoji-mart';
import ReactQuill from 'react-quill';
import parse from 'html-react-parser';


export const JournalCards = ({journal, handleStarClicked, handleEditClick, handleDeleteClicked}) => {
  return (
    <div>
        <Card >
            <Card.Body>
              <div className="row">
                <div className="col-md-8">
                  <Card.Header>
                    <Row>
                      <Col>
                        <Card.Title>{journal.title}</Card.Title>
                      </Col>
                      <Col className="d-flex justify-content-end">
                        <Stack direction="horizontal" gap={3}>
                          {journal.fav && (<StarFill style={{fontSize: '1.5rem', fill:'#f2bc18'}} onClick={() => handleStarClicked(journal)}></StarFill>)}
                          {!journal.fav && (<Star style={{fontSize: '1.5rem'}} onClick={() => handleStarClicked(journal)}></Star>)}
                          <Pen style={{fontSize: '1.5rem'}} onClick={() => {handleEditClick(journal);}}
                          ></Pen>
                          <Trash style={{fontSize: '1.5rem'}} onClick={() => {handleDeleteClicked(journal);}}></Trash>
                        </Stack>
                      </Col>
                    </Row>
                  <Row>
                      <Card.Subtitle style={{ color: 'grey', fontSize: '0.8rem'}} as="p">Last Modified {journal.lastModified}</Card.Subtitle>
                      <Card.Subtitle style={{ color: 'grey', fontSize: '0.8rem' }} as="p">Created At {journal.createdAt}</Card.Subtitle>
                    </Row>
                  </Card.Header>
                  <Card.Text>
                    <div style={{padding: '10px' }}> {parse(journal.desc)} </div>
                  </Card.Text>
                </div>
                <div className="col-md-4">
                  <Card.Img variant="top" src={journal.img} style={{ width: '100%', height: '200px', objectFit: 'cover'}}/>
                </div>
              </div>
            </Card.Body>
            <Card.Footer>
              <div>
                Category: {journal.category}
              </div>
              <div>
                {journal.mood === "Happy" && <div style={{display: 'flex'}}><div style={{ marginRight: '10px' }}> Mood: </div> <div style={{fontSize: '1.2rem'}}> 😀</div></div> }
                {journal.mood === "Sad" && <div style={{display: 'flex'}}><div style={{ marginRight: '10px' }}> Mood: </div> <div style={{fontSize: '1.2rem'}}> 😥</div></div> }
                {journal.mood === "Neutral" && <div style={{display: 'flex'}}><div style={{ marginRight: '10px' }}> Mood: </div> <div style={{fontSize: '1.2rem'}}> 😐</div></div> }
                {journal.mood === "Angry" && <div style={{display: 'flex'}}><div style={{ marginRight: '10px' }}> Mood: </div> <div style={{fontSize: '1.2rem'}}> 😡</div></div> }
                
              </div>
            </Card.Footer>
        </Card>
    </div>
  )
}
