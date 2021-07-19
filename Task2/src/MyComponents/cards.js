import React from 'react';
import './cards.css';
import {Button} from 'react-bootstrap';
import Card from "react-bootstrap/Card";
export default function Cards(props) {
  return (
      <div className="cards">
        {props.cardData.map((person, index) => {
          return (
            <Card style={{width: "15rem"}}>
              <Card.Img variant="top" src={person.avatar} /> 
              <Card.Body>
                <Card.Text>
                  <ul>
                    <li>{person.first_name} {person.last_name}</li>
                    <li>{person.email}</li>
                    <Button variant="primary" id="btn">View</Button>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
  );
}