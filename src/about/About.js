import React from 'react'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
// import { Select, Textarea, TextInput } from 'react-materialize';
// import { Container, Button } from '@material-ui/core';
import { Container, Row, Col, CollapsibleItem, Collapsible, Icon } from "react-materialize";
import PlaceIcon from '@mui/icons-material/Place';
import WhatshotIcon from '@mui/icons-material/Whatshot';





export default function About() {
  
  return (
    
    // <div style={{ backgroundColor: "#f2f2f2" }}>
    // <Container>
    //   <h3>About us</h3>
      
    //    <Row>
    //     <p><PeopleAltIcon/> THE TEAM</p>
    //     </Row>
    //     <Row>
    //     <p>Here you can see the film card, which consists of over 50 films from over the world</p>
    //     </Row>
    //     <Row>
    //     <p><PlaceIcon/> Nation</p>
    //     </Row>
    //     <Row>
    //     <p><WhatshotIcon/> Daily news</p>
    //     </Row>
      
      
      
    // </Container>
    // </div>

<Collapsible accordion>
<CollapsibleItem
  expanded={false}
  header="THE TEAM"
  icon={<PeopleAltIcon/>}
  node="div"
>
<p>Here you can see the film card, which consists of over 50 films from over the world</p>
</CollapsibleItem>
<CollapsibleItem
  expanded={false}
  header="Nation"
  icon={<PlaceIcon/>}
  node="div"
>
 Vietnam
</CollapsibleItem>
<CollapsibleItem
  expanded={false}
  header="Daily news"
  icon={<WhatshotIcon/>}
  node="div"
>
  you can go to News to see more
</CollapsibleItem>
</Collapsible>
  );
}