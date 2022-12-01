import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import {connect} from "react-redux";
import {AddContact} from "../Action/ContactAction";
import {v4 as uuid} from "uuid"; 
import { doc, setDoc,serverTimestamp } from "firebase/firestore"; 
import {db} from "../Firebase/ConfigContact";


const ContactForm = (props) => {
    const [name, setName] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [location, setLocation] = useState("");

      const  HandleSubmit = async(e) => {
        e.preventDefault();
        //dispatch(AddContact({id:uuid(),name, phonenumber, location}))
            //props.addContact({name,phonenumber,location})
           
        let newContacts={id:uuid(),name, phonenumber, location , timestamp:serverTimestamp()};
           console.log ({id:uuid(), name,  phonenumber, location});
           try{
           await setDoc(doc(db, "Contact-form",newContacts.id), newContacts);
           }catch(e){
           console.log(e);
        }
           
        setName("");
        setLocation("");
        setPhonenumber("");
    };



    return (
        <div>
            <Form style={{border:"1px solid black", backgroundColor: "lightcoral", height: "350px" ,borderRadius: "15px"}}>
                <Form.Group style={{width: "300px", marginTop:"20px", marginLeft:"50px"}} 
                className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => {
                        setName(e.target.value)
                    }} />
                </Form.Group>

                <Form.Group style={{width: "300px", marginTop:"20px", marginLeft:"50px"}} className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Phone" value={phonenumber} onChange={(e) => {
                        setPhonenumber(e.target.value)
                    }} />
                </Form.Group>

                <Form.Group style={{width: "300px", marginTop:"20px", marginLeft:"50px"}} className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="Location" value={location} onChange={(e) => {
                        setLocation(e.target.value)
                    }} />
                </Form.Group>

                <Button style={{width: "100px", marginRight:"30px", marginLeft:"50px", fontSize:"15px" }} variant="primary"
                 type="submit" onClick={HandleSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}
const mapDispatchToProps =  {
    addNewContact: AddContact,
  };

export default connect (null, mapDispatchToProps)(ContactForm);