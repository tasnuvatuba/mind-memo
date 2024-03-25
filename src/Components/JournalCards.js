import React from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Star, Trash, Pen } from "react-bootstrap-icons";
import { Col, Row } from 'react-bootstrap';

export const JournalCards = ({journal, setIsUpdatePressed, setDefaultJournal}) => {
  return (
    <div>
        <Card>
            <Card.Body>
              <div className="row">
                <div className="col-md-8">
                  <Card.Header>
                    <Row>
                      <Col>
                        <Card.Title>{journal.title}</Card.Title>
                      </Col>
                      <Col>
                        <Star></Star>
                      </Col>
                      <Col>
                        <Pen onClick={() => {
                          setIsUpdatePressed(true);
                          setDefaultJournal(journal);

                        }}></Pen>
                      </Col>
                      <Col>
                        <Trash></Trash>
                      </Col>
                    </Row>
                    <Row>
                      <Card.Subtitle>Last Modified {journal.lastModified}</Card.Subtitle>
                      <Card.Subtitle>Created At {journal.createdAt}</Card.Subtitle>
                    </Row>
                  </Card.Header>
                  <Card.Text>
                    {journal.desc}
                  </Card.Text>
                </div>
                <div className="col-md-4">
                  <Card.Img variant="top" src={journal.img} />
                </div>
              </div>
            </Card.Body>
            <Card.Footer>
              <div>
                Category: {journal.category}
              </div>
              <div>
                Mood: {journal.mood}
              </div>
            </Card.Footer>
        </Card>
    </div>
  )
}
