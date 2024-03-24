import React from 'react'
import "../App.css"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export const HomePage = () => {
  return (
    <div><h1>HomePage</h1></div>

    // <Row xs={1} md={1} className="g-4">
    //   {Array.from({ length: 4 }).map((_, idx) => (
    //     <Col key={idx}>
    //       <JournalCards/>
    //     </Col>
    //   ))}
    // </Row>
  )
}
