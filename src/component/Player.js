
import React from "react";
import Card from 'react-bootstrap/Card';
const Player = (props ) => {
    
      return (
        <div className="App">
        <Card className="Card" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={props.Players.imageUrl}  />
          <Card.Body>
            <Card.Title>{props.Players.nom}</Card.Title>
          </Card.Body>
  
          <p> <strong>EQUIPE:</strong>   {props.Players.equipe}</p>
          <p> <strong>NATIONALITE:</strong>  {props.Players.nationalite}</p>
          <p> <strong>NUMEROMAILLOT:</strong> {props.Players.numeroMaillot}</p>
          <p> <strong>AGE:</strong>       {props.Players.age}</p>
        
        </Card>
        </div>
      );
    }

export default Player;
