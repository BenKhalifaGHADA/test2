import Event from "./Event";
import Row from 'react-bootstrap/Row';
//import eventsJson from "../data/events.json";
import { useEffect, useState } from "react";
import Alert from 'react-bootstrap/Alert';
import { deleteEvent, getallEvents } from "../services/api";
function Events() {
    const [isWelcome, setIsWelcome] = useState(true);
    const [eventList, setEventList] = useState([]);

    useEffect(() => {
      const fetchEvents = async () => {
        const eventsResult = await getallEvents();
        setEventList(eventsResult.data);
        console.log(eventList)  ; 
      };
      fetchEvents();
    }, []);
    useEffect(() => {
        const isWelcomeTimeout = setTimeout(() => {
          setIsWelcome(false);
        }, 3000);
    
        return () => {
          clearTimeout(isWelcomeTimeout);
        };
      }, []);

      const [isShowBuyAlert, setIsShowBuyAlert] = useState(false);
   
      const showBuyAlert = () => {
          setIsShowBuyAlert(true);
          setTimeout(() => {
            setIsShowBuyAlert(false);
          }, 2000);
        };
    return ( <>
     {isWelcome && (
        <Alert style={{ width: "70%", marginBottom: 40 }} variant="success">
          Hey welcome to Esprit Events
        </Alert>
      )}
     {/* <Event name="Event1" description="Ceci un evt" img="placeholder.jpg"  price="15$" nbTickets="15" nbParticipants="100" /> */}
     <Row xs={1} md={2} className="g-4">
     
      
            {/* {eventsJson.map((eventItem, index) =>(
                <Event key={index} event={eventItem} showBuyAlert={showBuyAlert} />
            ))} */}
           {/* {eventsJson.map((eventItem, index) => (
          <Event key={index} event={eventItem} showBuyAlert={showBuyAlert} />
        ))} */}
      
      {eventList.map((eventItem, index) =>(
                <Event key={index} event={eventItem} showBuyAlert={showBuyAlert} />
            ))}
           {/* {eventsJson.map((eventItem, index) => (
          <Event key={index} event={eventItem} showBuyAlert={showBuyAlert} />
        ))} */}
      
    </Row>
     
    {isShowBuyAlert && (
        <Alert style={{ width: "70%", marginTop: 20 }} variant="primary">
          You have booked an event
        </Alert>
      )}
    </> );
}

export default Events;