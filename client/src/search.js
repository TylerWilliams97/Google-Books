import React, {useState} from 'react';
import axios from 'axios';
import {Form, Button} from 'react-bootstrap'



export default function Search() {
    const key = "AIzaSyAZ5U2TWowlnudDTEFfr3QuatXtCwKj-VE"
    const [input, setInput] = useState("");
    const [apires, setApires] = useState("");
    const bookquery = "https://www.googleapis.com/books/v1/volumes?q="+input+"&maxResults=1&key="+key
        
    function query(){
    axios.get(bookquery)
    .then(res => {
        console.log(res.data.items[0].saleInfo.buyLink);
        setApires(res.data.items[0].saleInfo.buyLink);
        
    })
}
    
    return(

        <Form>      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Enter Book Title</Form.Label>
          <Form.Control type="input" placeholder="Book Title" value={input} onChange={(e) => setInput(e.target.value)} />
        </Form.Group>
        <Button href={apires} onClick={query()}>
          Book Search
        </Button>
        <Button>
          Save Book
        </Button>
      </Form>










        )





}