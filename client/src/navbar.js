import React from "react";
import {Form,FormControl,Navbar,Nav} from 'react-bootstrap';


function Navbarcom() {


        return(
            <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
      </Form>
      </Navbar>
        )
}
export default Navbarcom;