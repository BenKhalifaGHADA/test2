import Button from 'react-bootstrap/Button';

import { useState  } from 'react';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import { Link } from "react-router-dom";

function Event(props) {
    const [event, setEvent] = useState(props.event);
   
    function buy(){
       props.showBuyAlert();
       setEvent((eventPrev)=>({
          ...eventPrev,
          nbParticipants: eventPrev.nbParticipants+1,
          nbTickets: eventPrev.nbTickets-1,
       }))
    }

    const handleLike = () => {
        setEvent((eventPrev) => ({
          ...eventPrev,
          like: !eventPrev.like,
        }));
      };
   
    
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`/images/${!!event.nbTickets ? event.img : "sold_out.png"}`}/>
      <Card.Body>
      <Card.Title>
            <Link to={`/events/${event.id}`}>{event.name}</Link>
          </Card.Title>
        <Card.Text>Description: {event.description}</Card.Text>
        
        <Card.Text>
         Nombre des tickets: {event.nbTickets}
        </Card.Text>
        <Card.Text>
          Prix:  {event.price}
        </Card.Text>
        <Card.Text>
        Nombre des participants: {event.nbParticipants}
        </Card.Text>
        <Button variant="primary" onClick={buy} disabled={!!event.nbTickets ? false : true}>Book an event</Button> 
        <Button variant="primary" onClick={handleLike} >{event.like ?"like":"dislike"}</Button> 
      </Card.Body>
      
    </Card>
      );
}

export default Event;