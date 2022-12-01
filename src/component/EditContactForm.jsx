import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
//import {useDispatch} from 'react-redux';
//import {editContact} from '../Action/ContactAction';
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../Firebase/ConfigContact';



const EditContactForm = (props) => {
    const [name, setName] = useState(props.prefill.name);
    const [phonenumber, setPhonenumber] = useState(props.prefill.phonenumber);
    const [location, setLocation] = useState(props.prefill.location);
    //const dispatch = useDispatch()

    const HandleEdit = async (e) => {
        e.preventDefault();
        let newContact={id:props.prefill.id,name,phonenumber,location}
        const editedContact = doc(db, "Contact-form", props.prefill.id);
        await updateDoc(editedContact, newContact);

        //props.editUser(props.prefill.id,{ name, phonenumber, location });
        //dispatch(editContact({id:props.prefill.id,name,phonenumber,location}))
        setName("");
        setPhonenumber("");
        setLocation("")
        props.closeModal()
    }

    return (
        <div>
            <Form style={{ border: "1px solid black", backgroundColor: "lightcoral", height: "350px", borderRadius: "15px" }}>
                <Form.Group style={{ width: "300px", marginTop: "20px", marginLeft: "50px" }}
                    className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => {
                        setName(e.target.value)
                    }} />
                </Form.Group>

                <Form.Group style={{ width: "300px", marginTop: "20px", marginLeft: "50px" }}
                    className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Phone" value={phonenumber} onChange={(e) => {
                        setPhonenumber(e.target.value)
                    }} />
                </Form.Group>

                <Form.Group style={{ width: "300px", marginTop: "20px", marginLeft: "50px" }}
                    className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="Location" value={location} onChange={(e) => {
                        setLocation(e.target.value)
                    }} />
                </Form.Group>

                <Button style={{ width: "100px", marginRight: "30px", marginLeft: "50px", fontSize: "15px" }} variant="primary" type="submit" onClick={HandleEdit}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}


export default EditContactForm;