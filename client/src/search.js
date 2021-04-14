import React, {useState} from 'react';
import axios from 'axios';
import {Form, Button} from 'react-bootstrap'



export default function Search() {
    const key = "AIzaSyAZ5U2TWowlnudDTEFfr3QuatXtCwKj-VE"
    const [input, setInput] = useState("");
    const bookquery = "https://www.googleapis.com/books/v1/volumes?q="+input+"&key="+key
        
    function query(){
    axios.get(bookquery)
    .then(res => {
        console.log(res);
    })
}
    
    return(

        <Form>      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Enter Book Title</Form.Label>
          <Form.Control type="input" placeholder="Book Title" value={input} onChange={(e) => setInput(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={query()}>
          Submit
        </Button>
      </Form>










        )





}