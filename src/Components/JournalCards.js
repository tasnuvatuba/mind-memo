import React from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

export const JournalCards = () => {
  return (
    <div>
        <Card>
            <Card.Body>
              <div className="row">
                <div className="col-md-8">
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </div>
                <div className="col-md-4">
                  <Card.Img variant="top" src="holder.js/100px160" />
                </div>
              </div>
            </Card.Body>
        </Card>
    </div>
  )
}
